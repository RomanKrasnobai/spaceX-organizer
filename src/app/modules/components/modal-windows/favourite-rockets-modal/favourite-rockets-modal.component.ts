import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {RocketsInterface} from '../../../../shared/models/rockets.interface';
import {RocketsService} from '../../../../shared/services/rockets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favourite-rockets-modal',
  templateUrl: './favourite-rockets-modal.component.html',
  styleUrls: ['./favourite-rockets-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteRocketsModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RocketsInterface[],
    private rocketsService: RocketsService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  trackByFn(index, item): number {
    return item.id;
  }

  selectRocket(rocket): void {
    this.router.navigate(['/rockets', rocket.rocket_id])
      .then(() => this.dialog.closeAll());
  }
}
