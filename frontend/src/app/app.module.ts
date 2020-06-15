import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CommentComponent } from './comment/comment.component';
import { MessagesComponent } from './messages/messages.component';
import { CourseComponent } from './course/course.component';
import { CourseTimelineComponent } from './course-timeline/course-timeline.component';
import { CourseBlogComponent } from './course-blog/course-blog.component';
import { CourseCodeComponent } from './course-code/course-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchComponent,
    VideoDetailComponent,
    PlaylistComponent,
    CommentComponent,
    MessagesComponent,
    CourseComponent,
    CourseTimelineComponent,
    CourseBlogComponent,
    CourseCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
