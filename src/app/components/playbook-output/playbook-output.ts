import { Component, input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { PlaybookPhase } from '../../models/version.model';
import {
  ANGULAR_CORE_MATRIX,
  PACKAGE_MATRIX,
  PACKAGE_GROUPS,
  GOTCHAS,
  GLOBAL_GOTCHAS,
} from '../../data/version-data';

@Component({
  selector: 'app-playbook-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playbook-output.html',
  styleUrl: './playbook-output.scss',
})
export class PlaybookOutputComponent {
  fromVersion = input.required<number>();
  toVersion = input.required<number>();
  selectedPackageIds = input<string[]>([]);

  private clipboard = inject(Clipboard);
  copiedPhase = -1;
  copiedAll = false;

  phases = computed<PlaybookPhase[]>(() => {
    const from = this.fromVersion();
    const to = this.toVersion();
    const selectedIds = this.selectedPackageIds();

    const phases: PlaybookPhase[] = [];

    for (let step = from; step < to; step++) {
      const stepFrom = step;
      const stepTo = step + 1;
      const coreInfo = ANGULAR_CORE_MATRIX[stepTo];
      const prevCoreInfo = ANGULAR_CORE_MATRIX[stepFrom];
      const nodeChanged = coreInfo.node !== prevCoreInfo.node;

      // Build upgrade command
      const materialVersion = PACKAGE_MATRIX[stepTo]?.['material'] ?? 'latest';
      const matMaj = materialVersion.split('.')[0];
      const coreCommand = `# Step 1 — Upgrade Angular Core (v${stepFrom} → v${stepTo})\nnpx ng update @angular/core@${stepTo} @angular/cli@${stepTo} @angular/material@${matMaj} @angular/cdk@${matMaj} --allow-dirty --create-commits --force`;

      // Build package install commands for selected packages
      const packageCommands: string[] = [];
      if (selectedIds.length > 0) {
        packageCommands.push('# Step 2 — Upgrade Selected Third-Party Packages');
        for (const id of selectedIds) {
          const pkgDef = PACKAGE_GROUPS.flatMap(g => g.packages).find(p => p.id === id);
          if (!pkgDef) continue;
          const version = PACKAGE_MATRIX[stepTo]?.[pkgDef.matrixKey];
          if (!version || version === '-') continue;
          const maj = version.split('.')[0];
          packageCommands.push(
            `npm install ${pkgDef.packageName}@${maj} --legacy-peer-deps`
          );
          // If capacitor selected — append cap migrate
          if (id === 'capacitor') {
            packageCommands.push('npx cap migrate');
          }
        }
      }

      const phaseGotchas = GOTCHAS[`${stepFrom}-${stepTo}`] ?? [];

      const fullText = [
        `╔══════════════════════════════════════════╗`,
        `║  Phase: Angular ${stepFrom} → ${stepTo}${' '.repeat(Math.max(0, 26 - `Phase: Angular ${stepFrom} → ${stepTo}`.length))}║`,
        `╚══════════════════════════════════════════╝`,
        ``,
        `Node.js: ${coreInfo.node}`,
        `TypeScript: ${coreInfo.ts}`,
        `RxJS: ${coreInfo.rxjs}`,
        ``,
        coreCommand,
        ...(packageCommands.length > 0 ? ['', ...packageCommands] : []),
        ...(phaseGotchas.length > 0
          ? ['', '# ⚠️  Gotchas', ...phaseGotchas.map(g => `# • ${g}`)]
          : []),
      ].join('\n');

      phases.push({
        from: stepFrom,
        to: stepTo,
        nodeRequirement: coreInfo.node,
        nodeChanged,
        coreCommand,
        packageCommands,
        gotchas: phaseGotchas,
        globalGotchas: GLOBAL_GOTCHAS,
        fullText,
      });
    }

    return phases;
  });

  allText = computed(() =>
    this.phases()
      .map(p => p.fullText)
      .join('\n\n' + '─'.repeat(44) + '\n\n')
  );

  copyPhase(index: number, text: string) {
    this.clipboard.copy(text);
    this.copiedPhase = index;
    setTimeout(() => (this.copiedPhase = -1), 2000);
  }

  copyAll() {
    this.clipboard.copy(this.allText());
    this.copiedAll = true;
    setTimeout(() => (this.copiedAll = false), 2000);
  }

  phaseColor(index: number): string {
    const colors = [
      'var(--accent-blue)',
      'var(--accent-purple)',
      'var(--accent-green)',
      'var(--accent-amber)',
      'var(--accent-pink)',
      'var(--accent-cyan)',
    ];
    return colors[index % colors.length];
  }
}
