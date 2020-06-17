import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    //private courseService: CourseService,
    private location: Location
  ) {}

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
