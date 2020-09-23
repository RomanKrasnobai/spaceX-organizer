import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SaveFavouriteRocketService {
  private rocket = new BehaviorSubject(JSON.parse(localStorage.getItem('favourite')));
  sharedRocket$ = this.rocket.asObservable();
  storageArr = [];
  constructor() { }

  saveToLocalStorage(data) {
    if (localStorage.getItem('favourite')) {
      this.storageArr = JSON.parse(localStorage.getItem('favourite'));
      this.storageArr.push(data);
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
      this.nextRocket(data);
    } else {
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
      this.storageArr.push(data);
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
      this.nextRocket(data);
    }
  }

  nextRocket(rocket) {
    this.rocket.next(rocket);
  }
}
