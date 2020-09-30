import { Component, OnInit, OnDestroy } from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SaveFavouriteRocketService } from 'src/app/shared/services/save-favourite-rocket.service';
import { RocketInterface } from '../../../../shared/models/rocket.interface';

@Component({
  selector: 'app-rocket-item',
  templateUrl: './rocket-item.component.html',
  styleUrls: ['./rocket-item.component.scss']
})
export class RocketItemComponent implements OnInit, OnDestroy {
  rocketInfo: RocketInterface | any;
  isHiddenFavouriteIcon = false;
  ngOnDestroy$ = new Subject();
  storage = JSON.parse(localStorage.getItem('favourite'));

  constructor(
    private rocketsService: RocketsService,
    private saveFavouriteRocket: SaveFavouriteRocketService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.rocketsService.getRocketById(param.id).pipe(
        takeUntil(this.ngOnDestroy$),
        tap(data => {
          this.rocketInfo = data;
          for (let i = 0; i < this.storage?.length; i++) {
             if (this.storage[i].id === this.rocketInfo.id) {
               this.isHiddenFavouriteIcon = true;
               break;
             } else {
               this.isHiddenFavouriteIcon = false;
             }
          }
        })
      ).subscribe();
    });
  }

  saveToFavourite() {
    this.saveFavouriteRocket.saveToLocalStorage(this.rocketInfo);
    if (!this.saveFavouriteRocket.isExistRocketInStorage) {
      this.isHiddenFavouriteIcon = true;
    }
  }

  removeFromFavourite(id) {
    this.saveFavouriteRocket.removeFromFavouriteStorage(id);
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }
}
