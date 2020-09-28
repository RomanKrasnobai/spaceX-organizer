import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RocketsInterface} from '../../../shared/models/rockets.interface';

@Component({
  selector: 'app-favourite-rockets-modal',
  templateUrl: './favourite-rockets-modal.component.html',
  styleUrls: ['./favourite-rockets-modal.component.scss']
})
export class FavouriteRocketsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RocketsInterface[]) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
