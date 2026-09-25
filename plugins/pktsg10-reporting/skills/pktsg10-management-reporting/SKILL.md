---
name: pktsg10-management-reporting
description: "Quản trị và thiết kế báo cáo cho chi nhánh FPT Telecom: phân tích sales, kỹ thuật, CSKH, marketing địa bàn, KPI/dashboard, kế hoạch 30-60-90 ngày và chỉnh sửa Excel/Google Sheets theo hệ màu, typography, bố cục chuyên nghiệp. Tự định tuyến theo brief để dùng riêng hoặc kết hợp nghiệp vụ FPT với thiết kế Sheet."
---

# Pktsg10 Management Reporting

Đây là skill hợp nhất cho hệ thống báo cáo FPT của người dùng. Skill nối nghiệp vụ quản trị chi nhánh với thiết kế và chỉnh sửa báo cáo native Excel/Google Sheets. Dùng design system như quy tắc có thể tái sử dụng, không sao chép screenshot.

## 1. Định tuyến theo brief

- Brief chỉ phân tích KPI/kinh doanh/vận hành → ưu tiên nghiệp vụ FPT.
- Brief chỉ sửa font, màu, bố cục, filter, ảnh, công thức hoặc dashboard → ưu tiên thiết kế và chỉnh sửa Sheet.
- Brief vừa phân tích vừa trình bày báo cáo → chạy cả hai nhánh.
- Brief yêu cầu HTML dashboard, Apps Script, realtime từ Google Sheets hoặc web app → thêm nhánh `dashboard-runtime`.
- Brief có funnel, churn, CSKH, marketing, sales pipeline hoặc KPI framework → thêm skill chuyên môn đúng nút thắt, không nạp tất cả skill.

Route luôn công khai: `Brief → Primary → Supporting → Exit gate`.

## 2. Nghiệp vụ FPT Telecom

Luôn nối số liệu với quyết định, owner, deadline, KPI tác động và ngưỡng dừng. Không bịa số liệu hoặc suy luận nguyên nhân khi chỉ có tương quan.

### Bộ điều khiển quản trị bắt buộc

Với brief có số liệu hoặc yêu cầu điều hành, phải tạo tối thiểu bốn artefact trước khi kết luận:

1. **KPI Dictionary:** định nghĩa, công thức, đơn vị, grain, trường dữ liệu bắt buộc, nguồn, owner, version và caveat.
2. **Data Contract:** nguồn/tab, schema cột, khóa dòng, kỳ dữ liệu, freshness, quy tắc thiếu/trùng/giá trị hợp lệ và người xác nhận.
3. **Control Rules:** ngưỡng xanh/vàng/đỏ, so sánh kỳ trước, ngưỡng mẫu số nhỏ và điều kiện escalation. Không tự coi ngưỡng mặc định là chính sách công ty nếu chưa được xác nhận.
4. **Action/Decision Log:** phát hiện, quyết định, owner, hạn, KPI tác động, trạng thái, bằng chứng cập nhật và bước escalation.

Đọc [references/kpi-dictionary.md](references/kpi-dictionary.md) khi cần định nghĩa hoặc thêm KPI; đọc [references/data-contract-template.yaml](references/data-contract-template.yaml) khi có nguồn dữ liệu mới; đọc [references/management-control-plane.md](references/management-control-plane.md) khi brief cần điều hành, cảnh báo, họp hoặc theo dõi hành động.

### KPI mặc định

- Sales: thuê bao mới, doanh thu thuần, ARPU, lead, tỷ lệ liên hệ, khảo sát, chốt, lắp thành công, hủy trước lắp, CAC.
- Kỹ thuật: SLA lắp mới/sửa chữa, ticket tồn/quá hạn, median/P90 xử lý, repeat fault, hoàn thành đúng hẹn, năng suất kỹ thuật viên.
- CSKH: khiếu nại mới/lặp lại, phản hồi/đóng case, CSAT/NPS, churn, nguy cơ hủy, tỷ lệ cứu giữ và nguyên nhân hủy.
- Marketing: chi phí, lead đủ điều kiện, chuyển đổi, CAC, doanh thu tạo ra, hiệu quả phường/xã/chung cư/khu dân cư, mã chiến dịch, bán thêm và giới thiệu.

### Chuẩn phân tích

