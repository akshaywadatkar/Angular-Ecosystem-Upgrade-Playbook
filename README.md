<div align="center">

<h1>⬡ Angular Ecosystem Upgrade Playbook</h1>

<p><strong>Generate a phase-by-phase Angular upgrade runbook — instantly.</strong><br/>
Pick your current version, pick your target, select the packages you use,<br/>
and get ready-to-run <code>ng update</code> commands with gotcha warnings included.</p>

<br/>

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ng-upgrade-playbook.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-F97316?style=for-the-badge)](https://github.com/akshaywadatkar/Angular-Ecosystem-Upgrade-Playbook/pulls)

<br/>

**[🚀 Open the Tool](https://ng-upgrade-playbook.vercel.app)** &nbsp;·&nbsp;
**[📬 Request a Package](https://github.com/akshaywadatkar/Angular-Ecosystem-Upgrade-Playbook/issues/new)** &nbsp;·&nbsp;
**[🤝 Contribute](https://github.com/akshaywadatkar/Angular-Ecosystem-Upgrade-Playbook/pulls)**

</div>

---

## 🤔 What is this?

Upgrading Angular across multiple major versions is painful. The [official Angular update tool](https://update.angular.io) only shows core framework steps — it doesn't account for your third-party packages, their exact compatible versions, or the real-world gotchas that break production upgrades.

**This tool generates a complete, copy-pasteable runbook** for your specific situation:

```
Angular 14 → 17  +  @ngrx/store  +  primeng  +  ngx-toastr
```
↓ generates ↓
```
Phase 1: 14 → 15   →  exact commands + Node requirement + gotchas
Phase 2: 15 → 16   →  exact commands + Node requirement + gotchas  
Phase 3: 16 → 17   →  exact commands + Node requirement + gotchas
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 📦 **Phase splitting** | Multi-version jumps auto-split into safe one-major-at-a-time phases |
| 🔢 **Version coverage** | Angular **6 through 21** |
| 📋 **13+ packages tracked** | Material, CDK, NgRx, PrimeNG, Ionic, Capacitor, ng-bootstrap, ngx-toastr, ng-select, ngx-translate, ag-grid, ngx-spinner, sweetalert2 |
| ⚠️ **Gotcha warnings** | Phase-specific migration traps (Ivy, standalone, zoneless, broken npm releases) |
| 🖥️ **Node.js alerts** | Highlights when Node version must change between phases |
| ⎘ **Copy buttons** | Copy a single phase or all phases at once |
| 🌙 **Dark / Light mode** | Defaults to dark, toggle in top-right |
| ⚡ **Instant** | No backend, no API calls, fully static |

---

## 🎯 How it works

```
Step 1 ──► Pick FROM version        (e.g. Angular 12)
Step 2 ──► Pick TO version          (e.g. Angular 17)
Step 3 ──► Select your packages     (checkboxes, optional)
           ↓ instantly ↓
           Phase cards appear — one per major version jump
           Each card shows:
             • Node.js requirement (⚠ warning if it changes)
             • Core upgrade command  →  ng update @angular/core@X ...
             • npm install commands  →  one per selected package
             • Gotcha warnings       →  version-specific traps
             • Copy button
```

---

## 📦 Supported Packages

| Category | Packages |
|---|---|
| **Core** *(always included)* | `@angular/core`, `@angular/cli`, `@angular/material`, `@angular/cdk`, `Node.js`, `TypeScript`, `RxJS` |
| **UI** | `@ng-bootstrap/ng-bootstrap`, `ngx-bootstrap`, `primeng` |
| **State** | `@ngrx/store` |
| **Mobile** | `@ionic/angular`, `@capacitor/core` |
| **Select** | `@ng-select/ng-select` |
| **Notifications** | `ngx-toastr`, `sweetalert2` |
| **Loaders** | `ngx-spinner` |
| **i18n** | `@ngx-translate/core` |
| **Tables** | `ag-grid-angular` |

> Missing a package you use? **[Open an issue](https://github.com/akshaywadatkar/Angular-Ecosystem-Upgrade-Playbook/issues/new)** or **submit a PR** — it's just one row in a data file.

---

## 🛠 Tech Stack

- **Angular 21** — Standalone components, no NgModules
- **Angular Signals** — `signal()`, `computed()`, `input()`, `output()`
- **SCSS** — CSS custom properties, dark/light theme
- **Angular CDK** — `Clipboard` for copy-to-clipboard
- **No backend** — 100% static, all data hardcoded in `version-data.ts`
- **Deployed on Vercel**

---

## 🚀 Run Locally

> Requires **Node.js 20+**. Uses `nvm` if you have it.

```bash
# Clone the repo
git clone https://github.com/akshaywadatkar/Angular-Ecosystem-Upgrade-Playbook.git
cd Angular-Ecosystem-Upgrade-Playbook

# Install dependencies
npm install

# Start dev server
npm start
# → http://localhost:4200
```

---

## 🤝 Contributing

Contributions are very welcome! The most common PRs are:

### ➕ Add a new package

All version data lives in one file: [`src/app/data/version-data.ts`](src/app/data/version-data.ts)

**1. Add a column to `PACKAGE_MATRIX`** — one version string per Angular major (6–21):

```ts
// Inside PACKAGE_MATRIX, add your key to every row:
6:  { ..., 'your-package': '1.x' },
7:  { ..., 'your-package': '2.x' },
// ... all the way to 21
```

**2. Add a `PackageItem` to `PACKAGE_GROUPS`**:

```ts
{
  label: 'Your Category',
  packages: [
    {
      id: 'your-package',
      label: 'your-package-npm-name',
      packageName: 'your-package-npm-name',
      matrixKey: 'your-package',
      optional: true,
    },
  ],
},
```

That's it — no other files to touch.

### ⚠️ Add a gotcha warning

```ts
// In GOTCHAS, for a specific phase:
'16-17': ['Your warning here'],

// Or in GLOBAL_GOTCHAS for all phases:
export const GLOBAL_GOTCHAS = [
  'Your global warning',
];
```

### 📋 PR checklist

- [ ] Verified package versions against official npm release history
- [ ] Added the key to **all 16 rows** (Angular 6–21) in `PACKAGE_MATRIX`
- [ ] Used `'-'` for versions where the package didn't exist yet (e.g. Capacitor before Angular 8)
- [ ] Added the `PackageItem` to the correct group in `PACKAGE_GROUPS`

---

## 📁 Project Structure

```
src/app/
├── data/
│   └── version-data.ts        ← all hardcoded compatibility data (edit here!)
├── models/
│   └── version.model.ts       ← TypeScript interfaces
└── components/
    ├── version-selector/      ← FROM / TO dropdowns
    ├── package-selector/      ← checkbox chip UI
    └── playbook-output/       ← phase cards + copy buttons
```

---

## 📄 License

MIT © [Akshay Wadatkar](https://github.com/akshaywadatkar)

---

<div align="center">

If this saved you time, consider giving it a ⭐ on GitHub!

**[🚀 Open the Tool](https://ng-upgrade-playbook.vercel.app)**

</div>
