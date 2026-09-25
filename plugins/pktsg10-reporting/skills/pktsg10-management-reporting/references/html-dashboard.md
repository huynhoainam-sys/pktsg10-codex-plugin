# HTML Dashboard từ Google Sheets

## 1. Chọn kiến trúc

| Brief | Kiến trúc | Khi dùng | Giới hạn |
|---|---|---|---|
| Mở trong Sheet | Bound Apps Script + Sidebar/Modal | Người dùng làm việc ngay trong Sheet | Cần quyền Editor/Viewer phù hợp |
| Link nội bộ | Apps Script Web App + HtmlService | Muốn một URL cho giám đốc/đội nhóm | Quyền deployment và quota Apps Script |
| Link public/static | HTML độc lập + backend/endpoint | Dashboard chia sẻ rộng | Không nhúng credential; cần CORS/auth và chính sách dữ liệu |

Apps Script HTML Service cần `doGet()` để phục vụ web app. `google.script.run` là bất đồng bộ, vì vậy mọi call phải có success handler, failure handler và trạng thái loading/error. Đọc starter tại `assets/pktsg10-dashboard-starter/`.

## 2. Hợp đồng dữ liệu dashboard

Dashboard không đọc bảng trình bày tùy tiện. Ưu tiên một tab trung gian `DASH_DATA` hoặc endpoint trả JSON với schemaVersion, generatedAt, sourceTab, filters, kpis, series, exceptions và quality. Không để frontend tự suy diễn công thức KPI nếu công thức đã được khóa trong KPI Dictionary.

## 3. Refresh và realtime

- Mặc định refresh 60 giây; hiển thị `lastUpdated`, trạng thái stale và nút Refresh now.
- Nếu request lỗi, giữ dữ liệu cuối cùng nhưng đổi trạng thái thành stale.
- Dùng CacheService cho dữ liệu đọc nhiều; dùng batch read một lần cho nhiều range.
- Có thể dùng installable time-driven trigger để làm mới cache, nhưng trigger không phải WebSocket.
- `onEdit` không phải tín hiệu tuyệt đối cho mọi cập nhật: thay đổi do API/script hoặc công thức có thể không kích hoạt theo cách người dùng kỳ vọng; luôn giữ polling/manual refresh.
- Không hứa dữ liệu tức thời khi nguồn chưa cập nhật hoặc công thức Sheet đang tính lại.

## 4. Design và QA

- Nền trung tính, navy cấu trúc, blue thông tin, orange kỳ hiện tại, green/yellow/red trạng thái.
- KPI card phải có tên, giá trị, đơn vị, so sánh kỳ, trạng thái và timestamp.
- Có loading, empty, error và stale state; màu đi cùng nhãn chữ.
- Kiểm tra 5–10 KPI với nguồn Sheet, filter, refresh, lỗi mạng, desktop/mobile và quyền tài khoản test.

## 5. Bảo mật

- Không đặt Sheet ID nhạy cảm, API key, OAuth token hoặc PII vào HTML public.
- Lấy cấu hình từ Script Properties/backend; ghi rõ deploy owner, execution identity, audience và scope.
- Dashboard public chỉ dùng dữ liệu đã ẩn danh/tổng hợp.

## Nguồn nghiên cứu

- Google Apps Script HTML Service, `doGet`, `google.script.run`, Cache Service, best practices và installable triggers.
- `Namanjain723/pixlforge-command-center`, `WildH0g/apps-script-engine-template`, `scoover/tiller-web-dashboard`, `rwdcollaborative/rwd-wg-dashboard`, `Rweg/google-apps-script-automation-templates` và `chartjs/Chart.js` discussion #11112.

Các repo chỉ là mẫu kiến trúc; không sao chép dữ liệu, credential, thương hiệu hoặc ngưỡng KPI.
