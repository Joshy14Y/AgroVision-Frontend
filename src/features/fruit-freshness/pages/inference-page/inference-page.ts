import { Component, inject, signal } from '@angular/core';
import { InferenceHistoryComponent } from '@features/fruit-freshness/components/inference-history-component/inference-history-component';
import { InferenceResultComponent } from '@features/fruit-freshness/components/inference-result-component/inference-result-component';
import { AnalysisResult } from '@features/fruit-freshness/interfaces/analysis-result.interface';
import { FreshnessResDto } from '@features/fruit-freshness/interfaces/freshness-res-dto.interface';
import { HistoryItem } from '@features/fruit-freshness/interfaces/history-item.interface';
import { InferenceService } from '@features/fruit-freshness/services/inference.service';
import { v7 as uuid } from 'uuid';

@Component({
  selector: 'app-inference-page',
  imports: [InferenceResultComponent, InferenceHistoryComponent],
  templateUrl: './inference-page.html',
})
export class InferencePage {
  private inferenceService = inject(InferenceService);

  analysis = signal<AnalysisResult | null>(null);
  history = signal<HistoryItem[]>([]);
  isLoading = signal<boolean>(false);

  onFileReceived(file: File): void {
    this.isLoading.set(true);
    this.inferenceService.classify(file).subscribe({
      next: (res) => {
        const result = this.mapToAnalysisResult(res);
        this.analysis.set(result);
        this.isLoading.set(false);
        this.updateHistory(result);
      },
      error: (err) => {
        console.error('Inference error:', err);
        this.isLoading.set(false);
      },
    });
  }

  private mapToAnalysisResult(res: FreshnessResDto): AnalysisResult {
    return {
      class: res.label,
      status: res.label.toLowerCase().includes('fresh') ? 'fresh' : 'stale',
      confidence: res.confidence,
    };
  }

  private updateHistory(result: AnalysisResult): void {
    const newItem: HistoryItem = {
      id: uuid(),
      class: result.class,
      status: result.status,
      timestamp: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    this.history.update((currentHistory) => [newItem, ...currentHistory].slice(0, 5));
  }
}
