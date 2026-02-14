import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

export interface HistoryItem {
  id: number;
  item: string;
  status: 'fresh' | 'stale';
  confidence: number;
  timestamp: string;
}

export const DEFAULT_ITEMS: HistoryItem[] = [
  { id: 1, item: 'Manzana (Red Delicious)', status: 'fresh', confidence: 0.98, timestamp: '10:23 AM' },
  { id: 2, item: 'Banano', status: 'stale', confidence: 0.89, timestamp: '10:25 AM' },
  { id: 3, item: 'Tomate', status: 'fresh', confidence: 0.95, timestamp: '10:28 AM' },
  { id: 4, item: 'Pimiento', status: 'stale', confidence: 0.72, timestamp: '10:30 AM' },
  { id: 5, item: 'Melón Amargo', status: 'fresh', confidence: 0.91, timestamp: '10:32 AM' },
];

@Component({
  selector: 'app-inference-history-component',
  imports: [CardModule, TagModule],
  templateUrl: './inference-history-component.html',
})
export class InferenceHistoryComponent {
  @Input() items: HistoryItem[] = DEFAULT_ITEMS;

  get recentItems(): HistoryItem[] {
    return this.items.slice(0, 5);
  }

  getStatusLabel(status: HistoryItem['status']): string {
    return status === 'fresh' ? 'FRESCO' : 'DETERIORADO';
  }

  getStatusSeverity(status: HistoryItem['status']): 'success' | 'danger' {
    return status === 'fresh' ? 'success' : 'danger';
  }

  toPercentage(value: number): number {
    return Math.round(value * 100);
  }
}
