import { Component, signal, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionSelectorComponent } from './components/version-selector/version-selector';
import { PackageSelectorComponent } from './components/package-selector/package-selector';
import { PlaybookOutputComponent } from './components/playbook-output/playbook-output';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VersionSelectorComponent, PackageSelectorComponent, PlaybookOutputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private renderer = inject(Renderer2);

  fromVersion = signal<number | null>(null);
  toVersion = signal<number | null>(null);
  selectedPackageIds = signal<string[]>([]);
  isDarkMode = signal(false);

  get showContent(): boolean {
    return this.fromVersion() !== null && this.toVersion() !== null;
  }

  ngOnInit() {
    this.applyTheme();
  }

  applyTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme', this.isDarkMode() ? 'dark' : 'light');
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    this.applyTheme();
  }

  onFromVersionChange(v: number | null) {
    this.fromVersion.set(v);
  }

  onToVersionChange(v: number | null) {
    this.toVersion.set(v);
  }

  onPackagesChange(ids: string[]) {
    this.selectedPackageIds.set(ids);
  }
}
