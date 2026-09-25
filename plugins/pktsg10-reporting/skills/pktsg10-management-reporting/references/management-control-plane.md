# Management Control Plane — Pktsg10

## 1. Branch Health Score

Khi brief là báo cáo giám đốc, tạo scorecard năm nhóm:

| Nhóm | Câu hỏi quản lý | Chỉ báo gợi ý |
|---|---|---|
| Sales | Có đạt sản lượng và chất lượng tăng trưởng không? | new subscribers, close rate, install success, CAC |
| Technical | Năng lực phục vụ có gây mất cơ hội/churn không? | SLA, overdue backlog, repeat fault |
| Customer | Khách hàng có đang xuống sức không? | complaint repeat, CSAT/NPS, churn, save rate |
| Marketing | Chi phí địa bàn có tạo nhu cầu đủ tốt không? | qualified lead, conversion, ROI |
| Execution | Đội ngũ có thực thi đúng nhịp không? | action overdue, data freshness, attendance/coverage |

Score chỉ được tính khi KPI có target hoặc baseline đã xác nhận. Nếu chưa có, hiển thị `TBD` và lý do; không gán màu xanh giả.

## 2. RAG và escalation

Ưu tiên thứ tự sau, từ ít giả định đến nhiều giả định:

1. So với target đã duyệt.
2. Nếu chưa có target, so với baseline cùng mùa/kỳ trước.
3. Nếu mẫu số nhỏ hoặc dữ liệu trễ, chuyển `gray / insufficient evidence`.

Mỗi KPI có thể dùng khung:

- **Green:** đạt target hoặc nằm trong vùng kiểm soát.
- **Amber:** lệch đáng kể hoặc xấu hai kỳ liên tiếp; owner lập action trong kỳ kế tiếp.
- **Red:** vượt ngưỡng nghiêm trọng, có ảnh hưởng khách hàng/doanh thu/SLA; escalation cho Branch Director.
- **Gray:** chưa đủ dữ liệu, definition chưa khóa hoặc freshness vi phạm.

Ngưỡng số cụ thể phải lấy từ chính sách/target của Pktsg10 hoặc được người quản lý xác nhận. Không biến ví dụ ngành thành chính sách công ty.

## 3. Nhịp điều hành

### Daily exception review

Chỉ xem KPI đỏ, ticket quá hạn, đơn có nguy cơ hủy, chiến dịch vượt chi phí và action đến hạn. Kết quả cần là danh sách xử lý trong ngày, không phải báo cáo dài.

### Weekly operating review

Agenda tối thiểu: scorecard tuần, thay đổi so với tuần trước, top 3 nguyên nhân, top 5 exception, action quá hạn, quyết định cần duyệt. Mỗi action có owner và hạn cụ thể.

### Monthly branch review

Đánh giá target, xu hướng 4–8 tuần, địa bàn/kênh/nhân sự, forecast tháng tới, rủi ro và kế hoạch 30 ngày. Chốt decision log sau họp.

### Quarterly planning

Rà lại target, capacity kỹ thuật, coverage sales, ngân sách marketing, chất lượng dữ liệu và thay đổi dictionary. Đây là lúc phê duyệt thay đổi định nghĩa hoặc trọng số.

## 4. Action log và decision log

Mỗi dòng action cần có:

`action_id`, `finding_id`, `decision_or_action`, `owner`, `supporter`, `start_date`, `due_date`, `status`, `priority`, `linked_kpi`, `expected_impact`, `latest_evidence`, `next_check`, `escalation_to`.

Trạng thái chuẩn: `open → in_progress → blocked → done → verified → closed`. `done` chưa đồng nghĩa hiệu quả; chỉ chuyển `verified` khi KPI hoặc bằng chứng đã kiểm tra.

Decision log cần thêm: quyết định, bối cảnh, phương án đã cân nhắc, người phê duyệt, ngày hiệu lực, ngày xem lại và điều kiện đảo quyết định.

## 5. Forecast và scenario

Không dự báo chỉ bằng cảm nhận. Tối thiểu tách:

- **Base:** run-rate và pipeline hiện có.
- **Target:** mục tiêu đã duyệt.
- **Stretch:** chỉ dùng khi có nguồn lực và giả định bổ sung.

Ghi rõ giả định, độ tin cậy, dữ liệu còn thiếu và điều kiện khiến forecast phải cập nhật.

## 6. Run ledger tối thiểu

Mỗi lần chạy lưu một bản ghi ngắn:

`run_id`, `run_at`, `brief`, `source_snapshot`, `contract_version`, `dictionary_version`, `route`, `changed_ranges`, `qa_results`, `decisions`, `open_actions`, `unresolved_risks`.

Run ledger có thể nằm ở một tab `RUN_LOG` trong Excel/Google Sheets; không bắt buộc dựng database.

## Nguồn nghiên cứu đã áp dụng

- Open Data Contract Standard: schema, owner, version, freshness và quality checks.
- Configure to WIN KPI Dictionary: metric ID, management question, formula, required fields, dashboard specification và implementation checklist.
- Great Expectations: expectation/checkpoint/validation result và nguyên tắc chặn dữ liệu kém chất lượng trước dashboard.
- Work OS: tách action log và decision log khỏi phần ghi chú cuộc họp.

Các repo trên cung cấp mô hình tham khảo; các ngưỡng KPI và chính sách Pktsg10 vẫn phải do người quản lý xác nhận.
