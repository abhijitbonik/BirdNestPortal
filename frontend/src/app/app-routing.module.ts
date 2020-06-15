import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';
import {CourseComponent} from './course/course.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'channel/course', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
