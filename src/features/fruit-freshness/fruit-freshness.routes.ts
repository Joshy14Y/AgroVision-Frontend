import { Routes } from '@angular/router';

import { InferencePage } from './pages/inference-page/inference-page';

export default [
  {
    path: '',
    children: [{ path: 'inference', component: InferencePage }],
  },
] as Routes;
