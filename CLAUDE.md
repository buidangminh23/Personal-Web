# CLAUDE.md — Project Operating Rules

Áp dụng cho toàn bộ project `Personal Web`, tính từ thư mục root này trở xuống.

## Quy tắc giao tiếp

- Giao tiếp 100% bằng tiếng Việt thuần, ngắn gọn, đi thẳng vào việc.
- Không chào hỏi, không khen ngợi, không xin lỗi, không rào trước đón sau.
- Nếu user bắt đầu bằng cụm từ `làm bài tập`, dùng tiếng Anh theo yêu cầu bài.
- Đáp án trước, giải thích sau.
- Phần quan trọng cần được in đậm.

## Quy tắc code

- Mọi mã nguồn sinh ra phải 100% bằng tiếng Anh.
- Không thêm comment mới trong code.
- Docstring chỉ dùng khi thật sự cần cho public API.
- Khi sửa lỗi hoặc thêm tính năng, chỉ in đúng hàm, class hoặc block code có thay đổi.
- Không in lại toàn bộ file, không in lại cấu trúc file nếu không được yêu cầu.
- Code phải production-grade, maintainable, reproducible, stable.
- Không hardcode tạm, không vá triệu chứng, không tạo technical debt mới.

## Quy trình làm việc

- Với bug hoặc feature mới: hỏi rõ context nếu thiếu, phân tích root cause, lập plan ngắn, chờ user `Duyệt`, rồi mới code.
- Khi sửa bug phải nêu ngắn gọn: triệu chứng, root cause, fix, phòng ngừa.
- Trước khi code phải đọc file liên quan trong repo, không đoán API hoặc cấu trúc.
- Sau khi xuất code hoàn chỉnh phải đề xuất một cách test nhanh.
- Ưu tiên tự động hóa bằng script hoặc một lệnh gộp khi tác vụ có nhiều bước.

## Chuẩn kỹ thuật

- Python: ưu tiên Python mới nhất, type hints ở signature, `pathlib.Path`, async cho I/O, bắt exception cụ thể.
- JavaScript: ES2022+, `const` mặc định, `addEventListener`, cấm inline handler.
- CSS/HTML: mobile-first, semantic HTML, a11y cơ bản, không để text overlap.
- PowerShell: dùng PowerShell 7.6.2+ qua `pwsh.exe`, path có dấu cách phải quote.
- Git commit dùng Conventional Commits, tiếng Anh, tối đa 72 ký tự.

## Frontend và deploy

- Với thay đổi frontend, phải test giao diện thực tế trước khi kết luận xong.
- Production alias ổn định: `https://personal-web-buidangminh23s-projects.vercel.app/`.
- Không coi deployment URL dạng `personal-<hash>-buidangminh23s-projects.vercel.app` là URL ổn định vì Vercel tạo mới mỗi lần deploy.
- Sau mỗi thay đổi có ý nghĩa, push lên `origin/main`.
- Sau thay đổi frontend có ý nghĩa, deploy production bằng `npx vercel deploy --prod --yes --project personal-web`.

## Bảo mật và dữ liệu cá nhân

- Không commit `.env`, secret, token, key, session, database local, `node_modules`, cache build.
- Không đưa số điện thoại, email cá nhân, Student ID hoặc thông tin riêng tư vào file project trừ khi user yêu cầu rõ.
- Không leak secret trong log, commit message hoặc output.

## Self-check trước khi trả lời

- Đã dùng tiếng Việt thuần chưa?
- Code có 100% tiếng Anh và không comment mới chưa?
- Có chỉ in đúng block thay đổi khi cần code chưa?
- Có phân tích root cause nếu là bug chưa?
- Có cách test nhanh sau code chưa?
- Có tránh dữ liệu nhạy cảm trong repo chưa?
