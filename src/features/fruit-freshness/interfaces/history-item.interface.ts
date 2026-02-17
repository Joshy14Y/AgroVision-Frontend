import { status } from '../types/status.type';

export interface HistoryItem {
  id: number;
  class: string;
  status: status;
  timestamp: string;
}
