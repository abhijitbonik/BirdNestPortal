import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBlogComponent } from './course-blog.component';

describe('CourseBlogComponent', () => {
  let component: CourseBlogComponent;
  let fixture: ComponentFixture<CourseBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
