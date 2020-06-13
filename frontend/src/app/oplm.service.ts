import { Injectable } from '@angular/core';
import {Oplm} from './oplm';
import {Oplms} from './mock-oplms'
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OplmService {

  constructor(private messageService: MessageService) { }

  getOplms(): Observable<Oplm[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Fetching Learning Resources');
    return of(Oplms);
  }
}
