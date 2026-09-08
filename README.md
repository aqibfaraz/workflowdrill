# AI Fluency Workflow Audit

The same landing page (header + SaaS hero), built twice with different
prompting workflows, to compare how prompt quality changes the output.

- **`capstone-1/`** — built from a single plain-English prompt.
- **`capstone-2/`** — rebuilt with file references, explicit constraints,
  example behaviours, plan mode, and a verification step, driven by a design
  screenshot.

See [`work.md`](./work.md) for the full comparison.

## Branches

| Branch | Contents |
| --- | --- |
| `capstone-1` | baseline build only |
| `capstone-2` | baseline + structured build + `work.md` |

`git diff capstone-1..capstone-2` shows what the structured workflow added.

## Running either project

```
cd capstone-1   # or capstone-2
npm install
npm run dev
```

`capstone-1` serves on `:5173`, `capstone-2` on `:5174`. Both run fully offline
once dependencies are installed.
