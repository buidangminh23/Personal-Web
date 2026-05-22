document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ==========================================
    // TRANSLATIONS DICTIONARY
    // ==========================================
    const translations = {
        vi: {
            "nav-home": "Trang chủ",
            "nav-about": "Giới thiệu",
            "nav-skills": "Kỹ năng",
            "nav-projects": "Dự án",
            "nav-experience": "Kinh nghiệm",
            "nav-activities": "Hoạt động",
            "nav-achievements": "Thành tích",
            "nav-contact": "Liên hệ",
            "hero-subtitle": "XIN CHÀO, TÔI LÀ",
            "hero-name": "Bùi Đăng Minh",
            "hero-iam": "Tôi là",
            "hero-description": "Một sinh viên Khoa học dữ liệu tại Swinburne University đam mê kiến tạo những sản phẩm công nghệ hiện đại, tối ưu hiệu năng và mang tính thẩm mỹ cao. Tôi tập trung vào việc phát triển ứng dụng web và thiết kế giao diện sáng tạo.",
            "hero-description-2": "Tôi học tập và nghiên cứu các công nghệ mới, hướng tới phát triển các ứng dụng web chất lượng cao. Sẵn sàng đồng hành cùng các dự án đột phá.",
            "hero-view-projects": "Xem Dự Án",
            "hero-contact-me": "Liên Hệ",
            "hero-scroll": "Cuộn xuống",
            "about-subtitle": "THÔNG TIN",
            "about-title": "Về Bản Thân",
            "about-heading": "Lập trình không chỉ là học tập, đó là đam mê tạo nên giá trị thực tế",
            "about-p1": "Tôi hiện là sinh viên chuyên ngành Khoa học dữ liệu tại Swinburne University. Bắt đầu tiếp cận lập trình từ sớm, tôi luôn mong muốn tự tay tạo dựng những ứng dụng thiết thực, có tính ứng dụng cao và tối ưu trải nghiệm.",
            "about-p2": "Với tinh thần cầu tiến và khả năng tự học vững vàng, tôi không ngừng trau dồi các kiến thức lập trình hiện đại như React, Node.js và thiết kế UI/UX để phát triển những sản phẩm web toàn diện.",
            "about-fullname-label": "Họ và tên:",
            "about-gender-label": "Giới tính:",
            "about-gender-val": "Nam",
            "about-dob-label": "Ngày sinh:",
            "about-age-unit": "tuổi",
            "about-weight-label": "Cân nặng:",
            "about-school-label": "Trường:",
            "about-studentid-label": "Mã sinh viên:",
            "about-email-label": "Email cá nhân:",
            "about-student-email-label": "Email sinh viên:",
            "about-phone-label": "Điện thoại / Zalo:",
            "about-location-label": "Vị trí:",
            "about-location-val": "Hà Nội, Việt Nam",
            "about-status-label": "Trạng thái:",
            "about-status-val": "Sẵn sàng hợp tác (Freelance/Full-time)",
            "about-stat-ielts": "Chứng Chỉ Anh Ngữ",
            "about-stat-mos": "Tin Học Văn Phòng",
            "about-stat-projects": "Dự Án Hoàn Thành",
            "about-stat-yob": "Năm Sinh",
            "skills-subtitle": "NĂNG LỰC",
            "skills-title": "Kỹ Năng Lập Trình",
            "skills-tab-tools": "Công cụ & Khác",
            "skill-responsive": "Responsive & UI/UX Design",
            "skill-ai": "AI Prompt Engineering / LLMs",
            "projects-subtitle": "SẢN PHẨM",
            "projects-title": "Dự Án Nổi Bật",
            "projects-filter-all": "Tất cả",
            "projects-filter-system": "Hệ thống",
            "proj1-title": "Aegis Cyber Dashboard",
            "proj1-desc": "Hệ thống giám sát bảo mật thời gian thực với biểu đồ trực quan động và cảnh báo an ninh thông minh.",
            "proj2-title": "Stark OS Interface",
            "proj2-desc": "Giao diện mô phỏng hệ điều hành holographic mang hơi hướng Iron Man, tương tác bằng cử chỉ ảo.",
            "proj3-title": "Nexus Glassmorphic Market",
            "proj3-desc": "Nền tảng thương mại điện tử giao diện kính mờ sang trọng, thanh toán Stripe mượt mà và hoạt ảnh giỏ hàng 3D.",
            "experience-subtitle": "LỊCH SỬ",
            "experience-title": "Hành Trình Học Tập",
            "exp1-date": "2024 - HIỆN TẠI",
            "exp1-title": "Sinh viên Khoa học dữ liệu",
            "exp1-desc": "Học tập và nghiên cứu chuyên sâu về khoa học dữ liệu, phân tích dữ liệu và lập trình. Xây dựng các mô hình dữ liệu và dự án cá nhân chất lượng cao.",
            "exp2-title": "Học sinh & Tự học lập trình",
            "exp2-company": "Trường Trung học Phổ thông",
            "exp2-desc": "Bắt đầu hành trình công nghệ. Tự học HTML, CSS, JavaScript cơ bản, thiết kế giao diện tĩnh và phát triển tư duy thuật toán.",
            "exp3-title": "Full-Stack Developer chuyên nghiệp",
            "exp3-company": "Stark Tech / Freelance",
            "exp3-desc": "Không ngừng trau dồi các framework hiện đại (React, Next.js, Node.js), học hỏi thêm về DevOps và kiến trúc phần mềm để kiến tạo những hệ thống lớn chất lượng.",
            "activities-subtitle": "TRẢI NGHIỆM",
            "activities-title": "Hoạt Động Thực Tế",
            "act1-tag": "Kiến tập",
            "act1-title": "Kiến tập thực tế tại Hòa Phát Hải Dương",
            "act1-desc": "Chuyến tham quan thực tế tìm hiểu quy trình vận hành và hệ thống quản lý công nghiệp quy mô lớn cùng tập thể sinh viên Swinburne.",
            "act2-tag": "Thực tế",
            "act2-title": "Khảo sát hệ thống cảng & logistics",
            "act2-desc": "Khảo sát thực địa hệ thống hạ tầng cảng biển, cần cẩu container siêu tải trọng và quy trình xếp dỡ hàng hóa logistics.",
            "act3-tag": "Ngoại khóa",
            "act3-title": "Hoạt động ngoại khóa & kết nối",
            "act3-desc": "Tham gia hoạt động giao lưu, chăm sóc cảnh quan khuôn viên trường và tăng cường sự gắn kết giữa sinh viên và giảng viên.",
            "achievements-subtitle": "CHỨNG NHẬN",
            "achievements-title": "Thành Tích & Học Thuật",
            "ach1-title": "Học bổng Sinh viên Xuất sắc Swinburne",
            "ach1-desc": "Đạt học bổng đầu vào xuất sắc dựa trên thành tích học tập và năng lực hoạt động ngoại khóa năng nổ.",
            "ach2-title": "GPA Học thuật Xuất sắc",
            "ach2-desc": "Duy trì kết quả học tập xuất sắc trong các môn chuyên ngành lập trình, cấu trúc dữ liệu và giải thuật.",
            "ach3-title": "Chứng chỉ Chuyên môn Công nghệ",
            "ach3-desc": "Hoàn thành xuất sắc các khóa học chuyên sâu về Web Development, UI/UX Design và AI Prompting từ các nền tảng quốc tế.",
            "ach4-title": "Chứng chỉ Tiếng Anh IELTS 5.5",
            "ach4-desc": "Chứng nhận năng lực sử dụng Tiếng Anh chuẩn quốc tế, hỗ trợ đắc lực trong môi trường học tập toàn cầu tại Swinburne.",
            "ach5-title": "Chứng chỉ Tin học Văn phòng Quốc tế (MOS)",
            "ach5-desc": "Đạt danh hiệu Microsoft Office Specialist (MOS): Associate sau khi xuất sắc hoàn thành 3 chứng chỉ Word, Excel và PowerPoint 2019.",
            "ach-hl-tag1": "Học bổng",
            "ach-hl-title1": "Lễ trao giải Học bổng & Thiết bị học tập Swinburne",
            "ach-hl-desc1": "Vinh dự nhận học bổng đầu vào xuất sắc và trang thiết bị hỗ trợ học tập chuyên sâu từ đại diện nhà trường Swinburne.",
            "ach-hl-tag2": "Học thuật",
            "ach-hl-title2": "Chứng nhận Sinh viên xuất sắc nhất môn học",
            "ach-hl-desc2": "Đạt danh hiệu \"Best Unit Performance in Global Citizen (EGC6)\" dành cho sinh viên có điểm số xuất sắc nhất môn học tại Swinburne Việt Nam.",
            "contact-subtitle": "KẾT NỐI",
            "contact-title": "Liên Hệ Với Tôi",
            "contact-heading": "Hãy thảo luận về dự án tiếp theo của bạn!",
            "contact-intro": "Tôi luôn sẵn sàng đón nhận những cơ hội hợp tác mới, các dự án freelance thú vị hoặc các cuộc thảo luận kỹ thuật. Hãy gửi tin nhắn cho tôi bất cứ lúc nào!",
            "contact-method-email": "Email Cá Nhân",
            "contact-method-student-email": "Email Sinh Viên",
            "contact-method-phone": "Số Điện Thoại",
            "contact-method-zalo": "Zalo",
            "contact-method-location": "Địa điểm",
            "form-label-name": "Họ và tên",
            "form-label-email": "Địa chỉ Email",
            "form-label-message": "Lời nhắn",
            "form-placeholder-name": "Nguyễn Văn A",
            "form-placeholder-email": "name@gmail.com",
            "form-placeholder-message": "Nội dung dự án hoặc công việc bạn muốn thảo luận...",
            "form-submit": "Gửi tin nhắn",
            "footer-copyright": "© 2026 Bùi Đăng Minh. Tất cả quyền được bảo lưu.",
            "footer-designed-by": "Thiết kế bởi",
            "footer-designer-name": "Bùi Đăng Minh",
            "about-fullname-val": "Bùi Đăng Minh",
            "float-messenger": "Bùi Đăng Minh<small>(8h-21h)</small>",
            "float-zalo": "Bùi Đăng Minh<small>(8h-21h)</small>",
            "float-facebook": "Bùi Đăng Minh",
            "float-instagram": "buidangminh_06",
            "float-telegram": "Gemeraleakschannel",
            "float-phone": "0384 741 350<small>(8h-21h)</small>",
            "toast-success": "Tin nhắn của bạn đã được gửi thành công! Cảm ơn bạn.",
            "submit-loading": "Đang gửi...",
            "view-details": "Xem chi tiết",
            "back-to-portfolio": "Quay lại",
            "project-details-title": "Chi Tiết Dự Án",
            "proj-meta-category": "Danh mục",
            "proj-meta-date": "Thời gian",
            "proj-meta-tech": "Công nghệ",
            "proj-meta-links": "Liên kết",
            "proj-meta-demo": "Trải nghiệm trực tiếp",
            "proj-meta-github": "Xem mã nguồn",
            "proj-section-overview": "Tổng Quan Dự Án",
            "proj-section-features": "Tính Năng Nổi Bật",
            "proj1-detail-overview": "Aegis Cyber Dashboard là một giải pháp giám sát an ninh mạng toàn diện dành cho các doanh nghiệp. Hệ thống thu thập dữ liệu lưu lượng truy cập mạng theo thời gian thực, tự động phân tích và phát hiện các mối đe dọa bảo mật như tấn công DDoS, quét cổng (port scanning) và truy cập trái phép. Giao diện trực quan hóa dữ liệu động giúp quản trị viên dễ dàng nắm bắt trạng thái hệ thống trong nháy mắt.",
            "proj1-detail-f1": "Giám sát lưu lượng mạng thời gian thực qua giao diện WebSocket.",
            "proj1-detail-f2": "Biểu đồ trực quan hóa dữ liệu động sử dụng Chart.js và D3.js.",
            "proj1-detail-f3": "Hệ thống cảnh báo an ninh thông minh qua Email và Telegram.",
            "proj1-detail-f4": "Phân quyền người dùng chi tiết (Role-Based Access Control).",
            "proj1-detail-f5": "Báo cáo thống kê tự động hàng tuần/tháng.",
            "proj2-detail-overview": "Stark OS Interface là một dự án giao diện web tương tác mô phỏng hệ điều hành holographic của Tony Stark (Iron Man). Dự án được xây dựng với mục tiêu thử nghiệm các công nghệ tương tác web hiện đại, bao gồm dựng hình 3D trong trình duyệt, xử lý âm thanh thời gian thực và điều khiển bằng cử chỉ qua webcam.",
            "proj2-detail-f1": "Lõi năng lượng Stark Core 3D tương tác xoay và phát sáng bằng Three.js.",
            "proj2-detail-f2": "Các bảng điều khiển floating panel hiển thị thông số CPU/RAM giả lập.",
            "proj2-detail-f3": "Hệ thống âm thanh tương tác Web Audio API chân thực.",
            "proj2-detail-f4": "Trợ lý ảo Jarvis tích hợp mô hình ngôn ngữ lớn (LLM) phản hồi bằng giọng nói.",
            "proj2-detail-f5": "Hỗ trợ điều khiển cử chỉ webcam cơ bản qua thư viện thị giác máy tính.",
            "proj3-detail-overview": "Nexus Glassmorphic Market là một nền tảng thương mại điện tử hiện đại, chuyên cung cấp các tài nguyên thiết kế đồ họa, mã nguồn và sản phẩm số. Giao diện được thiết kế theo phong cách Glassmorphism (kính mờ) thời thượng, đem lại trải nghiệm sang trọng và thu hút người dùng.",
            "proj3-detail-f1": "Giao diện kính mờ Glassmorphism mượt mà và tương thích tốt trên mobile.",
            "proj3-detail-f2": "Thanh toán an toàn qua cổng Stripe với hóa đơn tự động.",
            "proj3-detail-f3": "Hoạt ảnh giỏ hàng 3D tương tác sống động.",
            "proj3-detail-f4": "Hệ thống quản lý sản phẩm số và lịch sử tải về cho khách hàng.",
            "proj3-detail-f5": "Trang quản trị (Admin dashboard) trực quan quản lý doanh thu và tồn kho."
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-experience": "Experience",
            "nav-activities": "Activities",
            "nav-achievements": "Achievements",
            "nav-contact": "Contact",
            "hero-subtitle": "HI, I AM",
            "hero-name": "Bui Dang Minh",
            "hero-iam": "I am a",
            "hero-description": "A Data Science student at Swinburne University passionate about building modern, high-performance, and creative web applications. I focus on web development and innovative UI/UX design.",
            "hero-description-2": "I study and research new technologies, aiming to develop high-quality web applications. Ready to partner on breakthrough projects.",
            "hero-view-projects": "View Projects",
            "hero-contact-me": "Contact Me",
            "hero-scroll": "Scroll Down",
            "about-subtitle": "ABOUT",
            "about-title": "About Me",
            "about-heading": "Programming is not just studying, it's the passion to create real value",
            "about-p1": "I am currently a Data Science student at Swinburne University. Starting my tech journey early, I always strive to build practical applications with great usability and optimized performance.",
            "about-p2": "With an active learning attitude and strong self-study skills, I continuously update my knowledge of modern web technologies like React, Node.js, and UI/UX design to develop comprehensive software products.",
            "about-fullname-label": "Full Name:",
            "about-gender-label": "Gender:",
            "about-gender-val": "Male",
            "about-dob-label": "Date of Birth:",
            "about-age-unit": "years old",
            "about-weight-label": "Weight:",
            "about-school-label": "University:",
            "about-studentid-label": "Student ID:",
            "about-email-label": "Personal Email:",
            "about-student-email-label": "Student Email:",
            "about-phone-label": "Phone / Zalo:",
            "about-location-label": "Location:",
            "about-location-val": "Hanoi, Vietnam",
            "about-status-label": "Status:",
            "about-status-val": "Available for collaboration (Freelance/Full-time)",
            "about-stat-ielts": "English Certificate",
            "about-stat-mos": "Office IT Certificate",
            "about-stat-projects": "Completed Projects",
            "about-stat-yob": "Year of Birth",
            "skills-subtitle": "ABILITIES",
            "skills-title": "Programming Skills",
            "skills-tab-tools": "Tools & Others",
            "skill-responsive": "Responsive & UI/UX Design",
            "skill-ai": "AI Prompt Engineering / LLMs",
            "projects-subtitle": "PORTFOLIO",
            "projects-title": "Featured Projects",
            "projects-filter-all": "All",
            "projects-filter-system": "System",
            "proj1-title": "Aegis Cyber Dashboard",
            "proj1-desc": "Real-time security monitoring dashboard with dynamic visualization charts and smart security alerts.",
            "proj2-title": "Stark OS Interface",
            "proj2-desc": "Holographic operating system simulation interface styled after Iron Man, featuring gesture-based virtual interaction.",
            "proj3-title": "Nexus Glassmorphic Market",
            "proj3-desc": "Premium glassmorphic e-commerce platform with smooth Stripe payments and 3D cart animations.",
            "experience-subtitle": "HISTORY",
            "experience-title": "Learning Journey",
            "exp1-date": "2024 - PRESENT",
            "exp1-title": "Data Science Student",
            "exp1-desc": "Studying data science, analytics, and programming. Building robust data models, personal projects, and preparing to become a professional Data Scientist.",
            "exp2-title": "High School Student & Self-Taught Coder",
            "exp2-company": "High School",
            "exp2-desc": "Began my technology journey. Self-taught basic HTML, CSS, JavaScript, static UI layouts, and basic algorithmic problem solving.",
            "exp3-title": "Professional Full-Stack Developer",
            "exp3-company": "Stark Tech / Freelance",
            "exp3-desc": "Constantly learning modern frameworks (React, Next.js, Node.js), DevOps, and software architecture to build reliable, large-scale systems.",
            "activities-subtitle": "EXPERIENCES",
            "activities-title": "Field Activities",
            "act1-tag": "Field Trip",
            "act1-title": "Field Trip to Hoa Phat Hai Duong",
            "act1-desc": "An industrial site visit to learn about large-scale operation processes and industrial management systems with Swinburne students.",
            "act2-tag": "Practical",
            "act2-title": "Port & Logistics Infrastructure Survey",
            "act2-desc": "Field survey of seaport infrastructure, high-capacity container cranes, and logistics cargo handling processes.",
            "act3-tag": "Extracurricular",
            "act3-title": "Extracurricular & Networking Activities",
            "act3-desc": "Participating in networking activities, campus landscaping projects, and fostering teacher-student connections.",
            "achievements-subtitle": "CERTIFICATES",
            "achievements-title": "Achievements & Academics",
            "ach1-title": "Swinburne Excellence Scholarship",
            "ach1-desc": "Awarded the entrance scholarship based on outstanding academic results and active extracurricular involvement.",
            "ach2-title": "Outstanding Academic GPA",
            "ach2-desc": "Maintaining high performance in programming major courses, data structures, and algorithms.",
            "ach3-title": "Professional Tech Certifications",
            "ach3-desc": "Successfully completed specialized courses on Web Development, UI/UX Design, and AI Prompting from international platforms.",
            "ach4-title": "IELTS 5.5 English Certificate",
            "ach4-desc": "Certified international English language proficiency, supporting global academic and research activities at Swinburne.",
            "ach5-title": "Microsoft Office Specialist (MOS) Certifications",
            "ach5-desc": "Earned Microsoft Office Specialist (MOS): Associate designation by successfully passing Word, Excel, and PowerPoint 2019 exams.",
            "ach-hl-tag1": "Scholarship",
            "ach-hl-title1": "Swinburne Scholarship & Tech Prize Ceremony",
            "ach-hl-desc1": "Honored to receive the entry scholarship and learning equipment for advanced studies from Swinburne University representatives.",
            "ach-hl-tag2": "Academic",
            "ach-hl-title2": "Best Unit Performance in Course",
            "ach-hl-desc2": "Awarded for achieving the highest academic grade in the Global Citizen course (EGC6) at Swinburne Vietnam.",
            "contact-subtitle": "CONNECT",
            "contact-title": "Contact Me",
            "contact-heading": "Let's discuss your next project!",
            "contact-intro": "I'm always open to new collaboration opportunities, exciting freelance projects, or technical discussions. Feel free to drop me a message anytime!",
            "contact-method-email": "Personal Email",
            "contact-method-student-email": "Student Email",
            "contact-method-phone": "Phone Number",
            "contact-method-zalo": "Zalo",
            "contact-method-location": "Location",
            "form-label-name": "Full Name",
            "form-label-email": "Email Address",
            "form-label-message": "Message",
            "form-placeholder-name": "John Doe",
            "form-placeholder-email": "name@gmail.com",
            "form-placeholder-message": "The project details or job description you'd like to discuss...",
            "form-submit": "Send Message",
            "footer-copyright": "© 2026 Bui Dang Minh. All rights reserved.",
            "footer-designed-by": "Designed by",
            "footer-designer-name": "Bui Dang Minh",
            "about-fullname-val": "Bui Dang Minh",
            "float-messenger": "Bui Dang Minh<small>(8am-9pm)</small>",
            "float-zalo": "Bui Dang Minh<small>(8am-9pm)</small>",
            "float-facebook": "Bui Dang Minh",
            "float-instagram": "buidangminh_06",
            "float-telegram": "Gemeraleakschannel",
            "float-phone": "0384 741 350<small>(8am-9pm)</small>",
            "toast-success": "Your message has been sent successfully! Thank you.",
            "submit-loading": "Sending...",
            "view-details": "View details",
            "back-to-portfolio": "Back to Portfolio",
            "project-details-title": "Project Details",
            "proj-meta-category": "Category",
            "proj-meta-date": "Timeline",
            "proj-meta-tech": "Technologies",
            "proj-meta-links": "Links",
            "proj-meta-demo": "Live Preview",
            "proj-meta-github": "View Source Code",
            "proj-section-overview": "Project Overview",
            "proj-section-features": "Key Features",
            "proj1-detail-overview": "Aegis Cyber Dashboard is a comprehensive network security monitoring solution for enterprises. The system collects real-time network traffic data, automatically analyzes it, and detects security threats such as DDoS attacks, port scanning, and unauthorized access. The dynamic data visualization interface allows administrators to easily grasp the system status at a glance.",
            "proj1-detail-f1": "Real-time network traffic monitoring via WebSocket interface.",
            "proj1-detail-f2": "Dynamic data visualization charts using Chart.js and D3.js.",
            "proj1-detail-f3": "Smart security alert system integrated with Email and Telegram.",
            "proj1-detail-f4": "Granular Role-Based Access Control (RBAC).",
            "proj1-detail-f5": "Automated weekly/monthly statistics and audit reports.",
            "proj2-detail-overview": "Stark OS Interface is an interactive web interface project simulating Tony Stark's holographic operating system (Iron Man). The project was built with the goal of experimenting with modern interactive web technologies, including 3D rendering in the browser, real-time audio processing, and gesture control via webcam.",
            "proj2-detail-f1": "Interactive 3D Stark Core energy core rotating and glowing using Three.js.",
            "proj2-detail-f2": "Floating futuristic panels displaying simulated CPU/RAM diagnostics.",
            "proj2-detail-f3": "Immersive interactive sound system powered by Web Audio API.",
            "proj2-detail-f4": "Jarvis AI assistant integrated with LLMs for voice-guided feedback.",
            "proj2-detail-f5": "Basic gesture control via webcam using computer vision libraries.",
            "proj3-detail-overview": "Nexus Glassmorphic Market is a modern e-commerce platform specializing in graphic design assets, source code, and digital products. The interface is designed in a trendy Glassmorphism style, providing a premium and engaging user experience.",
            "proj3-detail-f1": "Ultra-sleek Glassmorphism interface fully optimized for mobile layouts.",
            "proj3-detail-f2": "Secure checkout integrations via Stripe API with auto-generated invoices.",
            "proj3-detail-f3": "Vibrant and interactive 3D shopping cart animations.",
            "proj3-detail-f4": "Digital product delivery system with customer download history.",
            "proj3-detail-f5": "Visual admin dashboard for tracking sales, analytics, and inventories."
        }
    };

    // ==========================================
    // 1. MOBILE HAMBURGER MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const isActive = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            
            // Toggle hamburger bars animation
            const bars = hamburger.querySelectorAll('.bar');
            if (isActive) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // ==========================================
    // 2. DARK / LIGHT THEME TOGGLE
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        if (themeToggle) themeToggle.setAttribute('aria-expanded', 'false');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.setAttribute('aria-expanded', 'true');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            body.classList.toggle('dark-theme');
            
            const isLight = body.classList.contains('light-theme');
            themeToggle.setAttribute('aria-expanded', isLight ? 'true' : 'false');
            
            if (isLight) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
            
            // Re-render icons if necessary
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }

    // ==========================================
    // 3. LANGUAGE SWITCHER LOGIC
    // ==========================================
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    let currentLang = localStorage.getItem('lang') || 'vi';

    // Typing effect roles
    const rolesDict = {
        vi: [
            "Sinh viên Swinburne.",
            "Sinh viên Khoa học Dữ liệu.",
            "Web Developer.",
            "Người đam mê Công nghệ."
        ],
        en: [
            "Swinburne Student.",
            "Data Science Student.",
            "Web Developer.",
            "Tech Enthusiast."
        ]
    };

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Show opposite language code on button
        langLabel.textContent = lang === 'vi' ? 'EN' : 'VI';
        
        // Toggle aria-expanded (true for EN, false for VI)
        if (langToggle) {
            langToggle.setAttribute('aria-expanded', lang === 'en' ? 'true' : 'false');
        }

        // Translate text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                const val = translations[lang][key];
                if (val.includes('<')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        // Translate input placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const targetLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(targetLang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // ==========================================
    // 4. HERO TYPING EFFECT
    // ==========================================
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeEffect() {
            // Fetch roles dynamically in current language
            const roles = rolesDict[currentLang] || rolesDict.vi;
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Delete characters
                typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Deleting is faster
            } else {
                // Type characters
                typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 120; // Normal typing speed
            }

            // State changes
            if (!isDeleting && charIndex === currentRole.length) {
                // Completed typing, pause before deleting
                isDeleting = true;
                typingSpeed = 2000; // Pause duration
            } else if (isDeleting && charIndex === 0) {
                // Completed deleting, switch to next word
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before typing next word
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Start typing loop
        setTimeout(typeEffect, 1000);
    }

    // ==========================================
    // 5. SKILLS TAB SWITCHING
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active class and set aria-selected="false", aria-expanded="false", and tabindex="-1"
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
                b.setAttribute('aria-expanded', 'false');
                b.setAttribute('tabindex', '-1');
            });
            // Add active and set aria-selected="true", aria-expanded="true", and tabindex="0"
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('tabindex', '0');
            
            // Hide all tab contents and set aria-hidden="true"
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.setAttribute('aria-hidden', 'true');
            });
            
            // Show target content and set aria-hidden="false"
            const targetTab = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(`${targetTab}-skills`);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.setAttribute('aria-hidden', 'false');
                
                // Restart progress bar animation
                const progressBars = targetContent.querySelectorAll('.skill-progress-bar');
                progressBars.forEach(bar => {
                    bar.style.transform = 'scaleX(0)';
                    // Trigger reflow
                    void bar.offsetWidth;
                    bar.style.transform = 'scaleX(1)';
                });
            }
        });

        // Add keyboard Arrow navigation (Left/Right) for standard horizontal tablist interaction
        // ArrowUp/ArrowDown are intentionally NOT consumed here so the browser can scroll the page normally
        btn.addEventListener('keydown', (e) => {
            let targetIndex = null;
            if (e.key === 'ArrowRight') {
                targetIndex = (index + 1) % tabBtns.length;
            } else if (e.key === 'ArrowLeft') {
                targetIndex = (index - 1 + tabBtns.length) % tabBtns.length;
            } else if (e.key === 'Home') {
                targetIndex = 0;
            } else if (e.key === 'End') {
                targetIndex = tabBtns.length - 1;
            }

            if (targetIndex !== null) {
                e.preventDefault();
                tabBtns[targetIndex].focus();
                tabBtns[targetIndex].click(); // Activate tab on focus
            }
        });
    });

    // ==========================================
    // 6. PROJECTS CATEGORY FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active button class and set aria-pressed
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }
            });
        });
    });

    // ==========================================
    // 7. SCROLL EFFECTS (NAVBAR, BACK-TO-TOP)
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Navbar Scrolled style
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Back to top action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 8. ACTIVE NAVIGATION LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section');
    
    const navObserverOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // ==========================================
    // 9. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = [
        ...document.querySelectorAll('.scroll-reveal'),
        ...document.querySelectorAll('.stat-card'),
        ...document.querySelectorAll('.skill-card'),
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.activity-card'),
        ...document.querySelectorAll('.achievement-item'),
        ...document.querySelectorAll('.achievement-highlight'),
        ...document.querySelectorAll('.contact-method-card'),
        ...document.querySelectorAll('.contact-form-container')
    ];

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 10. CONTACT FORM & TOAST NOTIFICATION
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const toastContainer = document.getElementById('toast-container');

    if (contactForm && toastContainer) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const submitBtnSpan = submitBtn.querySelector('span');

            // Disable submit button and show loading state
            const originalBtnHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            
            const loadingText = translations[currentLang]["submit-loading"];
            submitBtn.innerHTML = `${loadingText} <i data-lucide="loader" class="animate-spin"></i>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();

            // Simulate server request delay
            setTimeout(() => {
                // Show success toast in the selected language
                const successMsg = translations[currentLang]["toast-success"];
                showToast(successMsg);

                // Reset button & form
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                
                // Retranslate button text
                const submitText = translations[currentLang]["form-submit"];
                const submitTextSpan = submitBtn.querySelector('span');
                if (submitTextSpan) {
                    submitTextSpan.textContent = submitText;
                }
                
                if (typeof lucide !== 'undefined') lucide.createIcons();
                
                contactForm.reset();
            }, 1500);
        });

        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast toast-success';
            
            toast.innerHTML = `
                <i data-lucide="check-circle" class="toast-icon"></i>
                <span class="toast-message">${message}</span>
            `;
            
            toastContainer.appendChild(toast);
            if (typeof lucide !== 'undefined') lucide.createIcons();

            // Remove toast after 4 seconds
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease forwards';
                toast.addEventListener('animationend', () => {
                    toast.remove();
                });
            }, 4000);
        }
    }



    // ==========================================
    // ACHIEVEMENT CAROUSEL LOGIC
    // ==========================================
    const achievementSlides = document.querySelectorAll('.achievement-carousel .carousel-slide');
    const achievementDots = document.querySelectorAll('.achievement-carousel .indicator-dot');
    let currentAchievementSlide = 0;
    let achievementInterval;

    function showAchievementSlide(index) {
        if (achievementSlides.length === 0) return;
        
        achievementSlides.forEach(slide => slide.classList.remove('active'));
        achievementDots.forEach(dot => dot.classList.remove('active'));
        
        currentAchievementSlide = (index + achievementSlides.length) % achievementSlides.length;
        
        achievementSlides[currentAchievementSlide].classList.add('active');
        if (achievementDots[currentAchievementSlide]) {
            achievementDots[currentAchievementSlide].classList.add('active');
        }
    }

    function startAchievementCarousel() {
        if (achievementSlides.length <= 1) return;
        achievementInterval = setInterval(() => {
            showAchievementSlide(currentAchievementSlide + 1);
        }, 5000);
    }

    function stopAchievementCarousel() {
        if (achievementInterval) {
            clearInterval(achievementInterval);
        }
    }

    if (achievementDots.length > 0) {
        achievementDots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                stopAchievementCarousel();
                showAchievementSlide(idx);
                startAchievementCarousel();
            });
        });
        startAchievementCarousel();
    }

    // ==========================================
    // PROJECT DETAILS DATA & LOGIC (SPA)
    // ==========================================
    const projectsData = {
        'aegis-dashboard': {
            id: 'aegis-dashboard',
            titleKey: 'proj1-title',
            img: 'assets/project_dashboard.png',
            category: 'Web App',
            date: '05/2026',
            techs: ['React', 'Next.js', 'TailwindCSS', 'Socket.io', 'Chart.js'],
            demoLink: '#',
            githubLink: '#',
            overviewKey: 'proj1-detail-overview',
            featuresKeys: [
                'proj1-detail-f1',
                'proj1-detail-f2',
                'proj1-detail-f3',
                'proj1-detail-f4',
                'proj1-detail-f5'
            ]
        },
        'stark-os': {
            id: 'stark-os',
            titleKey: 'proj2-title',
            img: 'assets/project_os.png',
            category: 'UI/UX Design',
            date: '04/2026',
            techs: ['Figma', 'Three.js', 'Web Audio API', 'HTML5/CSS3'],
            demoLink: '#',
            githubLink: '#',
            overviewKey: 'proj2-detail-overview',
            featuresKeys: [
                'proj2-detail-f1',
                'proj2-detail-f2',
                'proj2-detail-f3',
                'proj2-detail-f4',
                'proj2-detail-f5'
            ]
        },
        'nexus-market': {
            id: 'nexus-market',
            titleKey: 'proj3-title',
            img: 'assets/project_ecommerce.png',
            category: 'Web App',
            date: '03/2026',
            techs: ['Node.js', 'PostgreSQL', 'Redux', 'Stripe', 'Glassmorphism'],
            demoLink: '#',
            githubLink: '#',
            overviewKey: 'proj3-detail-overview',
            featuresKeys: [
                'proj3-detail-f1',
                'proj3-detail-f2',
                'proj3-detail-f3',
                'proj3-detail-f4',
                'proj3-detail-f5'
            ]
        }
    };

    const detailOverlay = document.getElementById('project-details-view');
    const backBtn = document.getElementById('btn-details-back');

    function renderProjectDetails(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        const dynContainer = document.getElementById('details-content-dyn');
        if (!dynContainer) return;

        const featuresListHTML = project.featuresKeys.map(key => `
            <li>
                <i data-lucide="check-circle-2"></i>
                <span data-i18n="${key}"></span>
            </li>
        `).join('');

        const techTagsHTML = project.techs.map(tech => `
            <span>${tech}</span>
        `).join('');

        dynContainer.innerHTML = `
            <!-- Main Content (Left Column) -->
            <div class="details-main-content">
                <div class="details-main-visual">
                    <img src="${project.img}" alt="${project.id}" class="details-main-img">
                </div>
                
                <div class="details-section">
                    <h3 class="details-section-title" data-i18n="proj-section-overview">Tổng Quan Dự Án</h3>
                    <p class="details-overview-text" data-i18n="${project.overviewKey}"></p>
                </div>
                
                <div class="details-section">
                    <h3 class="details-section-title" data-i18n="proj-section-features">Tính Năng Nổi Bật</h3>
                    <ul class="details-features-list">
                        ${featuresListHTML}
                    </ul>
                </div>
            </div>
            
            <!-- Sidebar Details (Right Column) -->
            <div class="details-sidebar glass-card">
                <div class="sidebar-info-group">
                    <span class="sidebar-label" data-i18n="proj-meta-category">Danh mục</span>
                    <span class="sidebar-value">${project.category}</span>
                </div>
                
                <div class="sidebar-info-group">
                    <span class="sidebar-label" data-i18n="proj-meta-date">Thời gian</span>
                    <span class="sidebar-value">${project.date}</span>
                </div>
                
                <div class="sidebar-info-group">
                    <span class="sidebar-label" data-i18n="proj-meta-tech">Công nghệ</span>
                    <div class="sidebar-tech-tags">
                        ${techTagsHTML}
                    </div>
                </div>
                
                <div class="sidebar-info-group">
                    <span class="sidebar-label" data-i18n="proj-meta-links">Liên kết</span>
                    <div class="sidebar-links">
                        <a href="${project.demoLink}" class="sidebar-btn sidebar-btn-primary glow-btn">
                            <span data-i18n="proj-meta-demo">Trải nghiệm trực tiếp</span> <i data-lucide="external-link"></i>
                        </a>
                        <a href="${project.githubLink}" class="sidebar-btn sidebar-btn-outline">
                            <span data-i18n="proj-meta-github">Xem mã nguồn</span> <i data-lucide="github"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function openProjectDetails(projectId) {
        if (!detailOverlay) return;
        
        renderProjectDetails(projectId);
        
        // Translate dynamic elements
        setLanguage(currentLang);
        
        // Create icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Show overlay
        detailOverlay.setAttribute('aria-hidden', 'false');
        detailOverlay.classList.add('active');
        document.body.classList.add('project-detail-open');
        
        // Reset scroll position of overlay
        detailOverlay.scrollTop = 0;
    }

    function closeProjectDetails() {
        if (!detailOverlay) return;
        
        detailOverlay.setAttribute('aria-hidden', 'true');
        detailOverlay.classList.remove('active');
        document.body.classList.remove('project-detail-open');
    }

    // Event listener for opening detail
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.btn-detail-link');
        if (trigger) {
            const projectId = trigger.getAttribute('data-project-id');
            openProjectDetails(projectId);
        }
    });

    if (backBtn) {
        backBtn.addEventListener('click', closeProjectDetails);
    }

    // Escape key to close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailOverlay && detailOverlay.classList.contains('active')) {
            closeProjectDetails();
        }
    });
});

