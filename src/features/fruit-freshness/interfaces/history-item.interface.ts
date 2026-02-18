import { status } from '../types/status.type';

export interface HistoryItem {
  id: string;
  class: string;
  status: status;
  timestamp: string;
}
