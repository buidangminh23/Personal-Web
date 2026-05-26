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
            "nav-cv": "CV",
            "hero-subtitle": "XIN CHÀO, TÔI LÀ",
            "hero-name": "Bùi Đăng Minh",
            "hero-iam": "Tôi là",
            "hero-description": "Một sinh viên Khoa học dữ liệu tại Swinburne University đam mê kiến tạo những sản phẩm công nghệ hiện đại, tối ưu hiệu năng và mang tính thẩm mỹ cao. Tôi tập trung vào việc phát triển ứng dụng web và thiết kế giao diện sáng tạo.",
            "hero-description-2": "Tôi học tập và nghiên cứu các công nghệ mới, hướng tới phát triển các ứng dụng web chất lượng cao. Sẵn sàng đồng hành cùng các dự án đột phá.",
            "hero-view-projects": "Xem Dự Án",
            "hero-contact-me": "Liên Hệ",
            "hero-view-cv": "Xem CV",
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
            "about-github-label": "GitHub:",
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
            "nav-github": "GitHub",
            "github-subtitle": "MÃ NGUỒN HOẠT ĐỘNG",
            "github-title": "Hồ Sơ GitHub",
            "github-bio-text": "Đang học tập và phát triển các sản phẩm công nghệ sáng tạo, tối ưu hóa trải nghiệm người dùng.",
            "github-stat-repos": "Kho lưu trữ",
            "github-stat-followers": "Người theo dõi",
            "github-stat-following": "Đang theo dõi",
            "github-visit-btn": "Ghé thăm GitHub",
            "github-repos-title": "Kho Lưu Trữ Đang Hoạt Động",
            "github-repos-desc": "Các dự án và học tập được cập nhật gần đây nhất",
            "projects-subtitle": "SẢN PHẨM",
            "projects-title": "Dự Án Nổi Bật",
            "projects-filter-all": "Tất cả",
            "projects-filter-system": "Hệ thống",
            "proj1-title": "Personal Web Portfolio",
            "proj1-desc": "Portfolio cá nhân hiện đại với dark/light mode, đa ngôn ngữ VI/EN, hiệu ứng glassmorphism và nhân vật 2D tương tác.",
            "proj2-title": "GEMERA — Telegram Bot & AI Dashboard",
            "proj2-desc": "Bot Telegram tự động scan, lọc và đăng bài lên kênh với AI Vision chống trùng, dashboard real-time và phân tích kênh chuyên sâu.",
            "proj3-title": "Minh Stark Agent OS",
            "proj3-desc": "Hệ thống AI agent cá nhân chạy local: AutoPilot tự chọn agent, quản lý task/deadline, lịch học, automation và tích hợp Gemini API.",
            "experience-subtitle": "LỘ TRÌNH",
            "experience-title": "Lộ Trình Phát Triển Dự Án",
            "exp1-date": "05/2026",
            "exp1-title": "Personal Web Portfolio",
            "exp1-company": "Front-End / Interactive Canvas / Multilingual",
            "exp1-desc": "Hoàn thiện website giới thiệu năng lực bản thân tích hợp chế độ sáng/tối, đa ngôn ngữ, hiệu ứng kính mờ và nhân vật tương tác thông qua HTML Canvas.",
            "exp2-date": "05/2026",
            "exp2-title": "汉语学堂 — Học Tiếng Trung",
            "exp2-company": "Web App / PWA / Offline Caching",
            "exp2-desc": "Xây dựng ứng dụng PWA học tiếng Trung offline, hỗ trợ ghi nhớ từ vựng HSK 1-6 theo phương pháp lặp lại ngắt quãng (SRS) và tập viết chữ Hán.",
            "exp3-date": "04/2026",
            "exp3-title": "Study Web — Swinburne Learning Space",
            "exp3-company": "Full-Stack / Swinburne Learning Space",
            "exp3-desc": "Xây dựng không gian tự học và quản lý môn học của Swinburne, tích hợp hệ thống lộ trình học tập, tài liệu học và giao diện trực quan hỗ trợ sinh viên.",
            "exp4-date": "03/2026",
            "exp4-title": "Minh Stark Agent OS",
            "exp4-company": "AI System / Flask / Local Agent Automation",
            "exp4-desc": "Thiết kế hệ điều hành AI agent chạy local với tính năng AutoPilot tự phân tích, lập lịch học, theo dõi deadline và tự động thực thi các task thông minh.",
            "exp5-date": "01/2026",
            "exp5-title": "GEMERA Bot & AI Dashboard",
            "exp5-company": "System / Telegram Integration / Channel Analytics",
            "exp5-desc": "Phát triển bot Telegram quét và đăng tin tự động tích hợp AI Vision để loại bỏ trùng lặp, đi kèm dashboard phân tích số liệu kênh theo thời gian thực.",
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
            "proj-meta-tech": "Ngôn ngữ sử dụng",
            "proj-meta-links": "Liên kết",
            "proj-meta-demo": "Trải nghiệm trực tiếp",
            "proj-meta-github": "Xem mã nguồn",
            "proj-section-overview": "Tổng Quan Dự Án",
            "proj-section-features": "Tính Năng Nổi Bật",
            "proj1-detail-overview": "Personal Web Portfolio là một website cá nhân được thiết kế độc bản và phát triển hoàn chỉnh từ con số 0 bằng HTML5, CSS3 và JavaScript thuần (không dùng bất kỳ thư viện hay framework ngoài nào). Dự án tập trung tối ưu hóa hiệu năng, giao diện responsive tuyệt đối và trải nghiệm người dùng cao cấp. Toàn bộ cơ chế đổi giao diện (Dark/Light mode), bộ dịch đa ngôn ngữ i18n, hiệu ứng chuyển động scroll-reveal và nhân vật 2D tương tác đều được xây dựng thủ công. Trang web cũng tích hợp hệ thống phát hiện thay đổi và reload live tự động phục vụ trong môi trường phát triển.",
            "proj1-detail-f1": "Giao diện Glassmorphism hiện đại ứng dụng các kỹ thuật CSS nâng cao như backdrop-filter, gradient chuyển màu mượt mà, và cơ chế scroll-reveal tự nhiên trên mọi thiết bị di động, máy tính bảng và máy tính để bàn.",
            "proj1-detail-f2": "Hệ thống Dark/Light mode linh hoạt dùng CSS custom variables, tự động lưu và đồng bộ tùy chọn của người dùng qua localStorage cùng hiệu ứng chuyển đổi mượt mà 0.3s không gây nhấp nháy giao diện.",
            "proj1-detail-f3": "Bộ dịch đa ngôn ngữ (i18n) tự phát triển hỗ trợ chuyển đổi tức thì giữa Tiếng Việt và Tiếng Anh mà không cần tải lại trang, hoạt động thông qua việc quét và ánh xạ động các thuộc tính data-i18n.",
            "proj1-detail-f4": "Nhân vật Lego 2D độc đáo hiển thị bằng HTML5 Canvas API và requestAnimationFrame, hỗ trợ tương tác trực quan với 3 bộ spritesheet chuyển động (chào hỏi, đứng chờ, nháy mắt) chất lượng cao.",
            "proj1-detail-f5": "Tích hợp công cụ phát triển chuyên dụng bao gồm script tự động chạy ngầm theo dõi thay đổi mã nguồn để reload trang ngay lập tức, và file batch triển khai nhanh lên Vercel production chỉ trong 30 giây.",
            "proj2-detail-overview": "GEMERA (phiên bản 5.0) là một hệ thống Telegram Bot tự động hóa quy trình quản trị nội dung với quy mô lớn, viết hoàn toàn bằng Python và vận hành bền bỉ 24/7. Hệ thống tự động thu thập bài viết từ nhiều kênh nguồn, sau đó áp dụng trí tuệ nhân tạo (Gemini Vision AI) kết hợp thuật toán mã hóa ảnh (perceptual hashing) để lọc bỏ triệt để các bài viết trùng lặp hoặc tương đồng về nội dung. Dashboard quản trị được lập trình nhúng trực tiếp ngay bên trong tiến trình của bot mà không cần chạy server độc lập, cung cấp các biểu đồ phân tích trực quan về hiệu suất kênh theo thời gian thực.",
            "proj2-detail-f1": "Tự động quét và thu thập dữ liệu đa kênh nguồn theo chu kỳ cấu hình động, tích hợp bộ đệm hàng đợi duyệt bài thủ công, chế độ tự động đăng bài và thuật toán kiểm soát tần suất đăng thông minh tránh spam.",
            "proj2-detail-f2": "Công nghệ chống trùng bài đăng 2 lớp cực kỳ mạnh mẽ: phân tích mã băm hình ảnh (imagehash) kết hợp so khớp vector đặc trưng (AI embedding) qua Gemini Vision, ngăn chặn bài trùng kể cả khi ảnh bị cắt cúp hoặc chỉnh màu.",
            "proj2-detail-f3": "Bảng điều khiển Web Dashboard trực quan tích hợp sẵn: thống kê phân bố giờ đăng tối ưu (heatmap), top 10 bài viết thịnh hành, biểu đồ tương tác cảm xúc, phân tích xu hướng game PUBG và báo cáo hoạt động của đối thủ.",
            "proj2-detail-f4": "Hệ thống tự động biên soạn báo cáo tóm tắt nổi bật hàng tuần (Weekly Summary) ứng dụng mô hình ngôn ngữ lớn Gemini/Claude API, trang bị cơ chế lưu dữ liệu đệm (caching) và tự động chuyển đổi mô hình dự phòng khi lỗi.",
            "proj2-detail-f5": "Kiến trúc hệ thống toàn diện: quản trị cơ sở dữ liệu SQLite cục bộ, tính năng sao lưu/khôi phục tự động qua file ZIP, hệ thống kiểm tra sức khỏe tự phục hồi, hỗ trợ PWA và thư viện orjson tối ưu hóa tốc độ xử lý dữ liệu JSON.",
            "proj3-detail-overview": "Minh Stark Agent OS là hệ thống điều phối AI Agent cá nhân chạy hoàn toàn cục bộ trên máy trạm (tại cổng 2006) bằng ngôn ngữ Python và Flask. Điểm cốt lõi của hệ thống là AutoPilot Manager — một bộ não trung tâm nhận yêu cầu trực tiếp bằng ngôn ngữ tự nhiên (tiếng Việt), tự phân tích mục đích người dùng để định tuyến chính xác đến các AI Agent chuyên biệt. Hệ thống tích hợp sâu với Gemini API cho các hội thoại thông minh và hỗ trợ Langflow để thực thi các quy trình tự động hóa phức tạp, đồng thời tích hợp cơ chế cơ sở dữ liệu vector cục bộ để làm bộ nhớ dài hạn.",
            "proj3-detail-f1": "Bộ điều phối AutoPilot Manager phân tích ý định từ ngôn ngữ tự nhiên tiếng Việt, tự động kích hoạt Agent phù hợp (Trò chuyện, Công việc, Học tập, Tự động hóa, Khoa học dữ liệu) và cấu hình mô hình tối ưu.",
            "proj3-detail-f2": "Agent Quản lý công việc (Work Agent) hỗ trợ lập lịch trình, thiết lập mức độ ưu tiên, cập nhật tiến độ dự án và ghi nhận lịch sử công việc thông qua đối thoại trực tiếp bằng ngôn ngữ tự nhiên.",
            "proj3-detail-f3": "Agent Hỗ trợ học tập (Study Agent) hỗ trợ phân bổ thời gian học thông minh theo phiên Pomodoro, đo lường tiến độ tiếp thu kiến thức của từng môn học và tự động đưa ra các khuyến nghị tối ưu hóa lịch học.",
            "proj3-detail-f4": "Agent Tự động hóa (Automation Agent) quản lý và kích hoạt các kịch bản tự động hóa hệ thống (như gửi email, dọn dẹp file, cào dữ liệu), ghi chép chi tiết nhật ký thực thi để dễ dàng theo dõi lỗi.",
            "proj3-detail-f5": "Tích hợp sâu Langflow (local engine), Gemini 2.0 Flash API, cơ chế tự động nạp hồ sơ cá nhân làm ngữ cảnh nền, cung cấp bộ công cụ Khoa học dữ liệu (Data Science Agent) xử lý file CSV và vẽ biểu đồ trực quan.",
            "proj4-title": "Study Web — Swinburne Learning Space",
            "proj4-desc": "Hệ thống quản lý học tập, lưu trữ tài liệu môn học Swinburne (IT, Business, Media) tích hợp lộ trình trực quan và đa ngôn ngữ.",
            "proj5-title": "汉语学堂 — Học Tiếng Trung",
            "proj5-desc": "Ứng dụng PWA học tiếng Trung từ vựng HSK 1–6, luyện nghe, luyện viết, bộ thủ, SRS ôn tập và mini game — hoạt động offline hoàn toàn.",
            "proj5-detail-overview": "汉语学堂 (Hán Ngữ Học Đường) là ứng dụng Progressive Web App (PWA) học tiếng Trung Quốc toàn diện, được xây dựng hoàn toàn bằng HTML5, CSS3 và JavaScript thuần — không sử dụng bất kỳ framework hay thư viện ngoài nào. Ứng dụng bao phủ toàn bộ kho từ vựng HSK 1–6 với hơn 5,000 từ, tích hợp hệ thống SRS (Spaced Repetition System) thông minh giúp tối ưu việc ôn tập theo khoa học ghi nhớ. Đặc biệt, ứng dụng hoạt động hoàn toàn offline nhờ Service Worker, cho phép học mọi lúc mọi nơi không cần kết nối internet.",
            "proj5-detail-f1": "Kho từ vựng HSK 1–6 đầy đủ với hơn 5,000 từ, mỗi từ kèm phiên âm Pinyin chuẩn, nghĩa tiếng Việt, ví dụ câu và phân loại từ loại (danh từ, động từ, tính từ...) theo chuẩn chương trình HSK quốc tế.",
            "proj5-detail-f2": "Hệ thống SRS (Spaced Repetition System) tự động tính toán thời điểm ôn tập tối ưu cho từng từ dựa trên lịch sử trả lời đúng/sai, giúp ghi nhớ lâu dài và tiết kiệm thời gian học tập.",
            "proj5-detail-f3": "Module luyện nghe tích hợp Web Speech API phát âm chuẩn giọng Trung Quốc phổ thông, luyện viết nhận diện nét bút chì kỹ thuật số trên Canvas, và bảng 214 bộ thủ Hán tự có minh họa chi tiết.",
            "proj5-detail-f4": "Phần Ngữ pháp & Lưu ý tổng hợp các cấu trúc câu, điểm ngữ pháp đặc biệt và những lỗi phổ biến người Việt hay mắc khi học tiếng Trung, kèm ví dụ minh họa thực tế và đối chiếu Hán-Việt.",
            "proj5-detail-f5": "PWA hoàn chỉnh với Service Worker cache toàn bộ tài nguyên cho phép sử dụng offline 100%, có thể cài đặt như app native trên điện thoại/máy tính, giao diện Dark/Light mode và thống kê tiến độ học tập trực quan.",
            "proj4-detail-overview": "Study Web là một nền tảng quản lý tài liệu học tập và theo dõi lộ trình môn học chuyên biệt được thiết kế cho sinh viên Swinburne University. Website được xây dựng với cấu trúc hiện đại, tập trung vào giao diện tối giản nhưng cực kỳ tối ưu cho việc truy cập bài giảng, tài liệu PDF và theo dõi tiến trình học tập cá nhân. Dự án hỗ trợ cơ chế xác thực người dùng đầy đủ, phân loại tài liệu thông minh theo các khối ngành học IT, Business, Media, và cung cấp tính năng đa ngôn ngữ tức thì để phù hợp với môi trường học tập quốc tế.",
            "proj4-detail-f1": "Hệ thống phân loại tài liệu và bài giảng khoa học theo các khối ngành đào tạo chính của Swinburne: Công nghệ thông tin (IT), Kinh tế (Business) và Truyền thông (Media).",
            "proj4-detail-f2": "Lộ trình môn học (Learning Path) trực quan, cho phép sinh viên click xem chi tiết lộ trình học tập, tài liệu tham khảo và slide bài giảng của từng tuần cụ thể.",
            "proj4-detail-f3": "Chức năng chuyển đổi ngôn ngữ (English/Vietnamese) tức thời trên toàn hệ thống giúp người dùng dễ dàng chuyển đổi môi trường học tập tùy theo nhu cầu.",
            "proj4-detail-f4": "Hệ thống tài khoản người dùng tích hợp các luồng đăng ký, đăng nhập và bảo mật thông tin, sẵn sàng hỗ trợ cá nhân hóa lộ trình học cho từng sinh viên.",
            "proj4-detail-f5": "Giao diện responsive mượt mà tối ưu hiển thị trên di động, cấu trúc HTML5 chuẩn SEO, cùng tốc độ tải trang ấn tượng nhờ triển khai trực tiếp trên nền tảng Vercel.",
            "cv-title": "Hồ Sơ Năng Lực (CV)",
            "cv-contact-title": "Liên Hệ",
            "cv-education-title": "Học Vấn",
            "cv-skills-title": "Kỹ Năng Chính",
            "cv-summary-title": "Mục Tiêu Nghề Nghiệp",
            "cv-summary-desc": "Đam mê thiết lập các mô hình Khoa học Dữ liệu, kết hợp thế mạnh phát triển Web App và tích hợp AI để tối ưu hóa giải pháp số, nâng cao trải nghiệm người dùng.",
            "cv-projects-title": "Dự Án Tiêu Biểu",
            "cv-certs-title": "Chứng Chỉ & Thành Tích"
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
            "nav-cv": "CV",
            "hero-subtitle": "HI, I AM",
            "hero-name": "Bui Dang Minh",
            "hero-iam": "I am a",
            "hero-description": "A Data Science student at Swinburne University passionate about building modern, high-performance, and creative web applications. I focus on web development and innovative UI/UX design.",
            "hero-description-2": "I study and research new technologies, aiming to develop high-quality web applications. Ready to partner on breakthrough projects.",
            "hero-view-projects": "View Projects",
            "hero-contact-me": "Contact Me",
            "hero-view-cv": "View CV",
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
            "about-github-label": "GitHub:",
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
            "nav-github": "GitHub",
            "github-subtitle": "SOURCE CODE ACTIVITY",
            "github-title": "GitHub Profile",
            "github-bio-text": "Learning and developing innovative tech products, optimizing user experience.",
            "github-stat-repos": "Repositories",
            "github-stat-followers": "Followers",
            "github-stat-following": "Following",
            "github-visit-btn": "Visit GitHub",
            "github-repos-title": "Active Repositories",
            "github-repos-desc": "Most recently updated projects and learning materials",
            "projects-subtitle": "PORTFOLIO",
            "projects-title": "Featured Projects",
            "projects-filter-all": "All",
            "projects-filter-system": "System",
            "proj1-title": "Personal Web Portfolio",
            "proj1-desc": "Modern personal portfolio with dark/light mode, VI/EN multilingual, glassmorphism effects and an interactive 2D character.",
            "proj2-title": "GEMERA — Telegram Bot & AI Dashboard",
            "proj2-desc": "Telegram bot that auto-scans, filters and posts content with AI Vision deduplication, real-time dashboard and deep channel analytics.",
            "proj3-title": "Minh Stark Agent OS",
            "proj3-desc": "Personal AI agent system running locally: AutoPilot selects agents, manages tasks/deadlines, study schedules, automation and Gemini API integration.",
            "experience-subtitle": "ROADMAP",
            "experience-title": "Project Development Roadmap",
            "exp1-date": "05/2026",
            "exp1-title": "Personal Web Portfolio",
            "exp1-company": "Front-End / Interactive Canvas / Multilingual",
            "exp1-desc": "Completed a personal portfolio website featuring dark/light mode, multilingual support, glassmorphism effects, and an interactive Canvas-based 2D character.",
            "exp2-date": "05/2026",
            "exp2-title": "汉语学堂 — Learn Chinese",
            "exp2-company": "Web App / PWA / Offline Caching",
            "exp2-desc": "Built an offline-capable PWA for learning Mandarin Chinese, featuring HSK 1-6 vocabulary drills using Spaced Repetition System (SRS) and Canvas stroke writing.",
            "exp3-date": "04/2026",
            "exp3-title": "Study Web — Swinburne Learning Space",
            "exp3-company": "Full-Stack / Swinburne Learning Space",
            "exp3-desc": "Developed an online self-study space for Swinburne students, incorporating learning roadmaps, course resources, and an intuitive UI to manage study progress.",
            "exp4-date": "03/2026",
            "exp4-title": "Minh Stark Agent OS",
            "exp4-company": "AI System / Flask / Local Agent Automation",
            "exp4-desc": "Designed a local AI agent operating system equipped with AutoPilot to analyze tasks, schedule classes, track deadlines, and execute automated actions.",
            "exp5-date": "01/2026",
            "exp5-title": "GEMERA Bot & AI Dashboard",
            "exp5-company": "System / Telegram Integration / Channel Analytics",
            "exp5-desc": "Built an automated Telegram channel bot with AI Vision deduplication and a real-time dashboard displaying key growth and content metrics.",
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
            "proj-meta-tech": "Languages Used",
            "proj-meta-links": "Links",
            "proj-meta-demo": "Live Preview",
            "proj-meta-github": "View Source Code",
            "proj-section-overview": "Project Overview",
            "proj-section-features": "Key Features",
            "proj1-detail-overview": "Personal Web Portfolio is a unique personal website designed and built from scratch using vanilla HTML5, CSS3, and JavaScript, entirely free of external frameworks or libraries. The project focuses on high performance, absolute responsiveness, and a premium user experience. Every feature—including the dark/light mode system, custom i18n localization engine, scroll-reveal layout, and interactive 2D character—is custom-developed. It also integrates an automated change-detection and hot-reload mechanism to accelerate local development.",
            "proj1-detail-f1": "Modern Glassmorphism UI utilizing advanced CSS techniques like backdrop-filter, smooth linear gradients, and responsive scroll-reveal animations across mobile, tablet, and desktop viewports.",
            "proj1-detail-f2": "Flicker-free Dark/Light mode using CSS custom properties, persistent user preferences saved via localStorage, and a smooth 0.3s transition animation.",
            "proj1-detail-f3": "In-house i18n localization engine supporting instantaneous Vietnamese/English toggling without page reloads, driven by scanning and dynamically mapping data-i18n attributes.",
            "proj1-detail-f4": "Unique interactive 2D Lego character rendered via HTML5 Canvas API and requestAnimationFrame, utilizing 3 distinct spritesheet animation sets (greeting, idle, blinking).",
            "proj1-detail-f5": "Dedicated developer utility integration featuring a background file watcher for instant page reload and a custom batch script for 30-second production deployment to Vercel.",
            "proj2-detail-overview": "GEMERA (v5.0) is a large-scale, automated content curation Telegram Bot system written entirely in Python and running in production 24/7. It automatically gathers media posts from multiple source channels and runs them through a two-layer deduplication engine using Gemini Vision AI and image perceptual hashing. A responsive web-based administration dashboard is embedded directly within the bot's runtime, providing real-time channel statistics and data visualizations without requiring a separate web server.",
            "proj2-detail-f1": "Automated multi-channel scraping with dynamic intervals, featuring a manual review queue, auto-post mode, and rate-limiting algorithms to maintain clean posting frequencies.",
            "proj2-detail-f2": "Advanced two-layer media deduplication combining perceptual image hashing with high-dimensional vector embeddings via Gemini Vision, detecting duplicates even if cropped or color-edited.",
            "proj2-detail-f3": "Integrated real-time Web Dashboard showing optimal posting times (heatmap), top 10 trending posts, reaction distribution chart, PUBG gaming analytics, and competitor benchmarking.",
            "proj2-detail-f4": "Automated Weekly Summary generator driven by Gemini and Claude APIs, equipped with smart response caching and automatic fallback models to ensure service continuity.",
            "proj2-detail-f5": "Robust system architecture featuring local SQLite management, ZIP backup/restore tools, self-healing health checkers, PWA compatibility, and orjson for high-performance JSON processing.",
            "proj3-detail-overview": "Minh Stark Agent OS is a localized personal AI agent orchestration system running fully on localhost:2006, engineered using Python and Flask. Its core component is the AutoPilot Manager, which parses natural language requests in Vietnamese, deduces user intents, and routes them to specialized sub-agents. It integrates Gemini API for complex reasoning and Langflow for running visual automation workflows, alongside a local vector database for long-term user memory.",
            "proj3-detail-f1": "AutoPilot Manager orchestrator that parses natural Vietnamese text to automatically dispatch specialized agents (Chat, Work, Study, Automation, Data Science) and configure the best model.",
            "proj3-detail-f2": "Work Agent for task management, supporting schedule planning, priority setting, progress tracking, and history logging, completely managed through natural language conversations.",
            "proj3-detail-f3": "Study Agent providing intelligent study schedules using Pomodoro technique, tracking academic progress per subject, and suggesting personalized adjustments.",
            "proj3-detail-f4": "Automation Agent to configure and trigger custom background automation tasks (emailing, cleanups, scraping) with detailed run history logs for troubleshooting.",
            "proj3-detail-f5": "Deep integration with Langflow (local engine), Gemini 2.0 Flash API, contextual user profiles, and a Data Science Agent capable of processing CSV data and rendering visualizations.",
            "proj4-title": "Study Web — Swinburne Learning Space",
            "proj4-desc": "Swinburne study resource management system (IT, Business, Media) featuring interactive learning paths and bilingual support.",
            "proj4-detail-overview": "Study Web is a dedicated academic resource management and learning path tracking platform designed for Swinburne University students. The website is engineered with a modern architecture, focusing on a minimalist interface optimized for accessing lectures, PDF slide decks, and tracking individual study milestones. It features robust user authentication, intelligent course categorization across IT, Business, and Media blocks, and instantaneous bilingual switching to fit the international university environment.",
            "proj4-detail-f1": "Academic categorization organizing courses and study resources under core Swinburne departments: Information Technology (IT), Business, and Media.",
            "proj4-detail-f2": "Interactive Learning Paths allowing students to easily explore weekly milestones, recommended readings, and lecture slides.",
            "proj4-detail-f3": "Instantaneous bilingual translation system (English/Vietnamese) to smoothly toggle languages according to student preferences.",
            "proj4-detail-f4": "User authentication flows for secure sign-up, login, and personalized tracking of study progress per student.",
            "proj4-detail-f5": "Highly responsive interface optimized for mobile views, SEO-friendly HTML5 structure, and ultra-fast page speed hosted on Vercel.",
            "proj5-title": "汉语学堂 — Learn Chinese",
            "proj5-desc": "A fully offline-capable PWA for learning Mandarin Chinese — covering HSK 1–6 vocabulary, listening & writing practice, radicals, SRS review, and mini games.",
            "proj5-detail-overview": "汉语学堂 (Chinese Learning Hall) is a comprehensive Progressive Web App for learning Mandarin Chinese, built entirely with HTML5, CSS3, and vanilla JavaScript — no external frameworks or libraries. The app covers the full HSK 1–6 vocabulary list of 5,000+ words, integrates an intelligent SRS (Spaced Repetition System) to optimise long-term retention, and works 100% offline via Service Worker caching, so you can study anytime, anywhere without an internet connection.",
            "proj5-detail-f1": "Complete HSK 1–6 vocabulary database with 5,000+ words — each entry includes standard Pinyin romanisation, Vietnamese meaning, example sentences, and part-of-speech classification (noun, verb, adjective…) aligned with the international HSK curriculum.",
            "proj5-detail-f2": "Intelligent SRS (Spaced Repetition System) that automatically calculates optimal review intervals for each word based on your correct/incorrect answer history, enabling long-term retention while minimising study time.",
            "proj5-detail-f3": "Listening practice powered by the Web Speech API for authentic Mandarin pronunciation, digital handwriting recognition on Canvas for character writing drills, and a full reference table of 214 Chinese radicals with detailed illustrations.",
            "proj5-detail-f4": "Grammar & Notes section covering key sentence structures, special grammar points, and common mistakes Vietnamese learners make in Mandarin — with real-world examples and Sino-Vietnamese character comparisons.",
            "proj5-detail-f5": "Full PWA implementation with Service Worker caching all assets for 100% offline use, installable as a native app on mobile and desktop, Dark/Light mode toggle, and visual study-progress statistics.",
            "cv-title": "Curriculum Vitae (CV)",
            "cv-contact-title": "Contact",
            "cv-education-title": "Education",
            "cv-skills-title": "Core Skills",
            "cv-summary-title": "Career Objective",
            "cv-summary-desc": "Passionate about building Data Science models, combining strengths in Web App development and AI integration to optimize digital solutions and enhance user experience.",
            "cv-projects-title": "Key Projects",
            "cv-certs-title": "Certifications & Achievements"
        }
    };

    const repoDescriptions = {
        vi: {
            'Personal-Web': 'Trang web giới thiệu năng lực bản thân, dự án và CV tương tác.',
            'Chinese-Learning': 'Ứng dụng học tiếng Trung tương tác giúp cải thiện từ vựng và ngữ pháp.',
            'Study-Web': 'Nền tảng hỗ trợ học tập toàn diện cho sinh viên Swinburne University.',
            'Minh-Stark': 'Hệ thống AI agent cá nhân chạy local giúp quản lý lịch học, deadline và automation.',
            'Limit-Noti': 'Hệ thống gửi thông báo tự động và quản lý giới hạn hạn mức thời gian thực.'
        },
        en: {
            'Personal-Web': 'Interactive personal portfolio website showcasing skills, projects, and CV.',
            'Chinese-Learning': 'Interactive Chinese learning application to improve vocabulary and grammar.',
            'Study-Web': 'Comprehensive learning support platform for Swinburne University students.',
            'Minh-Stark': 'Local personal AI agent system to manage study schedules, deadlines, and automation.',
            'Limit-Noti': 'Automated notification system and real-time threshold limit management.'
        }
    };
    let cachedRepos = [];

    // ==========================================
    // 1. MOBILE HAMBURGER MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.getElementById('nav-indicator');

    function updateIndicator(targetLink) {
        if (!navIndicator) return;
        if (!targetLink) {
            navIndicator.style.opacity = '0';
            return;
        }
        const navMenuEl = document.getElementById('nav-menu');
        if (!navMenuEl) return;
        const navRect = navMenuEl.getBoundingClientRect();
        const targetRect = targetLink.getBoundingClientRect();
        const left = targetRect.left - navRect.left;
        const top = targetRect.top - navRect.top;
        const width = targetRect.width;
        const height = targetRect.height;
        navIndicator.style.transform = `translate3d(${left}px, ${top}px, 0)`;
        navIndicator.style.width = `${width}px`;
        navIndicator.style.height = `${height}px`;
        navIndicator.style.opacity = '1';
    }

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
                setTimeout(() => {
                    const activeLink = document.querySelector('.nav-link.active');
                    if (activeLink) updateIndicator(activeLink);
                }, 300);
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
    
    updateGitHubStatsImages();

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
            
            updateGitHubStatsImages();
            
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
        if (typeof cachedRepos !== 'undefined' && cachedRepos.length > 0) {
            renderGitHubRepos(cachedRepos);
        }
        setTimeout(() => {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) updateIndicator(activeLink);
        }, 50);
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const targetLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(targetLang);
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    function updateGitHubStatsImages() {
        const isLight = body.classList.contains('light-theme');
        const statsCard = document.getElementById('github-stats-card');
        const langsCard = document.getElementById('github-langs-card');
        
        if (!statsCard || !langsCard) return;
        
        const username = 'buidangminh23';
        if (isLight) {
            statsCard.src = `https://github-readme-stats-one-bice.vercel.app/api?username=${username}&show_icons=true&theme=default&bg_color=ffffff&title_color=1d4ed8&text_color=4b5563&icon_color=4338ca&border_color=00000010&hide_border=false`;
            langsCard.src = `https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&bg_color=ffffff&title_color=1d4ed8&text_color=4b5563&icon_color=4338ca&border_color=00000010&hide_border=false`;
        } else {
            statsCard.src = `https://github-readme-stats-one-bice.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=0e0c1b&title_color=00f0ff&text_color=9ca3af&icon_color=0066ff&border_color=ffffff10&hide_border=false`;
            langsCard.src = `https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=0e0c1b&title_color=00f0ff&text_color=9ca3af&icon_color=0066ff&border_color=ffffff10&hide_border=false`;
        }
    }

    function renderGitHubRepos(repos) {
        const reposGrid = document.getElementById('github-repos-grid');
        if (!reposGrid) return;
        
        reposGrid.innerHTML = '';
        
        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'repo-card glass-card';
            
            const langClass = (repo.language || 'other').toLowerCase();
            const langName = repo.language || 'Other';
            
            const description = (repoDescriptions[currentLang] && repoDescriptions[currentLang][repo.name]) 
                || repo.description 
                || (currentLang === 'vi' ? 'Dự án phát triển và tối ưu hóa tính năng ứng dụng.' : 'Application feature development and optimization project.');
            
            card.innerHTML = `
                <div class="repo-card-header">
                    <i data-lucide="folder" class="repo-icon"></i>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-title">${repo.name}</a>
                </div>
                <p class="repo-description">${description}</p>
                <div class="repo-footer">
                    <div class="repo-lang">
                        <span class="lang-dot ${langClass}"></span>
                        <span>${langName}</span>
                    </div>
                    <div class="repo-metrics">
                        <span><i data-lucide="star"></i> ${repo.stargazers_count}</span>
                        <span><i data-lucide="git-fork"></i> ${repo.forks_count}</span>
                    </div>
                </div>
            `;
            reposGrid.appendChild(card);
        });
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function fetchGitHubData() {
        const username = 'buidangminh23';
        
        fetch(`https://api.github.com/users/${username}`)
            .then(res => {
                if (!res.ok) throw new Error('API Rate Limit or Error');
                return res.json();
            })
            .then(data => {
                const avatarImg = document.getElementById('github-avatar');
                const nameEl = document.getElementById('github-name');
                const bioEl = document.getElementById('github-bio');
                const reposEl = document.getElementById('github-repos-count');
                const followersEl = document.getElementById('github-followers-count');
                const followingEl = document.getElementById('github-following-count');
                
                if (avatarImg && data.avatar_url) avatarImg.src = data.avatar_url;
                if (nameEl && data.name) nameEl.textContent = data.name;
                if (bioEl && data.bio) {
                    bioEl.textContent = data.bio;
                    bioEl.removeAttribute('data-i18n');
                }
                if (reposEl && data.public_repos !== undefined) reposEl.textContent = data.public_repos;
                if (followersEl && data.followers !== undefined) followersEl.textContent = data.followers;
                if (followingEl && data.following !== undefined) followingEl.textContent = data.following;
            })
            .catch(err => {
                const followersEl = document.getElementById('github-followers-count');
                const followingEl = document.getElementById('github-following-count');
                if (followersEl) followersEl.textContent = '0';
                if (followingEl) followingEl.textContent = '0';
            });
            
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
            .then(res => {
                if (!res.ok) throw new Error('API Rate Limit or Error');
                return res.json();
            })
            .then(repos => {
                cachedRepos = repos;
                renderGitHubRepos(repos);
            })
            .catch(err => {
                // keep fallback static html
            });
    }

    fetchGitHubData();

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
    // 8. ACTIVE NAVIGATION LINK ON SCROLL & LIQUID INDICATOR
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
                        if (navMenu && !navMenu.matches(':hover')) {
                            updateIndicator(link);
                        }
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    setTimeout(() => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) updateIndicator(activeLink);
    }, 200);

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            updateIndicator(link);
        });

        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            link.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'none';
        });
    });

    if (navMenu) {
        navMenu.addEventListener('mouseleave', () => {
            const activeLink = document.querySelector('.nav-link.active');
            updateIndicator(activeLink);
        });
    }

    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) updateIndicator(activeLink);
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
        'personal-web': {
            id: 'personal-web',
            titleKey: 'proj1-title',
            img: 'assets/project_personal_web_cropped.png',
            category: 'Web App',
            date: '05/2026',
            techs: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Vercel'],
            demoLink: 'https://personal-web-buidangminh23s-projects.vercel.app/',
            githubLink: 'https://github.com/buidangminh23',
            overviewKey: 'proj1-detail-overview',
            featuresKeys: [
                'proj1-detail-f1',
                'proj1-detail-f2',
                'proj1-detail-f3',
                'proj1-detail-f4',
                'proj1-detail-f5'
            ]
        },
        'gemera-bot': {
            id: 'gemera-bot',
            titleKey: 'proj2-title',
            img: 'assets/project_gemera.png',
            category: 'Hệ thống',
            date: '01/2026',
            techs: ['Python', 'Telethon', 'Gemini AI', 'Claude AI', 'SQLite', 'orjson'],
            demoLink: '#',
            githubLink: 'https://github.com/buidangminh23',
            overviewKey: 'proj2-detail-overview',
            featuresKeys: [
                'proj2-detail-f1',
                'proj2-detail-f2',
                'proj2-detail-f3',
                'proj2-detail-f4',
                'proj2-detail-f5'
            ]
        },
        'minhstark-os': {
            id: 'minhstark-os',
            titleKey: 'proj3-title',
            img: 'assets/project_minhstark_os.png',
            category: 'Hệ thống',
            date: '03/2026',
            techs: ['Python', 'Flask', 'Gemini API', 'Langflow', 'SQLite'],
            demoLink: '#',
            githubLink: 'https://github.com/buidangminh23',
            overviewKey: 'proj3-detail-overview',
            featuresKeys: [
                'proj3-detail-f1',
                'proj3-detail-f2',
                'proj3-detail-f3',
                'proj3-detail-f4',
                'proj3-detail-f5'
            ]
        },
        'study-web': {
            id: 'study-web',
            titleKey: 'proj4-title',
            img: 'assets/project_study_web.png',
            category: 'Web App',
            date: '04/2026',
            techs: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'SQLite'],
            demoLink: 'https://study-6gzfwwhf1-buidangminh23s-projects.vercel.app/',
            githubLink: 'https://github.com/buidangminh23',
            overviewKey: 'proj4-detail-overview',
            featuresKeys: [
                'proj4-detail-f1',
                'proj4-detail-f2',
                'proj4-detail-f3',
                'proj4-detail-f4',
                'proj4-detail-f5'
            ]
        },
        'chinese-learning': {
            id: 'chinese-learning',
            titleKey: 'proj5-title',
            img: 'assets/project_chinese_learning.png',
            category: 'Web App',
            date: '05/2026',
            techs: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'SRS', 'Vercel'],
            demoLink: 'https://chinese-learning-hazel.vercel.app',
            githubLink: 'https://github.com/buidangminh23/Chinese-Learning',
            overviewKey: 'proj5-detail-overview',
            featuresKeys: [
                'proj5-detail-f1',
                'proj5-detail-f2',
                'proj5-detail-f3',
                'proj5-detail-f4',
                'proj5-detail-f5'
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
                
                ${(project.demoLink && project.demoLink !== '#') || (project.githubLink && project.githubLink !== '#') ? `
                <div class="sidebar-info-group">
                    <span class="sidebar-label" data-i18n="proj-meta-links">Liên kết</span>
                    <div class="sidebar-links" style="display: flex; flex-direction: column; gap: 10px;">
                        ${project.demoLink && project.demoLink !== '#' ? `
                        <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="sidebar-btn sidebar-btn-primary glow-btn" style="width: 100%; justify-content: center;">
                            <span data-i18n="proj-meta-demo">Trải nghiệm trực tiếp</span> <i data-lucide="external-link"></i>
                        </a>
                        ` : ''}
                        ${project.githubLink && project.githubLink !== '#' ? `
                        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="sidebar-btn sidebar-btn-outline" style="width: 100%; justify-content: center;">
                            <span data-i18n="proj-meta-github">Xem mã nguồn</span> <i data-lucide="github"></i>
                        </a>
                        ` : ''}
                    </div>
                </div>
                ` : ''}
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

    const cvOverlay = document.getElementById('cv-view-overlay');
    const cvBackBtn = document.getElementById('btn-cv-back');

    function openCVOverlay() {
        if (!cvOverlay) return;
        
        setLanguage(currentLang);
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        cvOverlay.setAttribute('aria-hidden', 'false');
        cvOverlay.classList.add('active');
        document.body.classList.add('project-detail-open');
        cvOverlay.scrollTop = 0;
    }

    function closeCVOverlay() {
        if (!cvOverlay) return;
        
        cvOverlay.setAttribute('aria-hidden', 'true');
        cvOverlay.classList.remove('active');
        document.body.classList.remove('project-detail-open');
    }

    document.addEventListener('click', (e) => {
        const isCvTrigger = e.target.closest('#nav-link-cv') || e.target.closest('#hero-btn-cv');
        if (isCvTrigger) {
            e.preventDefault();
            openCVOverlay();
        }
    });

    if (cvBackBtn) {
        cvBackBtn.addEventListener('click', closeCVOverlay);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (detailOverlay && detailOverlay.classList.contains('active')) {
                closeProjectDetails();
            }
            if (cvOverlay && cvOverlay.classList.contains('active')) {
                closeCVOverlay();
            }
        }
    });
});

(function() {
    const canvas = document.getElementById('character-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const SEQUENCES = [
        { type: 'sprite', src: 'assets/spritesheet.png', cols: 14, frames: 181, width: 180, height: 320, fps: 30 },
        { type: 'video', src: 'assets/hero-sequence-2.mp4', backgroundTolerance: 58 }
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
    const localHosts = new Set(['localhost', '127.0.0.1', '::1']);

    if (!localHosts.has(window.location.hostname)) {
        return;
    }

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
