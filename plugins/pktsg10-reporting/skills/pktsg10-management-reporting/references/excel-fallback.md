# Excel Fallback Workflow

Khi Google Sheets không thể đọc/sửa an toàn do thiếu connector, quyền, lỗi tải hoặc tính năng không hỗ trợ, skill phải chuyển sang tạo `.xlsx` editable.

Trình tự: giữ link nguồn → lấy dữ liệu khả dụng → dựng native workbook → áp preset FPT → đối soát công thức/tổng → mở lại kiểm tra 100% → bàn giao file và hướng dẫn upload/import vào Google Sheets.

Không bịa dữ liệu, không thay công thức bằng giá trị, tách raw/calculation/presentation khi có thể, đánh dấu tính năng không hỗ trợ và ghi rõ lý do fallback.
