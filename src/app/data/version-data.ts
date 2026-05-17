import { CoreVersionInfo, PackageGroup } from '../models/version.model';

export const ANGULAR_CORE_MATRIX: Record<number, CoreVersionInfo> = {
  6:  { node: '^8.9.0',                                    ts: '>=2.7.2 <2.8',  rxjs: '^6.0.0' },
  7:  { node: '^8.9.0 || ^10.9.0',                         ts: '>=3.1.1 <3.2',  rxjs: '^6.0.0' },
  8:  { node: '^10.9.0',                                   ts: '>=3.4.0 <3.6',  rxjs: '^6.4.0' },
  9:  { node: '^10.13.0 || ^12.11.0',                      ts: '>=3.6.0 <3.8',  rxjs: '^6.5.3' },
  10: { node: '^10.13.0 || ^12.11.0',                      ts: '>=3.9.0 <4.1',  rxjs: '^6.5.3' },
  11: { node: '^10.13.0 || ^12.11.0',                      ts: '>=4.0.0 <4.2',  rxjs: '^6.5.3' },
  12: { node: '^12.14.0 || ^14.15.0',                      ts: '>=4.2.3 <4.4',  rxjs: '^6.5.3' },
  13: { node: '^12.20.0 || ^14.15.0 || ^16.10.0',          ts: '>=4.4.3 <4.7',  rxjs: '^6.5.3 || ^7.4.0' },
  14: { node: '^14.15.0 || ^16.10.0',                      ts: '>=4.6.2 <4.9',  rxjs: '^6.5.3 || ^7.4.0' },
  15: { node: '^14.20.0 || ^16.13.0 || ^18.10.0',          ts: '>=4.8.2 <5.0',  rxjs: '^6.5.3 || ^7.4.0' },
  16: { node: '^16.14.0 || ^18.10.0',                      ts: '>=4.9.3 <5.2',  rxjs: '^6.5.3 || ^7.4.0' },
  17: { node: '^18.13.0 || ^20.9.0',                       ts: '>=5.2.0 <5.5',  rxjs: '^6.5.3 || ^7.4.0' },
  18: { node: '^18.19.1 || ^20.11.1 || ^22.0.0',           ts: '>=5.4.0 <5.6',  rxjs: '^6.5.3 || ^7.4.0' },
  19: { node: '^18.19.1 || ^20.11.1 || ^22.0.0',           ts: '>=5.5.0 <5.7',  rxjs: '^6.5.3 || ^7.4.0' },
  20: { node: '^20.19.0 || ^22.12.0 || ^24.0.0',           ts: '>=5.4.0 <5.9',  rxjs: '^7.4.0' },
  21: { node: '^20.19.0 || ^22.12.0 || ^24.0.0',           ts: '>=5.6.0 <5.9',  rxjs: '^7.4.0 || ^8.0.0' },
};

