import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';

import { AnalysisResult } from '../interfaces/analysis-result.interface';

@Component({
  selector: 'app-inference-result-component',
  imports: [CardModule, ButtonModule, ProgressBarModule, TagModule, ProgressBar, FluidModule],
  templateUrl: './inference-result-component.html',
})
export class InferenceResultComponent {
  show = false;

  @Input() analysis?: AnalysisResult;

  get statusLabel() {
    return this.analysis?.status === 'fresh' ? 'FRESCO' : 'CADUCADO';
  }

  get statusSeverity() {
    return this.analysis?.status === 'fresh' ? 'success' : 'danger';
  }

  get statusIcon() {
    return this.analysis?.status === 'fresh' ? 'pi pi-check-circle' : 'pi pi-times-circle';
  }

  get confidenceColor() {
    const score = this.analysis?.confidence ?? 0;
    if (score >= 0.8) return 'var(--p-green-500)';
    if (score >= 0.5) return 'var(--p-yellow-500)';
    return 'var(--p-red-500)';
  }
}
