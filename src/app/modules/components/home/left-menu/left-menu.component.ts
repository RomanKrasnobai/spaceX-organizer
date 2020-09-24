import { Component, OnInit} from '@angular/core';
import {SaveFavouriteRocketService} from '../../../../shared/services/save-favourite-rocket.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  storageValue: object | string;
  navigation = [
    { title: 'Home', link: '/home' },
    { title: 'Rockets', link: '/rockets' },
    { title: 'Capsules', link: '/capsules' },
    { title: 'Dragons', link: '/dragons' },
  ];

  constructor(private saveFavouriteRocketService: SaveFavouriteRocketService) { }

  ngOnInit(): void {
    this.saveFavouriteRocketService.sharedRocket$
      .subscribe(value => this.storageValue = value?.length || 'No rockets');
  }

}