(function() {
    const canvas = document.getElementById('character-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const SEQUENCES = [
        { type: 'sprite', src: 'assets/spritesheet.png', cols: 14, frames: 181, width: 180, height: 320, fps: 30 },
        { type: 'video', src: 'assets/hero-sequence-2.mp4', backgroundTolerance: 58 },
        { type: 'sprite', src: 'assets/hero-sequence-3-cutout-v3.png', cols: 12, frames: 140, width: 294, height: 320, fps: 24 }
    ];

    const assets = SEQUENCES.map((sequence, index) => {
        if (sequence.type === 'video') {
            const video = document.createElement('video');
            video.src = sequence.src;
            video.muted = true;
            video.playsInline = true;
            video.preload = 'auto';
            video.addEventListener('ended', () => {
                if (seqIndex === index) nextSequence();
            });
            return video;
        }

        const image = new Image();
        image.src = sequence.src;
        return image;
    });

    let seqIndex = 0;
    let currentFrame = 0;
    let lastTime = 0;
    let started = false;

    function drawSource(source, sourceWidth, sourceHeight, fit = 'contain', alignY = 'center') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = fit === 'cover'
            ? Math.max(canvas.width / sourceWidth, canvas.height / sourceHeight)
            : Math.min(canvas.width / sourceWidth, canvas.height / sourceHeight);
        const dw = sourceWidth * scale;
        const dh = sourceHeight * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = alignY === 'bottom' ? canvas.height - dh : (canvas.height - dh) / 2;
        ctx.drawImage(source, dx, dy, dw, dh);
    }

    function drawSprite(sequence, image) {
        if (!image.complete) return;
        const col = currentFrame % sequence.cols;
        const row = Math.floor(currentFrame / sequence.cols);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = Math.min(canvas.width / sequence.width, canvas.height / sequence.height);
        const dw = sequence.width * scale;
        const dh = sequence.height * scale;
        const dx = (canvas.width - dw) / 2;
        const dy = (canvas.height - dh) / 2;
        ctx.drawImage(image, col * sequence.width, row * sequence.height, sequence.width, sequence.height, dx, dy, dw, dh);
    }

    function getFrameBackground(pixels, width, height) {
        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;
                if (pixels[index + 3] === 0) continue;
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }
        if (minX > maxX || minY > maxY) {
            return { r: 255, g: 255, b: 255 };
        }
        const points = [
            [minX, minY],
            [maxX, minY],
            [Math.round((minX + maxX) / 2), minY],
            [minX, Math.round(minY + (maxY - minY) * 0.12)],
            [maxX, Math.round(minY + (maxY - minY) * 0.12)],
            [Math.round((minX + maxX) / 2), Math.round(minY + (maxY - minY) * 0.12)]
        ];
        const samples = points.map(([x, y]) => (y * width + x) * 4);
        const color = samples.reduce((acc, index) => {
            acc.r += pixels[index];
            acc.g += pixels[index + 1];
            acc.b += pixels[index + 2];
            return acc;
        }, { r: 0, g: 0, b: 0 });
        return {
            r: color.r / samples.length,
            g: color.g / samples.length,
            b: color.b / samples.length
        };
    }

    function isBackgroundPixel(pixels, index, background, tolerance) {
        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const spread = max - min;
        const brightness = (r + g + b) / 3;
        const distance = Math.hypot(r - background.r, g - background.g, b - background.b);
        return distance < tolerance || (brightness > 174 && spread < 76) || (r > 206 && g > 206 && b > 206 && spread < 82);
    }

    function removeConnectedBackground(pixels, width, height, background, tolerance) {
        const visited = new Uint8Array(width * height);
        const queue = [];
        function push(x, y) {
            if (x < 0 || x >= width || y < 0 || y >= height) return;
            const point = y * width + x;
            if (visited[point]) return;
            visited[point] = 1;
            const index = point * 4;
            if (!isBackgroundPixel(pixels, index, background, tolerance)) return;
            pixels[index + 3] = 0;
            queue.push(point);
        }
        for (let x = 0; x < width; x++) {
            push(x, 0);
            push(x, height - 1);
        }
        for (let y = 0; y < height; y++) {
            push(0, y);
            push(width - 1, y);
        }
        for (let i = 0; i < queue.length; i++) {
            const point = queue[i];
            const x = point % width;
            const y = Math.floor(point / width);
            push(x + 1, y);
            push(x - 1, y);
            push(x, y + 1);
            push(x, y - 1);
        }
    }

    function drawVideo(sequence, video) {
        if (video.readyState < 2 || !video.videoWidth || !video.videoHeight) return;
        drawSource(video, video.videoWidth, video.videoHeight, sequence.fit, sequence.alignY);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = frame.data;
        const background = getFrameBackground(pixels, canvas.width, canvas.height);
        const tolerance = sequence.backgroundTolerance || 58;
        if (sequence.edgeMask) {
            removeConnectedBackground(pixels, canvas.width, canvas.height, background, tolerance);
        } else {
            for (let i = 0; i < pixels.length; i += 4) {
                if (isBackgroundPixel(pixels, i, background, tolerance)) {
                    pixels[i + 3] = 0;
                }
            }
        }
        ctx.putImageData(frame, 0, 0);
    }

    function pauseVideo(index) {
        const sequence = SEQUENCES[index];
        if (!sequence || sequence.type !== 'video') return;
        assets[index].pause();
    }

    function playVideo(video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }

    function enterSequence(index) {
        pauseVideo(seqIndex);
        seqIndex = index;
        currentFrame = 0;
        lastTime = 0;
        const sequence = SEQUENCES[seqIndex];
        if (sequence.type === 'video') {
            playVideo(assets[seqIndex]);
        }
    }

    function nextSequence() {
        enterSequence((seqIndex + 1) % SEQUENCES.length);
    }

    function tick(timestamp) {
        requestAnimationFrame(tick);
        const sequence = SEQUENCES[seqIndex];
        const asset = assets[seqIndex];

        if (sequence.type === 'video') {
            drawVideo(sequence, asset);
            return;
        }

        if (!lastTime) lastTime = timestamp;
        const frameDuration = 1000 / sequence.fps;
        const framesToAdvance = Math.floor((timestamp - lastTime) / frameDuration);
        if (framesToAdvance < 1) return;
        lastTime += framesToAdvance * frameDuration;
        currentFrame += framesToAdvance;
        if (currentFrame >= sequence.frames) {
            nextSequence();
            return;
        }
        drawSprite(sequence, asset);
    }

    function start() {
        if (started) return;
        started = true;
        enterSequence(0);
        requestAnimationFrame(tick);
    }

    if (assets[0].complete) {
        start();
    } else {
        assets[0].onload = start;
    }
})();

