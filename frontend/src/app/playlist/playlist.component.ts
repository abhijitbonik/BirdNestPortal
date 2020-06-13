import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Oplm} from '../oplm';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  @Input() oplms: Oplm[];
  @Output() selectedOplmevent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  oplmevent(oplm: Oplm) {
    this.selectedOplmevent.emit(oplm);
  }

  
}