export const PACKAGE_MATRIX: Record<number, Record<string, string>> = {
  6:  { material: '6.x',  'ng-bootstrap': '3.x',  'ngx-bootstrap': '3.x',  primeng: '6.x',  ngrx: '5.x',  'ng-select': '2.x',  'ngx-toastr': '10.x', 'ngx-translate': '10.x', ionic: '4.x',  capacitor: '-',   aggrid: '-',    'ngx-spinner': '5.x',  sweetalert2: '8.x'  },
  7:  { material: '7.x',  'ng-bootstrap': '4.x',  'ngx-bootstrap': '4.x',  primeng: '7.x',  ngrx: '6.x',  'ng-select': '3.x',  'ngx-toastr': '11.x', 'ngx-translate': '11.x', ionic: '4.x',  capacitor: '-',   aggrid: '-',    'ngx-spinner': '6.x',  sweetalert2: '8.x'  },
  8:  { material: '8.x',  'ng-bootstrap': '5.x',  'ngx-bootstrap': '5.x',  primeng: '8.x',  ngrx: '8.x',  'ng-select': '3.x',  'ngx-toastr': '11.x', 'ngx-translate': '12.x', ionic: '5.x',  capacitor: '2.x', aggrid: '22.x', 'ngx-spinner': '7.x',  sweetalert2: '9.x'  },
  9:  { material: '9.x',  'ng-bootstrap': '6.x',  'ngx-bootstrap': '6.x',  primeng: '9.x',  ngrx: '9.x',  'ng-select': '5.x',  'ngx-toastr': '12.x', 'ngx-translate': '13.x', ionic: '5.x',  capacitor: '2.x', aggrid: '24.x', 'ngx-spinner': '8.x',  sweetalert2: '9.x'  },
  10: { material: '10.x', 'ng-bootstrap': '7.x',  'ngx-bootstrap': '6.x',  primeng: '10.x', ngrx: '9.x',  'ng-select': '6.x',  'ngx-toastr': '12.x', 'ngx-translate': '13.x', ionic: '5.x',  capacitor: '2.x', aggrid: '25.x', 'ngx-spinner': '9.x',  sweetalert2: '10.x' },
  11: { material: '11.x', 'ng-bootstrap': '10.x', 'ngx-bootstrap': '6.x',  primeng: '11.x', ngrx: '10.x', 'ng-select': '7.x',  'ngx-toastr': '13.x', 'ngx-translate': '13.x', ionic: '5.x',  capacitor: '3.x', aggrid: '26.x', 'ngx-spinner': '10.x', sweetalert2: '10.x' },
  12: { material: '12.x', 'ng-bootstrap': '11.x', 'ngx-bootstrap': '7.x',  primeng: '12.x', ngrx: '12.x', 'ng-select': '8.x',  'ngx-toastr': '14.x', 'ngx-translate': '14.x', ionic: '6.x',  capacitor: '3.x', aggrid: '27.x', 'ngx-spinner': '11.x', sweetalert2: '11.x' },
  13: { material: '13.x', 'ng-bootstrap': '12.x', 'ngx-bootstrap': '8.x',  primeng: '13.x', ngrx: '13.x', 'ng-select': '9.x',  'ngx-toastr': '14.x', 'ngx-translate': '14.x', ionic: '6.x',  capacitor: '3.x', aggrid: '28.x', 'ngx-spinner': '12.x', sweetalert2: '11.x' },
  14: { material: '14.x', 'ng-bootstrap': '13.x', 'ngx-bootstrap': '9.x',  primeng: '14.x', ngrx: '14.x', 'ng-select': '9.x',  'ngx-toastr': '15.x', 'ngx-translate': '14.x', ionic: '7.x',  capacitor: '4.x', aggrid: '29.x', 'ngx-spinner': '13.x', sweetalert2: '11.x' },
  15: { material: '15.x', 'ng-bootstrap': '14.x', 'ngx-bootstrap': '10.x', primeng: '15.x', ngrx: '15.x', 'ng-select': '10.x', 'ngx-toastr': '16.x', 'ngx-translate': '15.x', ionic: '7.x',  capacitor: '5.x', aggrid: '30.x', 'ngx-spinner': '14.x', sweetalert2: '11.x' },
  16: { material: '16.x', 'ng-bootstrap': '15.x', 'ngx-bootstrap': '11.x', primeng: '16.x', ngrx: '16.x', 'ng-select': '11.x', 'ngx-toastr': '17.x', 'ngx-translate': '15.x', ionic: '8.x',  capacitor: '5.x', aggrid: '31.x', 'ngx-spinner': '15.x', sweetalert2: '11.x' },
  17: { material: '17.x', 'ng-bootstrap': '16.x', 'ngx-bootstrap': '12.x', primeng: '17.x', ngrx: '17.x', 'ng-select': '12.x', 'ngx-toastr': '19.x', 'ngx-translate': '16.x', ionic: '8.x',  capacitor: '6.x', aggrid: '32.x', 'ngx-spinner': '16.x', sweetalert2: '11.x' },
  18: { material: '18.x', 'ng-bootstrap': '17.x', 'ngx-bootstrap': '13.x', primeng: '18.x', ngrx: '18.x', 'ng-select': '13.x', 'ngx-toastr': '19.x', 'ngx-translate': '16.x', ionic: '8.x',  capacitor: '7.x', aggrid: '32.x', 'ngx-spinner': '17.x', sweetalert2: '11.x' },
  19: { material: '19.x', 'ng-bootstrap': '18.x', 'ngx-bootstrap': '14.x', primeng: '19.x', ngrx: '19.x', 'ng-select': '14.x', 'ngx-toastr': '20.x', 'ngx-translate': '17.x', ionic: '8.x',  capacitor: '7.x', aggrid: '33.x', 'ngx-spinner': '17.x', sweetalert2: '11.x' },
  20: { material: '20.x', 'ng-bootstrap': '19.x', 'ngx-bootstrap': '15.x', primeng: '20.x', ngrx: '20.x', 'ng-select': '15.x', 'ngx-toastr': '20.x', 'ngx-translate': '17.x', ionic: '8.x',  capacitor: '8.x', aggrid: '33.x', 'ngx-spinner': '17.x', sweetalert2: '11.x' },
  21: { material: '21.x', 'ng-bootstrap': '19.x', 'ngx-bootstrap': '16.x', primeng: '21.x', ngrx: '21.x', 'ng-select': '15.x', 'ngx-toastr': '20.x', 'ngx-translate': '17.x', ionic: '8.x',  capacitor: '8.x', aggrid: '33.x', 'ngx-spinner': '17.x', sweetalert2: '11.x' },
};

