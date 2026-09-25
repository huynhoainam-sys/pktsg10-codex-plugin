# Agent Operating Model — FPT Telecom

## Operating map

```text
Brief/Router
     |
     v
Data Auditor -> KPI Contract
     |
     +--> Sales Analyst
     +--> Technical Ops Analyst
     +--> Customer/Churn Analyst
     +--> Local Marketing Analyst
     +--> Sheet Designer
                    |
                    v
             QA/Reconciler
                    |
                    v
              Handoff/PM
```

## Parallelization rules

1. Parallel branches may read the same locked source snapshot.
2. They may not redefine KPI, overwrite the source, or edit the same presentation range concurrently.
3. Sheet Designer may use a copied/locked presentation range while analysts work on calculations.
4. QA is the merge gate and must inspect the final combined artifact, not branch outputs only.

## Assignment matrix

| Request signal | Agent | Skill route |
|---|---|---|
| doanh số, thuê bao mới, conversion, CAC | Sales Analyst | `fpt-branch-telecom-management` + `funnel-analysis` when needed |
| SLA, ticket, sửa chữa, repeat fault | Technical Ops Analyst | `fpt-branch-telecom-management` |
| khiếu nại, CSAT, churn, cứu giữ | Customer/Churn Analyst | `customer-feedback-analysis` or `churn-prevention` |
| địa bàn, chiến dịch, lead, ngân sách | Local Marketing Analyst | `marketing-plan` + `go-to-market` when needed |
| font, màu, preset, layout, filter, image | Sheet Designer | `report-design-excel-sheets-dashboard` + `google-drive:google-sheets` |
| số liệu, tổng, công thức, QA | QA/Reconciler | `data-analytics:validate-data` |

## Exit gates

- `source-contract-locked`: nguồn, grain, kỳ, định nghĩa và phạm vi được ghi lại.
- `parallel-branches-complete`: mọi nhánh đã trả evidence và không xung đột KPI.
- `artifact-reconciled`: tổng, công thức, chart source và filter đúng.
- `visual-reloaded`: font, màu, wrap, clipping, ảnh và link đạt sau reload 100%.
- `actionable-handoff`: có owner, deadline, KPI tác động, ngưỡng cảnh báo và lịch refresh.

## Failure policy

- P0: dừng ngay khi có sai dữ liệu, mất file, mất quyền hoặc ghi đè nguy hiểm.
- P1: chưa bàn giao nếu KPI/công thức/ảnh chính sai hoặc trang đầu khó đọc.
- P2: ghi backlog polish sau khi đã bàn giao an toàn.
