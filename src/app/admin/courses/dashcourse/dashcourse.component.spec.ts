import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcourseComponent } from './dashcourse.component';

describe('DashcourseComponent', () => {
  let component: DashcourseComponent;
  let fixture: ComponentFixture<DashcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
