import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FreshnessResDto } from '../interfaces/freshness-res-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class InferenceService {
  private http = inject(HttpClient);
  private readonly BASE_URL = `${environment.inferenceApiURL}/freshness`;

  classify(file: File): Observable<FreshnessResDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<FreshnessResDto>(`${this.BASE_URL}/classify`, formData);
  }
}
