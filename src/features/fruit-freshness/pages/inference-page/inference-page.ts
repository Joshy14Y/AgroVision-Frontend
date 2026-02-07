import { Component } from '@angular/core';
import { InferenceHistoryComponent } from '@features/fruit-freshness/components/inference-history-component/inference-history-component';
import { InferenceResultComponent } from '@features/fruit-freshness/components/inference-result-component/inference-result-component';
import { UploadFileComponent } from '@features/fruit-freshness/components/upload-file-component/upload-file-component';

@Component({
  selector: 'app-inference-page',
  imports: [UploadFileComponent, InferenceResultComponent, InferenceHistoryComponent],
  templateUrl: './inference-page.html',
})
export class InferencePage {}
