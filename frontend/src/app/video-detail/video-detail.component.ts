import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation, SimpleChanges } from '@angular/core';
import videojs from 'video.js';
import {Oplm} from '../oplm';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  @Input() oplm: Oplm;
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      responsive: true,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // instantiate Video.js
    
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady');
    });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}
}