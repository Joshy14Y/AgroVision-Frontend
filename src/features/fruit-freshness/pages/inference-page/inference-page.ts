import { Component } from '@angular/core';
import { InferenceHistoryComponent } from '@features/fruit-freshness/components/inference-history-component/inference-history-component';
import { InferenceResultComponent } from '@features/fruit-freshness/components/inference-result-component/inference-result-component';
import { AnalysisResult } from '@features/fruit-freshness/interfaces/analysis-result.interface';
import { HistoryItem } from '@features/fruit-freshness/interfaces/history-item.interface';

@Component({
  selector: 'app-inference-page',
  imports: [InferenceResultComponent, InferenceHistoryComponent],
  templateUrl: './inference-page.html',
})
export class InferencePage {
  analysis: AnalysisResult = {
    class: 'Manzana',
    status: 'fresh',
    confidence: 0.9,
    time: 120,
    model: 'v3.2_ResNet152',
    batch_id: '#TEST-001',
  };

  history: HistoryItem[] = [
    {
      id: 1,
      class: 'Manzana (Red Delicious)',
      status: 'fresh',
      timestamp: '10:23 AM',
    },
    { id: 2, class: 'Banano', status: 'stale', timestamp: '10:25 AM' },
    { id: 3, class: 'Tomate', status: 'fresh', timestamp: '10:28 AM' },
    { id: 4, class: 'Pimiento', status: 'stale', timestamp: '10:30 AM' },
    { id: 5, class: 'Melón Amargo', status: 'fresh', timestamp: '10:32 AM' },
  ];
}
