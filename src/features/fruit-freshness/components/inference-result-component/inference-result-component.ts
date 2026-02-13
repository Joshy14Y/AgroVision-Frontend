import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FluidModule } from 'primeng/fluid';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';

export interface AnalysisResult {
  class: string;
  confidence: number;
  time: number;
  model: string;
  batch_id: string;
}

@Component({
  selector: 'app-inference-result-component',
  imports: [CardModule, ButtonModule, ProgressBarModule, TagModule, ProgressBar, FluidModule],
  templateUrl: './inference-result-component.html',
})
export class InferenceResultComponent {
  show = false;

  @Input() analysis?: AnalysisResult;

  getConfidenceColor(value: number): string {
    if (value >= 0.8) {
      return '#22c55e';
    } else if (value >= 0.5) {
      return '#eab308';
    } else {
      return '#ef4444';
    }
  }
}
