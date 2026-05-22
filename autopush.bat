@echo off
cd /d "L:\IT\Minh Stark\Personal Web"

:loop
git add .
git diff --cached --quiet
if %errorlevel% == 0 (
    timeout /t 30 /nobreak >nul
    goto loop
)
git commit -m "Auto update %date% %time%"
git push origin main
echo [%time%] Pushed to GitHub
npx vercel deploy --prod --yes --project personal-web
echo [%time%] Deployed to Vercel
timeout /t 30 /nobreak >nul
goto loop