export const GOTCHAS: Record<string, string[]> = {
  '6-7':   [],
  '7-8':   [],
  '8-9':   [],
  '9-10':  [],
  '10-11': [],
  '11-12': [],
  '12-13': ['View Engine removed. Ivy is mandatory. All libraries must be Ivy-compatible.'],
  '13-14': ['Standalone components introduced. strictTemplates recommended.'],
  '14-15': ['Node must be 14.20+ or 16.13+ or 18.10+.', 'Bootstrap 5 required for ng-bootstrap v14+.'],
  '15-16': ['Signals introduced as developer preview.'],
  '16-17': ['Standalone components are now default in CLI. New control flow syntax: @if, @for, @switch.'],
  '17-18': ['Node must be 18.19.1+.', 'HttpClientModule deprecated — use provideHttpClient() instead.'],
  '18-19': ['ng-select: do NOT install v14.0.0 exactly — use v14.0.1 or later. Known broken release.'],
  '19-20': ['Node 18 dropped. Must upgrade to Node 20.19+ or 22.12+ before this phase.', 'Zone.js becoming optional.', 'If using ng-pick-datetime: must replace with @danielmoncada/angular-datetime-picker.'],
  '20-21': ['NgZone deprecated in favour of zoneless change detection.'],
};

export const GLOBAL_GOTCHAS: string[] = [
  'ng-select: avoid exact versions 15.2.0, 16.0.0, 17.0.0, 18.0.0, 19.0.0, 20.0.0 — use .1 patch or later.',
  '@ionic-native/* packages are fully deprecated. Replace with @awesome-cordova-plugins/* before Angular 20.',
];

export const PACKAGE_GROUPS: PackageGroup[] = [
  {
    label: 'UI',
    packages: [
      { id: 'ng-bootstrap',   label: '@ng-bootstrap/ng-bootstrap', packageName: '@ng-bootstrap/ng-bootstrap', matrixKey: 'ng-bootstrap', optional: true },
      { id: 'ngx-bootstrap',  label: 'ngx-bootstrap',              packageName: 'ngx-bootstrap',              matrixKey: 'ngx-bootstrap', optional: true },
      { id: 'primeng',        label: 'primeng',                    packageName: 'primeng',                    matrixKey: 'primeng',       optional: true },
    ],
  },
  {
    label: 'State',
    packages: [
      { id: 'ngrx',           label: '@ngrx/store',                packageName: '@ngrx/store',                matrixKey: 'ngrx',          optional: true },
    ],
  },
  {
    label: 'Mobile',
    packages: [
      { id: 'ionic',          label: '@ionic/angular',             packageName: '@ionic/angular',             matrixKey: 'ionic',         optional: true },
      { id: 'capacitor',      label: '@capacitor/core',            packageName: '@capacitor/core',            matrixKey: 'capacitor',     optional: true },
    ],
  },
  {
    label: 'Select',
    packages: [
      { id: 'ng-select',      label: '@ng-select/ng-select',       packageName: '@ng-select/ng-select',       matrixKey: 'ng-select',     optional: true },
    ],
  },
  {
    label: 'Notifications',
    packages: [
      { id: 'ngx-toastr',    label: 'ngx-toastr',    packageName: 'ngx-toastr',    matrixKey: 'ngx-toastr',    optional: true },
      { id: 'sweetalert2',   label: 'sweetalert2',   packageName: 'sweetalert2',   matrixKey: 'sweetalert2',   optional: true },
    ],
  },
  {
    label: 'Loaders',
    packages: [
      { id: 'ngx-spinner',   label: 'ngx-spinner',   packageName: 'ngx-spinner',   matrixKey: 'ngx-spinner',   optional: true },
    ],
  },
  {
    label: 'i18n',
    packages: [
      { id: 'ngx-translate',  label: '@ngx-translate/core',        packageName: '@ngx-translate/core',        matrixKey: 'ngx-translate',  optional: true },
    ],
  },
  {
    label: 'Tables',
    packages: [
      { id: 'aggrid',         label: 'ag-grid-angular',            packageName: 'ag-grid-angular',            matrixKey: 'aggrid',         optional: true },
    ],
  },
];
