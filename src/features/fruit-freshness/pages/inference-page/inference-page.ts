import { Component } from '@angular/core';
import { InferenceResultComponent } from '@features/fruit-freshness/components/inference-result-component/inference-result-component';

@Component({
  selector: 'app-inference-page',
  imports: [InferenceResultComponent],
  templateUrl: './inference-page.html',
})
export class InferencePage {}