1. Chốt chi nhánh, kỳ báo cáo, mục tiêu và kỳ so sánh.
2. Kiểm tra thiếu/trùng/sai ngày/thay đổi định nghĩa/mẫu số nhỏ.
3. Xây một North Star KPI và 3–6 drivers.
4. Phân tích theo địa bàn, nhân viên, sản phẩm, kênh và nhóm khách hàng.
5. Viết phát hiện theo `What / So What / Now What`.
6. Chuyển thành kế hoạch hành động 30–60–90 ngày.
7. Chấm điểm sức khỏe chi nhánh theo nhóm Sales/Kỹ thuật/CSKH/Marketing/Execution nếu brief là báo cáo giám đốc.

## 3. Thiết kế và chỉnh sửa Sheet

### Preset tự chọn

- **A — Executive Summary:** báo cáo giám đốc, KPI rollup, tháng/kỳ, tổng quan nhanh.
- **B — Planning Narrative:** quy hoạch/địa bàn/dự án, tiến độ, rủi ro, ghi chú và hình ảnh.
- **C — Operations Monitor:** sales, kỹ thuật, CSKH, IBB/RM, bảng dày, filter chip và exception.

### Design tokens

- Font Arial: tiêu đề 16 bold; khu vực 11 bold; header/body 10; ghi chú 9 italic.
- Navy/blue cho cấu trúc và thương hiệu.
- Orange cho kỳ hiện tại hoặc vùng được chọn.
- Green/yellow/red cho positive/attention/risk.
- Màu team chỉ dùng ở ô nhận diện team; không dùng đè lên màu trạng thái.
- Narrative căn trái và wrap; số/trạng thái căn giữa hoặc phải nhất quán.
- Dùng border xanh-xám mảnh, freeze pane, filter chip, dòng tổng rõ ràng.
- Không merge trong raw data; không thay công thức bằng giá trị; không flatten thành ảnh.

### Quy tắc ảnh/link

Kiểm tra công thức `IMAGE()`, expiry của URL Blob/SAS, quyền Drive và khả năng tải. Dùng URL ổn định; giữ link nguồn ở cột nguồn; reload Sheet và xác nhận ảnh hiển thị trước khi bàn giao.

### Fallback khi không thao tác được Google Sheets

Nếu thiếu connector, mất quyền, lỗi tải/render hoặc live edit không an toàn, tự chuyển sang tạo file `.xlsx` chỉnh sửa được. Không dừng ở việc báo lỗi và không tuyên bố đã sửa Sheet. Giữ dữ liệu, công thức, format, filter, dashboard và ảnh/link ở mức Excel hỗ trợ; ghi rõ lý do fallback và hướng dẫn upload/import lại vào Google Sheets.

Đọc [references/excel-fallback.md](references/excel-fallback.md) khi kích hoạt nhánh này.

### HTML dashboard và Apps Script

Khi người dùng muốn dashboard trực quan từ Google Sheets, chọn đúng một runtime:

- **Sheet-native:** Apps Script bound với sidebar/modal; dữ liệu đi qua `google.script.run`.
- **Web App:** Apps Script `doGet()` phục vụ HTML; frontend gọi hàm server và polling 30–60 giây.
- **External HTML:** frontend độc lập gọi endpoint an toàn; chỉ dùng Google Sheets API khi có OAuth/backend phù hợp, không nhúng API key vào HTML công khai.

Không gọi polling là realtime tuyệt đối. Ghi rõ `refresh interval`, `lastUpdated`, trạng thái stale và giới hạn Apps Script. Đọc [references/html-dashboard.md](references/html-dashboard.md) và dùng starter trong `assets/pktsg10-dashboard-starter/` khi brief cần code.

## 4. Workflow hợp nhất

1. **Brief & source audit:** xác định quyết định, phạm vi, tab, công thức, link, filter, freeze pane và baseline.
2. **KPI/data contract:** khóa định nghĩa, kỳ so sánh, mẫu số và nguồn.
3. **Preset/design map:** chọn A/B/C, màu, font, layout và vị trí KPI.
4. **Native build/edit:** chỉnh Excel/Google Sheets bằng cell/formula/filter/chart/image native.
5. **Parallel review:** kiểm thử độc lập theo bốn góc nhìn:
   - dữ liệu/công thức/tổng;
   - thẩm mỹ/font/màu/căn chỉnh;
   - biểu đồ/KPI/khả năng đọc quyết định;
   - vận hành/filter/link/khả năng refresh.
