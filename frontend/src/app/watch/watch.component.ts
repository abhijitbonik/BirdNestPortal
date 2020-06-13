import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {OplmService} from '../oplm.service'
import {Oplm} from '../oplm';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  selectedOplm: Oplm;
  oplms: Oplm[];

  constructor(private oplmService: OplmService, private messageService: MessageService) { }

  ngOnInit() {
    this.getOplms();
    this.getinitialOplms(this.oplms[0])
  }

  onSelect(oplm: Oplm): void {
    this.selectedOplm = oplm;
    this.messageService.add(`Selected Content=${oplm.name}`);
  }

  getOplms(): void {
    this.oplmService.getOplms()
        .subscribe(oplms => this.oplms = oplms);
  }

  getinitialOplms(oplm: Oplm): void {
    this.selectedOplm = oplm;
  }

}
