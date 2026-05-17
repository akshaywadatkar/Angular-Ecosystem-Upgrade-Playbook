import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageGroup, PackageItem } from '../../models/version.model';
import { PACKAGE_GROUPS } from '../../data/version-data';

@Component({
  selector: 'app-package-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-selector.html',
  styleUrl: './package-selector.scss',
})
export class PackageSelectorComponent {
  selectedIds = signal<Set<string>>(new Set());
  selectedChange = output<string[]>();

  packageGroups: PackageGroup[] = PACKAGE_GROUPS;

  corePackages = [
    '@angular/core',
    '@angular/cli',
    '@angular/material',
    '@angular/cdk',
    'Node.js',
    'TypeScript',
    'RxJS',
  ];

  isSelected(id: string): boolean {
    return this.selectedIds().has(id);
  }

  toggle(pkg: PackageItem) {
    const current = new Set(this.selectedIds());
    if (current.has(pkg.id)) {
      current.delete(pkg.id);
    } else {
      current.add(pkg.id);
    }
    this.selectedIds.set(current);
    this.selectedChange.emit(Array.from(current));
  }
}
