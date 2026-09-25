# Pktsg10 Reporting Plugin

Reusable Pktsg10/FPT Telecom branch-management and spreadsheet-reporting skill for Codex and supported ChatGPT plugin surfaces.

## What it includes

- FPT branch KPI logic: sales, technical operations, customer care, churn, and local marketing.
- Brief-based routing: use the FPT domain workflow alone, the Sheet design workflow alone, or both.
- Preset A Executive Summary, Preset B Planning Narrative, and Preset C Operations Monitor.
- Arial 16/11/10/9 typography, navy/blue/orange/green/yellow/red semantic system, team/status separation, and visual QA.
- Small-company agent model with data audit, sales, technical, CSKH/churn, marketing, Sheet design, reconciliation, and handoff roles.
- KPI dictionary, data-contract template, RAG/escalation controls, branch health score, operating cadence, action/decision log, forecast scenarios, and run ledger.
- HTML/Apps Script dashboard starter with 60-second refresh, CacheService, stale/error states, Chart.js and Pktsg10 visual tokens.

## Install in Codex from GitHub

After this repository is pushed to GitHub, install the skill-only package with:

```powershell
python $env:USERPROFILE\.codex\skills\.system\skill-installer\scripts\install-skill-from-github.py `
  --url https://github.com/huynhoainam-sys/pktsg10-codex-plugin/tree/main/plugins/pktsg10-reporting/skills/pktsg10-management-reporting
```

Restart Codex or open a new task so the skill catalog reloads.

## Install as a Codex/ChatGPT plugin from a local clone

Clone/download the repository, then register the included repo marketplace:

```powershell
codex plugin marketplace add .
codex plugin add pktsg10-reporting@personal
codex plugin list
```

The repository is intentionally self-contained: the plugin manifest, marketplace entry, skill, references, and
portable `.codex-plugin/plugin.json` are all included under `plugins/pktsg10-reporting`.

For ChatGPT desktop, add/open the local marketplace in the Plugins Directory, install `Pktsg10 Reporting`, then start a new chat. ChatGPT and Codex share the universal plugin directory, but local marketplace installation is still machine-local.

## Usage

```text
Use Pktsg10 Reporting.
Phân tích báo cáo tháng này cho giám đốc chi nhánh, sau đó thiết kế lại Google Sheets theo Preset A. Giữ nguyên công thức, kiểm tra tổng, reload Sheet và trả về action log.
```

For live Google Sheets edits, the host must also provide the Google Drive/Sheets connector and the user must authorize the target file. The skills-only package can still analyze an uploaded workbook or supplied data without that connector.

If live Google Sheets cannot be accessed or safely edited, the workflow automatically falls back to an editable `.xlsx`, preserves supported formulas and formatting, performs workbook QA, and reports the exact import step needed to put the result back into Google Sheets.

## Boundaries

- The skill does not invent KPI definitions, targets, or business conclusions.
- The skill does not grant Google Drive permissions.
- It does not replace host approval, authentication, sandbox, or plugin review controls.
- It uses the approved visual system as reusable tokens, not as screenshot copying.
