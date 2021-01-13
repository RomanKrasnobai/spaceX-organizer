import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertMessageInterface } from '../models/alert-message.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  messages: AlertMessageInterface = {
    safe: 'Safe to favourite',
    remove: 'Remove from favourite'
  };

  private alertMessage: Subject<string> = new Subject<string>();
  sharedAlertMessage: Observable<string> = this.alertMessage.asObservable();

  nextMessage(message) {
    this.alertMessage.next(message);
  }
}
