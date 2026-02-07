import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceResultComponent } from './inference-result-component';

describe('InferenceResultComponent', () => {
  let component: InferenceResultComponent;
  let fixture: ComponentFixture<InferenceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InferenceResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InferenceResultComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
