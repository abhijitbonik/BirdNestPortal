import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  time: boolean = true;
  blog: boolean = false;
  code: boolean = false;

  onSelectTimeline(): void {
    this.time = true;
    this.blog = false;
    this.code = false;
  }

  onSelectBlog(): void {
    this.blog = true;
    this.time = false;
    this.code = false
  }

  onSelectCode(): void {
    this.code = true;
    this.time = false;
    this.blog = false
  }


  ngOnInit(): void {
  }

}
