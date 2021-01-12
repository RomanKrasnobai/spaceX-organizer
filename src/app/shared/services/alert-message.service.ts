import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AlertMessageInterface} from '../models/alert-message.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  messages: AlertMessageInterface = {
    safe: 'Safe to favourite',
    remove: 'Remove from favourite'
  };

  private alertMessage = new BehaviorSubject<string>('');
  sharedAlertMessage = this.alertMessage.asObservable();

  constructor() { }

  nextMessage(message) {
    this.alertMessage.next(message);
  }
}
