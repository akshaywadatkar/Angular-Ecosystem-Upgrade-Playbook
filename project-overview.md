# Knowledge Item: Angular Ecosystem Upgrade Playbook

## What This Project Is

A **fully static Angular 21 SPA** (no backend, no external UI libraries) located at `/Users/akshay/personal/update`.  
It generates a **phase-by-phase upgrade runbook** for Angular projects — select your current/target version, pick your packages, get ready-to-run shell commands instantly.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Angular 21, standalone components, no NgModules |
| Reactivity | Angular Signals (`signal`, `computed`, `input`, `output`) |
| Styling | SCSS with CSS custom properties (dark/light theme via `data-theme` attr) |
| Clipboard | `@angular/cdk/clipboard` — `Clipboard` injected via `inject()` |
| Build | `@angular/build` (esbuild), `ng serve` |
| No backend | All data is hardcoded in `version-data.ts` |

---

## Folder Structure

```
/Users/akshay/personal/update/
  src/
    styles.scss                        ← global CSS tokens (dark/light theme)
    index.html                         ← SEO meta, data-theme="dark"
    main.ts                            ← bootstrapApplication(App, appConfig)
    app/
      app.ts                           ← root component (class: App)
      app.html                         ← 3-step layout shell
      app.scss                         ← topbar, hero, card, footer styles
      app.config.ts                    ← provideBrowserGlobalErrorListeners()
      data/
        version-data.ts                ← ALL hardcoded data (see below)
      models/
        version.model.ts               ← TypeScript interfaces
      components/
        version-selector/              ← FROM/TO dropdowns (signal-based)
        package-selector/              ← checkbox chips, grouped by category
        playbook-output/               ← computed phase cards + copy buttons
```

---

## Data Architecture (`version-data.ts`)

### `ANGULAR_CORE_MATRIX`
`Record<number, { node, ts, rxjs }>` — Node/TS/RxJS requirements per Angular major version (6–21).

### `PACKAGE_MATRIX`
`Record<number, Record<string, string>>` — version of each third-party package per Angular major.

**Matrix keys** (column names):
`material`, `ng-bootstrap`, `ngx-bootstrap`, `primeng`, `ngrx`, `ng-select`, `ngx-toastr`, `ngx-translate`, `ionic`, `capacitor`, `aggrid`, `ngx-spinner`, `sweetalert2`

### `GOTCHAS`
`Record<string, string[]>` — keyed as `'FROM-TO'` (e.g. `'16-17'`), per-phase warnings.

### `GLOBAL_GOTCHAS`
`string[]` — warnings shown on every playbook output regardless of version.

### `PACKAGE_GROUPS`
`PackageGroup[]` — defines the checkbox chip UI. Groups: **UI**, **State**, **Mobile**, **Select**, **Notifications**, **Loaders**, **i18n**, **Tables**.

Each `PackageItem` has: `{ id, label, packageName, matrixKey, optional }`.

---

## Key Design Decisions

- `ngx-spinner` and `sweetalert2` are in the **playbook data** (version matrix + selectable chips) — NOT installed as runtime deps of this project.
- `package.json` only contains what the Angular app itself needs to run.
- Dark mode is default; toggled via `data-theme` attribute on `<html>`.
- No routing — single page only.
- `App` (not `AppComponent`) — Angular 21 CLI naming convention.

---

## Current `package.json` Dependencies

```json
"dependencies": {
  "@angular/cdk": "^21.2.11",
  "@angular/common": "^21.2.0",
  "@angular/compiler": "^21.2.0",
  "@angular/core": "^21.2.0",
  "@angular/forms": "^21.2.0",
  "@angular/platform-browser": "^21.2.0",
  "@angular/router": "^21.2.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0"
},
"devDependencies": {
  "@angular/build": "^21.2.11",
  "@angular/cli": "^21.2.11",
  "@angular/compiler-cli": "^21.2.0",
  "prettier": "^3.8.1",
  "typescript": "~5.9.2"
}
```

---

## How to Run

```bash
# Requires Node 22 (via nvm)
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use v22.22.3
npm run start      # → http://localhost:4200
```

---

## Adding a New Package to the Playbook

1. Add a version column to **every row** of `PACKAGE_MATRIX` in `version-data.ts`
2. Add a `PackageItem` entry to the appropriate group in `PACKAGE_GROUPS`
3. Do **not** add it to `package.json` — this project does not use it at runtime

## Adding Gotchas

- Phase-specific: add to `GOTCHAS['FROM-TO']` array
- Global: add to `GLOBAL_GOTCHAS` array
