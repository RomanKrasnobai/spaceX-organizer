import {Component, OnInit} from '@angular/core';
import {SaveFavouriteRocketService} from '../../../../shared/services/save-favourite-rocket.service';
import {NavigationInterface} from '../../../../shared/models/navigation.interface';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FavouriteRocketsModalComponent} from '../../favourite-rockets-modal/favourite-rockets-modal.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  storageValue: object | string;
  navigation: NavigationInterface[] = [
    { title: 'Home', link: '/home' },
    { title: 'Rockets', link: '/rockets' },
    { title: 'Capsules', link: '/capsules' },
    { title: 'Dragons', link: '/dragons' },
  ];

  constructor(
    private saveFavouriteRocketService: SaveFavouriteRocketService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.saveFavouriteRocketService.sharedRocket$
      .subscribe(value => this.storageValue = value || 'No rockets');
  }

  openFavouriteModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '300px';
    dialogConfig.data = this.storageValue;
    this.dialog.open(FavouriteRocketsModalComponent, dialogConfig);
  }
}
