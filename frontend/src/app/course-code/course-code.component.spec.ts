import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCodeComponent } from './course-code.component';

describe('CourseCodeComponent', () => {
  let component: CourseCodeComponent;
  let fixture: ComponentFixture<CourseCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
