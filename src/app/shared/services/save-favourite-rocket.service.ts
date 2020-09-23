import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SaveFavouriteRocket {
  private rocket = new Subject();
  sharedRocket = this.rocket.asObservable();
  storageArr = [];
  constructor() { }

  saveToLocalStorage(data) {
    if (localStorage.getItem('favourite')) {
      this.storageArr = JSON.parse(localStorage.getItem('favourite'));
      this.storageArr.push(data);
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
    } else {
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
      this.storageArr.push(data);
      localStorage.setItem('favourite', JSON.stringify(this.storageArr));
    }
  }

  nextRocket(rocket) {
    this.rocket.next(rocket);
  }
}
