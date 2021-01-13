import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SaveFavouriteRocketService} from '../../../../shared/services/save-favourite-rocket.service';
import {NavigationInterface} from '../../../../shared/models/navigation.interface';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FavouriteRocketsModalComponent} from '../../modal-windows/favourite-rockets-modal/favourite-rockets-modal.component';
import {RocketsInterface} from '../../../../shared/models/rockets.interface';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent implements OnInit, OnDestroy {
  storageValue: RocketsInterface[];
  navigation: NavigationInterface[] = [
    { title: 'Home', link: '/home' },
    { title: 'Rockets', link: '/rockets' },
    { title: 'Capsules', link: '/capsules' },
    { title: 'Dragons', link: '/dragons' },
    { title: 'Launches', link: '/launches' },
  ];
  private ngOnDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private saveFavouriteRocketService: SaveFavouriteRocketService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.saveFavouriteRocketService.sharedRocket$.pipe(
      takeUntil(this.ngOnDestroy$))
      .subscribe(value => {
        this.storageValue = value;
        this.cdr.detectChanges();
      });
  }
  ngOnDestroy() {
    this.ngOnDestroy$.next(null);
    this.ngOnDestroy$.complete();
  }

  trackByFn(index, item): string {
    return item.title;
  }

  openFavouriteModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '300px';
    dialogConfig.data = this.storageValue;
    this.dialog.open(FavouriteRocketsModalComponent, dialogConfig);
  }

  isFavourite(): string {
    return this.storageValue?.length ? 'Favourite rockets' : 'No favourite rockets yet';
  }
}
