import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

import { HistoryItem } from '../interfaces/history-item.interface';

@Component({
  selector: 'app-inference-history-component',
  imports: [CardModule, TagModule],
  templateUrl: './inference-history-component.html',
})
export class InferenceHistoryComponent {
  @Input() history: HistoryItem[] = [];

  getStatusSeverity(status: HistoryItem['status']) {
    return status === 'fresh' ? 'var(--p-green-500)' : 'var(--p-red-500)';
  }
}
