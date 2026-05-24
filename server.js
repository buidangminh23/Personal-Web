const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { URL } = require('url');
const { exec } = require('child_process');

const SECURITY_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://*.githubusercontent.com https://*.vercel.app",
        "connect-src 'self' https://api.github.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
    ].join('; ')
};

const PORT = 203;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.mp4': 'video/mp4'
};

const clients = new Set();

// Heartbeat to keep SSE connections alive and prevent timeout
setInterval(() => {
    clients.forEach(client => {
        try {
            client.write(':ping\n\n');
        } catch (e) {
            clients.delete(client);
        }
    });
}, 15000);

// Auto Git Push on Changes
let gitPushTimeout;
function triggerVercelDeploy() {
    console.log(`[Vercel] Deploying latest changes to production...`);
    exec('npx vercel deploy --prod --yes --project personal-web', { cwd: __dirname, maxBuffer: 1024 * 1024 * 10 }, (err, stdout, stderr) => {
        if (err) {
            console.error(`[Vercel] Deploy failed: ${err.message}`);
            if (stderr) console.error(stderr);
            return;
        }
        console.log(`[Vercel] Production deploy completed.`);
        if (stdout) console.log(stdout);
        
        clients.forEach(client => {
            try {
                client.write('data: reload\n\n');
            } catch (e) {
                clients.delete(client);
            }
        });
    });
}

function triggerAutoGitPush(filename) {
    clearTimeout(gitPushTimeout);
    gitPushTimeout = setTimeout(() => {
        exec('git status --porcelain', (err, stdout) => {
            if (err) {
                console.error(`[Auto-Git] Status check failed: ${err.message}`);
                return;
            }
            if (!stdout.trim()) {
                // No actual changes to commit
                return;
            }
            console.log(`\n[Auto-Git] Changes detected. Preparing auto-push to GitHub...`);
            exec('git add .', (err) => {
                if (err) {
                    console.error(`[Auto-Git] Git add failed: ${err.message}`);
                    return;
                }
                const timestamp = new Date().toLocaleTimeString('vi-VN', { hour12: false });
                const commitMsg = `auto: update portfolio at ${timestamp} (saved ${path.basename(filename)})`;
                
                exec(`git commit -m "${commitMsg}"`, (err) => {
                    if (err) {
                        console.error(`[Auto-Git] Git commit failed: ${err.message}`);
                        return;
                    }
                    console.log(`[Auto-Git] Committed locally: "${commitMsg}"`);
                    console.log(`[Auto-Git] Pushing changes to GitHub...`);
                    
                    exec('git push origin main', (err) => {
                        if (err) {
                            console.error(`[Auto-Git] Git push failed: ${err.message}`);
                        } else {
                            console.log(`✨ [Auto-Git] Successfully pushed changes to GitHub!`);
                            triggerVercelDeploy();
                        }
                    });
                });
            });
        });
    }, 10000); // 10 seconds debounce to prevent spamming commits
}

// Live Reload File Watcher & Auto-Git Integration
let reloadTimeout;
const WATCHED_EXTENSIONS = ['.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4'];

fs.watch(__dirname, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    
    // Ignore git folder, node_modules, and the server script itself
    if (filename.includes('.git') || filename.includes('node_modules') || filename === 'server.js') {
        return;
    }
    
    const ext = path.extname(filename).toLowerCase();
    if (WATCHED_EXTENSIONS.includes(ext)) {
        console.log(`[Watcher] File changed: ${filename}`);
        
        // 1. Live Reload Broadcast
        clearTimeout(reloadTimeout);
        reloadTimeout = setTimeout(() => {
            console.log(`[Watcher] Broadcasting reload to ${clients.size} clients...`);
            clients.forEach(client => {
                try {
                    client.write('data: reload\n\n');
                } catch (e) {
                    clients.delete(client);
                }
            });
        }, 100);

        // 2. Auto-Git Trigger
        triggerAutoGitPush(filename);
    }
});

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = decodeURIComponent(requestUrl.pathname);

    Object.entries(SECURITY_HEADERS).forEach(([key, value]) => res.setHeader(key, value));
    res.removeHeader('X-Powered-By');
    res.setHeader('Server', '');

    if (pathname === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        });
        res.write(':ok\n\n');
        clients.add(res);
        req.on('close', () => {
            clients.delete(res);
        });
        return;
    }
    
    // Resolve file path
    let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
    
    // Prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        res.statusCode = 403;
        res.end('Access Denied');
        return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Return 404
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('404 Not Found');
            } else {
                // Return 500
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Internal Server Error: ${err.code}`);
            }
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            
            res.end(data);
        }
    });
});

function getTailscaleIPv4() {
    const interfaces = os.networkInterfaces();
    // Check by name first
    for (const name of Object.keys(interfaces)) {
        if (name.toLowerCase().includes('tailscale')) {
            for (const net of interfaces[name]) {
                if (net.family === 'IPv4') return net.address;
            }
        }
    }
    // Fallback by IP range (100.64.0.0/10)
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                const parts = net.address.split('.');
                if (parts[0] === '100' && parseInt(parts[1], 10) >= 64 && parseInt(parts[1], 10) <= 127) {
                    return net.address;
                }
            }
        }
    }
    return null;
}

function logServerStatus(port) {
    const tailscaleIP = getTailscaleIPv4();
    
    console.log(`\n==================================================`);
    console.log(`🚀 PORTFOLIO DEVELOPMENT SERVER STARTED`);
    console.log(`==================================================`);
    console.log(`Local Access:`);
    console.log(`  👉 http://localhost:${port}`);
    console.log(`  👉 http://127.0.0.1:${port}`);
    
    if (tailscaleIP) {
        console.log(`\nTailscale IP Access (from other tailnet devices):`);
        console.log(`  👉 http://${tailscaleIP}:${port}`);
        
        // Attempt to fetch MagicDNS name asynchronously for easier domain access
        exec('tailscale status --json', (err, stdout) => {
            if (!err && stdout) {
                try {
                    const data = JSON.parse(stdout);
                    if (data.Self && data.Self.DNSName) {
                        // Remove trailing dot if present
                        const dnsName = data.Self.DNSName.replace(/\.$/, '');
                        console.log(`\nTailscale MagicDNS Access:`);
                        console.log(`  👉 http://${dnsName}:${port}`);
                    }
                } catch (e) {
                    // Ignore parsing errors
                }
            }
            console.log(`==================================================\n`);
        });
    } else {
        console.log(`\n[Info] Tailscale IP not detected. Start Tailscale to view`);
        console.log(`on other devices (iPad, iPhone, MacBook, etc.)`);
        console.log(`==================================================\n`);
    }
}

server.listen(PORT, () => {
    const actualPort = server.address().port;
    logServerStatus(actualPort);
});

server.on('error', (err) => {
    if (err.code === 'EACCES') {
        console.error(`[Error] Port ${PORT} requires administrative privileges (ports below 1024).`);
        console.log(`Retrying on fallback port 2030...`);
        server.listen(2030);
    } else if (err.code === 'EADDRINUSE') {
        console.error(`[Error] Port ${PORT} is already in use.`);
        console.log(`Retrying on fallback port 2030...`);
        server.listen(2030);
    } else {
        console.error(`[Server Error]`, err);
    }
});
