import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainAddComponent } from './train-add.component';

describe('TrainAddComponent', () => {
  let component: TrainAddComponent;
  let fixture: ComponentFixture<TrainAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
