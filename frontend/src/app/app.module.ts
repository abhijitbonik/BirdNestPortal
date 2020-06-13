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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchComponent,
    VideoDetailComponent,
    PlaylistComponent,
    CommentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
