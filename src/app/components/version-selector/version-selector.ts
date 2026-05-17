import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const VERSIONS = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

@Component({
  selector: 'app-version-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './version-selector.html',
  styleUrl: './version-selector.scss',
})
export class VersionSelectorComponent {
  fromVersion = signal<number | null>(null);
  toVersion = signal<number | null>(null);

  fromVersionChange = output<number | null>();
  toVersionChange = output<number | null>();

  allVersions = VERSIONS;

  toVersions = computed(() => {
    const from = this.fromVersion();
    if (from === null) return VERSIONS;
    return VERSIONS.filter(v => v > from);
  });

  onFromChange(val: string) {
    const num = val ? +val : null;
    this.fromVersion.set(num);
    // reset to if it's no longer valid
    if (this.toVersion() !== null && num !== null && (this.toVersion()! <= num)) {
      this.toVersion.set(null);
      this.toVersionChange.emit(null);
    }
    this.fromVersionChange.emit(num);
  }

  onToChange(val: string) {
    const num = val ? +val : null;
    this.toVersion.set(num);
    this.toVersionChange.emit(num);
  }
}