// ==========================================
// FLOATING SOCIAL CONTACT WIDGET - TOGGLE
// ==========================================
(function () {
    const widget = document.getElementById('social-float-widget');
    const toggleBtn = document.getElementById('social-float-toggle');
    if (!widget || !toggleBtn) return;

    function openWidget() {
        widget.classList.add('is-open');
        toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeWidget() {
        widget.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        widget.classList.contains('is-open') ? closeWidget() : openWidget();
    });

    // Close when clicking outside the widget
    document.addEventListener('click', (e) => {
        if (!widget.contains(e.target)) closeWidget();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeWidget();
    });
})();

(function() {
    const files = ['/', '/script.js', '/style.css'];
    let etags = {};

    async function getTag(url) {
        try {
            const res = await fetch(url + '?t=' + Date.now(), {
                method: 'HEAD',
                headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
            });
            return res.headers.get('etag') || res.headers.get('last-modified');
        } catch (e) {
            return null;
        }
    }

    async function init() {
        for (const file of files) {
            etags[file] = await getTag(file);
        }
    }

    async function check() {
        for (const file of files) {
            const current = await getTag(file);
            if (current && etags[file] && current !== etags[file]) {
                window.location.reload();
                return;
            }
            if (current && !etags[file]) {
                etags[file] = current;
            }
        }
    }

    init().then(() => {
        setInterval(check, 15000);
    });
})();
