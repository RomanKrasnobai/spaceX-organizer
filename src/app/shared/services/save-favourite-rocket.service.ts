import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SaveFavouriteRocket {
    private rocket = new Subject();
    sharedRocket = this.rocket.asObservable();

    constructor() { }

    nextRocket(rocket) {
        this.rocket.next(rocket);
    }
}
