import { status } from '../types/status.type';

export interface AnalysisResult {
  class: string;
  status: status;
  confidence: number;
  time: number;
  model: string;
  batch_id: string;
}
