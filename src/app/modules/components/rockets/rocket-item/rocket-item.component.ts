import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {RocketsService} from 'src/app/shared/services/rockets.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SaveFavouriteRocketService} from 'src/app/shared/services/save-favourite-rocket.service';
import {RocketInterface} from '../../../../shared/models/rocket.interface';
import {AlertMessageService} from '../../../../shared/services/alert-message.service';

@Component({
  selector: 'app-rocket-item',
  templateUrl: './rocket-item.component.html',
  styleUrls: ['./rocket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketItemComponent implements OnInit, OnDestroy {
  rocketInfo: RocketInterface | any;
  isHiddenFavouriteIcon = false;
  storage = JSON.parse(localStorage.getItem('favourite'));
  private ngOnDestroy$: Subject<null> = new Subject<null>();
  alertMessage: string;

  constructor(
    private rocketsService: RocketsService,
    private saveFavouriteRocketService: SaveFavouriteRocketService,
    private activatedRoute: ActivatedRoute,
    private alertMessageService: AlertMessageService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.rocketsService.getRocketById(param.id).pipe(
        takeUntil(this.ngOnDestroy$),
      ).subscribe(data => {
        this.rocketInfo = data;
        this.cdr.detectChanges();
        for (let i = 0; i < this.storage?.length; i++) {
          if (this.storage[i].id === this.rocketInfo.id) {
            this.isHiddenFavouriteIcon = true;
            break;
          } else {
            this.isHiddenFavouriteIcon = false;
          }
        }
      });
    });

    this.alertMessageService.sharedAlertMessage
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(message => this.alertMessage = message);
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  saveToFavourite(): void {
    this.saveFavouriteRocketService.saveToLocalStorage(this.rocketInfo);
    if (!this.saveFavouriteRocketService.isExistRocketInStorage) {
      this.isHiddenFavouriteIcon = true;
    }
    this.alertMessageService.nextMessage(this.alertMessageService.messages.safe);
  }

  removeFromFavourite(id): void {
    this.saveFavouriteRocketService.removeFromFavouriteStorage(id);
    this.isHiddenFavouriteIcon = false;
    this.alertMessageService.nextMessage(this.alertMessageService.messages.remove);
  }
}
