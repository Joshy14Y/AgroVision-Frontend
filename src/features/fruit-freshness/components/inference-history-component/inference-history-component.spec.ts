import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceHistoryComponent } from './inference-history-component';

describe('InferenceHistoryComponent', () => {
  let component: InferenceHistoryComponent;
  let fixture: ComponentFixture<InferenceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InferenceHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InferenceHistoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