6. **Action plan:** owner, deadline, KPI kỳ vọng, trạng thái, ngưỡng cảnh báo/kill criteria.
7. **Operating cadence:** xác định nhịp daily/weekly/monthly, agenda, người chủ trì và điều kiện escalation nếu là chu kỳ quản trị.
8. **Handoff:** trả file/link, thay đổi chính, bằng chứng QA, giả định, hạn chế, lịch refresh và action/decision log.
9. **Runtime verification:** nếu có dashboard code, kiểm tra endpoint, quyền truy cập, refresh, stale state, lỗi mạng và dữ liệu rỗng trên desktop/mobile.

## 5. Cổng chất lượng

- `source-contract-locked`: đúng nguồn, tab, kỳ và định nghĩa.
- `kpi-reconciled`: tổng và công thức khớp nguồn.
- `design-consistent`: đúng preset, Arial 16/11/10/9, màu không xung đột.
- `sheet-reloaded`: đã reload và kiểm tra trực quan ở 100%.
- `actionable-handoff`: mỗi phát hiện có hành động, owner, deadline và KPI.
- `control-plane-ready`: KPI dictionary, data contract, control rules và action/decision log đã có owner/version.
- `dashboard-runtime-verified`: dashboard tải được, dữ liệu khớp nguồn, refresh/stale/error state hoạt động và không lộ credential.

Không bàn giao nếu còn P0/P1: sai dữ liệu, mất công thức, link/ảnh chính hỏng, hoặc màn hình chính khó đọc. P2 polish được ghi riêng.

## 6. Đầu ra theo loại brief

- Phân tích: executive summary, scorecard, 3 phát hiện, rủi ro, hành động, quyết định cần duyệt.
- Thiết kế Sheet: preset, design tokens, vùng đã chỉnh, before/after QA và link/file.
- Báo cáo kết hợp: báo cáo giám đốc + dashboard/Sheet chỉnh sửa được + action log.
- Kế hoạch: 30–60–90 ngày, lịch tuần, owner, KPI, ngân sách và kill criteria.
- Điều hành: branch health score, ngưỡng RAG, lịch họp, action log, decision log và escalation map.
- Dashboard HTML: source mapping, Apps Script/API, HTML/CSS/JS, cách deploy, refresh interval, last updated và checklist bảo mật.

## Skill routing

- `fpt-branch-telecom-management`: nghiệp vụ chi nhánh và KPI FPT.
- `report-design-excel-sheets-dashboard`: design system, preset và QA thẩm mỹ.
- `visualize`: dashboard HTML/visual exploration khi cần prototype hoặc kiểm tra tương tác.
- `google-drive:google-sheets`: đọc/sửa Sheet live theo range.
- `spreadsheets`: Excel native.
- `data-analytics:validate-data`: kiểm thử số liệu và kết luận.
- `data-analytics:visualize-data`: biểu đồ và visual QA.
- `funnel-analysis`, `sales-pipeline-management`, `customer-feedback-analysis`, `churn-prevention`, `marketing-plan`: chỉ thêm khi brief cần.

## Mô hình công ty nhỏ — các agent và cách phối hợp

Skill vận hành như một đội điều hành mini. Mỗi agent có một nhiệm vụ rõ ràng và chỉ trả về bằng chứng cần cho agent kế tiếp.

| Agent | Nhiệm vụ | Khi chạy |
|---|---|---|
| Brief/Router | Chốt mục tiêu, mode, Primary và các nhánh cần dùng | luôn chạy đầu tiên |
| Branch Director | Chuyển câu hỏi thành KPI/quyết định quản trị FPT | brief có nghiệp vụ viễn thông |
| Data Auditor | Kiểm tra nguồn, grain, ngày, thiếu/trùng, mẫu số, công thức | trước mọi kết luận số liệu |
| Sales Analyst | Funnel, pipeline, sản lượng, conversion, CAC | brief có bán hàng |
| Technical Ops Analyst | SLA, ticket tồn, repeat fault, năng suất, khu vực lỗi | brief có kỹ thuật |
| Customer/Churn Analyst | Khiếu nại, CSAT/NPS, churn, save play | brief có CSKH/giữ chân |
| Local Marketing Analyst | Địa bàn, kênh, chiến dịch, lead và doanh thu | brief có marketing |
| Sheet Designer | Preset, màu, font, bố cục, filter, ảnh, dashboard | brief có Excel/Google Sheets |
| QA/Reconciler | Kiểm thử số liệu, công thức, thẩm mỹ, reload, link | trước handoff |
| Handoff/PM | Tóm tắt, action/decision log, owner, deadline, lịch refresh, escalation | cuối workflow |

