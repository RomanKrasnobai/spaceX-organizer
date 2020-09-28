import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SaveFavouriteRocketService {
  favouriteStorageKey = 'favourite';
  private rocket = new BehaviorSubject(JSON.parse(localStorage.getItem(this.favouriteStorageKey)));
  sharedRocket$ = this.rocket.asObservable();
  storageArr = [];
  isExistRocketInStorage: boolean;

  constructor() { }

  saveToLocalStorage(data) {
    if (localStorage.getItem(this.favouriteStorageKey)) {
      this.storageArr = JSON.parse(localStorage.getItem(this.favouriteStorageKey));
      this.isExistedRocket(this.storageArr, data);
      if (this.isExistRocketInStorage) {
        return;
      } else {
        this.storageArr.push(data);
        localStorage.setItem(this.favouriteStorageKey, JSON.stringify(this.storageArr));
        this.addNextRocket(this.storageArr);
      }
    } else {
      localStorage.setItem(this.favouriteStorageKey, JSON.stringify(this.storageArr));
      this.isExistedRocket(this.storageArr, data);
      this.storageArr.push(data);
      localStorage.setItem(this.favouriteStorageKey, JSON.stringify(this.storageArr));
      this.addNextRocket(this.storageArr);
    }
  }

  private isExistedRocket(storage, obj) {
    storage.forEach(el => {
      this.isExistRocketInStorage = el.id === obj.id;
    });
  }

  addNextRocket(rocket) {
    this.rocket.next(rocket);
  }
}
