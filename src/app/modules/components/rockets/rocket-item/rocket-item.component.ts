import { Component, OnInit, OnDestroy } from '@angular/core';
import { RocketsService } from 'src/app/shared/services/rockets.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SaveFavouriteRocket } from 'src/app/shared/services/save-favourite-rocket.service';

@Component({
  selector: 'app-rocket-item',
  templateUrl: './rocket-item.component.html',
  styleUrls: ['./rocket-item.component.scss']
})
export class RocketItemComponent implements OnInit, OnDestroy {
  rocketInfo;
  ngOnDestroy$ = new Subject();
  constructor(
    private rocketsService: RocketsService,
    private saveFavouriteRocket: SaveFavouriteRocket,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.rocketsService.getRocketById(param.id).pipe(
        takeUntil(this.ngOnDestroy$),
        tap(data => this.rocketInfo = data)
      ).subscribe();
    });
  }
  saveToFavourite() {
    localStorage.setItem('favourite', JSON.stringify([this.rocketInfo]));
    // this.saveFavouriteRocket.sharedRocket.subscribe(rocket => this.sharedRocket = rocket);
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next(true);
    this.ngOnDestroy$.complete();
  }
}
