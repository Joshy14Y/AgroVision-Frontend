import { Component } from '@angular/core';
import { InferenceResultComponent } from '@features/fruit-freshness/components/inference-result-component/inference-result-component';

@Component({
  selector: 'app-inference-page',
  imports: [InferenceResultComponent],
  templateUrl: './inference-page.html',
})
export class InferencePage {
  analysis = {
    class: 'Manzana',
    confidence: 0.90,
    time: 120,
    model: 'v3.2_ResNet152',
    batch_id: '#TEST-001',
  };
}
