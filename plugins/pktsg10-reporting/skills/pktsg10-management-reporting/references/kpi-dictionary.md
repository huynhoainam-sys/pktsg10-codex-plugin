# KPI Dictionary — Pktsg10

## Mục đích

KPI dictionary là nguồn chuẩn cho tên, nghĩa và cách tính chỉ số. Một dashboard không được tự tạo định nghĩa khác với dictionary. Nếu dữ liệu chưa đủ, đánh dấu `not-calculable` thay vì tự ước lượng.

## Schema bắt buộc

Mỗi KPI có một dòng hoặc một object với các trường:

| Trường | Quy tắc |
|---|---|
| `metric_id` | ID ổn định, ví dụ `sales.install_success_rate` |
| `metric_name` | Tên hiển thị tiếng Việt |
| `management_question` | Câu hỏi quản lý mà KPI trả lời |
| `definition` | Định nghĩa có mẫu số và phạm vi |
| `formula` | Công thức, nêu rõ tử số/mẫu số |
| `unit` | count, %, VND, minutes, days |
| `grain` | ngày/tuần/tháng/nhân sự/địa bàn/khách hàng |
| `required_fields` | Cột nguồn bắt buộc |
| `source_tab` | Tab hoặc hệ thống nguồn |
| `owner` | Người chịu trách nhiệm dữ liệu/KPI |
| `target_policy` | target nội bộ, baseline hoặc chưa xác nhận |
| `control_rule` | xanh/vàng/đỏ và so sánh kỳ |
| `measurement_note` | ngoại lệ, mẫu số nhỏ, loại trừ |
| `version` | tăng version khi đổi định nghĩa |
| `last_reviewed` | ngày kiểm tra gần nhất |

## Bộ khởi đầu cho chi nhánh viễn thông

| ID | KPI | Công thức khung | Dữ liệu tối thiểu |
|---|---|---|---|
| `sales.new_subscribers` | Thuê bao mới | đếm thuê bao đủ điều kiện trong kỳ | customer_id, activation_date, channel, area |
| `sales.install_success_rate` | Tỷ lệ lắp thành công | lắp thành công / đơn đủ điều kiện | order_id, install_status, order_date |
| `sales.funnel_close_rate` | Tỷ lệ chốt | đơn chốt / lead đủ điều kiện | lead_id, stage, stage_date |
| `sales.cac` | CAC | chi phí quy đổi / thuê bao mới | campaign_cost, new_subscribers |
| `technical.sla_on_time_rate` | Đúng SLA | ticket đóng đúng SLA / ticket đủ điều kiện | ticket_id, opened_at, closed_at, sla_due_at |
| `technical.overdue_backlog_rate` | Tồn quá hạn | ticket quá hạn chưa đóng / ticket mở | ticket_id, status, due_at |
| `technical.repeat_fault_rate` | Lỗi lặp | khách có lỗi lặp trong cửa sổ / khách đã xử lý | customer_id, fault_type, fault_date |
| `customer.complaint_repeat_rate` | Khiếu nại lặp | case lặp / tổng case | case_id, customer_id, opened_at, repeat_flag |
| `customer.churn_rate` | Tỷ lệ rời mạng | thuê bao rời / thuê bao đầu kỳ | customer_id, start_status, end_status |
| `customer.save_rate` | Tỷ lệ cứu giữ | ca giữ được / ca có nguy cơ hủy | case_id, save_outcome |
| `marketing.qualified_lead_rate` | Lead đủ điều kiện | qualified lead / total lead | lead_id, qualification_status, campaign_id |
| `marketing.campaign_roi` | ROI chiến dịch | lợi nhuận quy đổi / chi phí chiến dịch | campaign_id, cost, attributed_revenue |

Các công thức trên là khung triển khai, không phải target mặc định. Trước khi dùng chính thức phải map cột nguồn, chốt loại trừ và xác nhận owner.

## Nguyên tắc phiên bản

- Đổi tên hiển thị không nhất thiết đổi công thức; đổi mẫu số, cửa sổ thời gian hoặc điều kiện loại trừ thì phải tăng version.
- Báo cáo phải ghi `dictionary_version` và ngày chốt.
- Nếu hai tab có cùng tên KPI nhưng khác công thức, tách thành hai `metric_id`, không hợp nhất bằng tên.
