import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDashComponent } from './train-dash.component';

describe('TrainDashComponent', () => {
  let component: TrainDashComponent;
  let fixture: ComponentFixture<TrainDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
