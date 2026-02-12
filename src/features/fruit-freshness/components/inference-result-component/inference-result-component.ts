import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';

export interface AnalysisResult {
  className: string;
  status: 'fresh' | 'stale';
  confidence: number;
  timestamp: string;
  model?: string;
  batchId?: string;
  inferenceTime?: string;
}

@Component({
  selector: 'app-inference-result-component',
  imports: [CardModule, ButtonModule, ProgressBarModule, TagModule],
  templateUrl: './inference-result-component.html',
  styleUrl: './inference-result-component.css',
})
export class InferenceResultComponent {
  @Input() message = 'Ejecute un análisis para ver los detalles técnicos de la clasificación.';
  @Input() icon = 'pi pi-wave-pulse';
  @Input() result?: AnalysisResult;
  @Input() showMockAction = true;

  protected mockResult?: AnalysisResult;

  protected readonly classes = [
    'Manzana (Red Delicious)',
    'Banano',
    'Tomate',
    'Pimiento',
    'Melón Amargo',
  ];

  protected readonly models = ['v3.2_ResNet152', 'v2.8_EfficientNetB4', 'v4.0_MobileNetV3'];

  get activeResult(): AnalysisResult | undefined {
    return this.result ?? this.mockResult;
  }

  protected runMockAnalysis(): void {
    const className = this.classes[Math.floor(Math.random() * this.classes.length)];
    const status = Math.random() > 0.4 ? 'fresh' : 'stale';
    const confidence = Number((Math.random() * (0.99 - 0.7) + 0.7).toFixed(4));
    const model = this.models[Math.floor(Math.random() * this.models.length)];
    const batchSuffix = Math.floor(Math.random() * 90 + 10);
    const inferenceTime = `${Math.floor(Math.random() * 140 + 60)}ms`;

    this.mockResult = {
      className,
      status,
      confidence,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      model,
      batchId: `#BATCH-2026-X${batchSuffix}`,
      inferenceTime,
    };
  }

  protected clearMockResult(): void {
    this.mockResult = undefined;
  }

  protected toPercentage(value: number): number {
    return Number((value * 100).toFixed(2));
  }
}
