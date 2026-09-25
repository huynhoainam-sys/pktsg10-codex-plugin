# Research-Derived Principles

Tài liệu này ghi lại các nguyên tắc rút ra từ những repo công khai đã nghiên cứu và cách điều chỉnh cho FPT Telecom Excel/Google Sheets. Đây là nguyên tắc tham khảo, không sao chép code hoặc UI.

## Workflow/router

- [Workflow Skill Router](https://github.com/eric861129/Workflow-skill-router): route nhỏ nhất có thể kiểm chứng, phase route lại, explicit skill lock và exit evidence.
- [workflow-router-skill](https://github.com/Moonweave-Systems/workflow-router-skill): router là workflow contract, chọn một primary, nạp tối thiểu skill cần thiết và dừng tại cổng bằng chứng.
- [Codex Multi-Agent Workflow](https://github.com/redstonejh/multi-agent-workflow-codex): vai trò rõ, handoff bằng Markdown, deterministic checks và run folder có thể audit.
- [AgentRepoRouter](https://github.com/wufei-png/AgentRepoRouter): runtime skill ngắn, chi tiết đặt trong references, có installer/validation và kiểm thử nhiều lớp.

### Áp dụng cho FPT

- `Brief/Router` không phân tích thay `Branch Director` và không tự sửa Sheet.
- Agent chỉ nhận source snapshot/range cần thiết.
- Mỗi handoff phải có `Finding`, `Evidence`, `Decision impact`, `Next owner/action`.
- Lưu run ledger; không chấp nhận “đã kiểm tra” nếu không có range, screenshot, công thức hoặc số đối chiếu.
- Parallel branches chỉ merge tại QA/Reconciler.

## Design system/dashboard

- [Dashboard Design System](https://github.com/SymbolStar/dashboard-design-system): design tokens, nhịp 4px, semantic status, bảng dày và filter components.
- [Yafa UI Dashboard](https://github.com/rejourneyco/yafa-ui-dashboard): nền trung tính, route identity ổn định, màu KPI theo ý nghĩa, status không dựa vào màu alone và review checklist.
- [open-design dashboard](https://github.com/nexu-io/open-design/tree/main/design-systems/dashboard): hierarchy, primary/secondary/success/warning/danger và baseline spacing.

### Áp dụng cho FPT Sheet

- Giữ Arial và token người dùng đã duyệt: 16/11/10/9.
- Dùng nhịp 4/8/16/24 cho khoảng cách, row height và group spacing theo khả năng của Sheet.
- Dùng navy/blue làm structure, orange cho kỳ hiện tại, green/yellow/red cho status; team color chỉ ở identity cells.
- Tối đa 5 màu nhóm trong một view; nếu nhiều team hơn, dùng nền trung tính và highlight team đang chọn.
- Status phải có text như `Về đích`, `Cận đích`, `Rủi ro`, không chỉ tô màu.
- Kiểm tra grayscale, contrast, clipping và đọc ở 100% zoom.

## Những gì không đưa vào skill

- Không đưa responsive web layout, React component, dark-mode UI hoặc animation vào workflow Sheet.
- Không dùng màu UI web nguyên xi nếu xung đột với hệ navy/blue/orange/green/yellow/red đã duyệt.
- Không biến router thành một autonomous production system; quyền sửa file, chia sẻ và triển khai vẫn theo host/connector.
