import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RocketsInterface} from '../models/rockets.interface';

@Injectable({
    providedIn: 'root'
})
export class SaveFavouriteRocketService {
  favouriteStorageKey = 'favourite';
  private rocket = new BehaviorSubject(JSON.parse(localStorage.getItem(this.favouriteStorageKey)));
  sharedRocket$ = this.rocket.asObservable();
  storageArr: RocketsInterface[] = [];
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

  removeFromFavouriteStorage(id) {
    this.storageArr = JSON.parse(localStorage.getItem(this.favouriteStorageKey));
    if (id) {
      const index = this.storageArr.findIndex(elem => elem.id === id);
      if (index !== -1) {
        this.storageArr.splice(index, 1);
        localStorage.setItem(this.favouriteStorageKey, JSON.stringify(this.storageArr));
      }
    }
  }

  addNextRocket(rocket) {
    this.rocket.next(rocket);
  }
}