### Khi chạy song song

Chỉ chạy song song các nhánh độc lập sau khi Data Auditor khóa source contract:

- Sales Analyst, Technical Ops Analyst, Customer/Churn Analyst và Local Marketing Analyst có thể chạy song song nếu dữ liệu đầu vào không phụ thuộc nhau.
- Sheet Designer có thể chạy song song với phân tích nghiệp vụ khi chỉ làm layout trên vùng đã khóa, không sửa định nghĩa KPI.
- QA/Reconciler phải chạy sau khi các nhánh hoàn tất; không chạy QA trên dữ liệu hoặc layout còn đang thay đổi.

### Khi phải chạy tuần tự

`Brief/Router → Data Auditor → KPI contract → phân tích/thiết kế → QA → Handoff`.

Không cho phép Sheet Designer làm đẹp trước khi biết vùng dữ liệu và định nghĩa KPI; không cho phép Handoff trước khi reload và reconciliation.

### Hợp đồng bàn giao giữa agent

Mỗi agent trả về bốn phần: `Finding`, `Evidence`, `Decision impact`, `Next owner/action`. Không trả kết luận không có nguồn, không truyền toàn bộ dữ liệu thô sang nhánh không cần dùng.

### Chế độ thực thi

- **Single:** một yêu cầu nhỏ, một Primary, tối đa một Supporting.
- **Phased:** báo cáo có nhiều bước; mỗi phase route lại theo nút thắt hiện tại.
- **Parallel review:** ít nhất hai nhánh độc lập rồi hợp nhất tại QA.
- **Managed goal:** chu kỳ báo cáo/refresh lặp lại, có backlog P2 và lịch owner.

Đọc [references/agent-operating-model.md](references/agent-operating-model.md) khi brief yêu cầu nhiều agent, kiểm thử đa góc nhìn hoặc xây quy trình lặp lại.

Đọc [references/research-derived-principles.md](references/research-derived-principles.md) khi cần xây mới workflow, thay đổi hệ design token, hoặc đánh giá chất lượng route.

## Nguyên tắc nâng cấp từ nghiên cứu repo

- Router chỉ chọn route và cổng kiểm tra; không thay thế skill chuyên môn FPT, Sheets hoặc QA.
- Giữ execution contract nhỏ: mỗi agent có input, output, evidence và exit gate; không truyền lan toàn bộ context.
- Dùng design tokens thay vì màu rời rạc: nhịp 4/8/16/24, tối đa 5 màu nhóm trong một view, màu trạng thái là ngữ nghĩa và luôn đi kèm text.
- Ưu tiên nền trung tính, một màu cấu trúc, một accent kỳ hiện tại và các màu trạng thái cần thiết; không làm bảng thành “rainbow dashboard”.
- Mỗi lần chạy tạo run ledger tối thiểu: brief, source snapshot, route, changed ranges, QA evidence, unresolved P2.
- Parallel chỉ dùng cho nhánh độc lập; mọi kết luận cuối phải qua merge gate và kiểm thử lại trên artifact thực tế.
- Không coi “đã có dashboard” là đã quản trị: phải có nhịp xem, người chịu trách nhiệm và hành động khi chỉ số chuyển vàng/đỏ.
- KPI mới phải có `metric_id`, version và chủ sở hữu; thay đổi định nghĩa là thay đổi có kiểm soát, không sửa âm thầm giữa các kỳ.
- Dashboard đọc Sheets phải batch-read dữ liệu, cache khi phù hợp, giảm số lần gọi server và có failure handler; không gọi từng KPI bằng một request riêng.
- Apps Script Web App phải tách config/credential khỏi HTML, dùng Script Properties hoặc quyền Google phù hợp, và ghi rõ ai có thể xem dữ liệu.
- “Realtime” mặc định là polling 60 giây hoặc trigger cập nhật cache; chỉ gọi realtime thấp hơn khi đã kiểm tra quota, quyền và chi phí vận hành.
