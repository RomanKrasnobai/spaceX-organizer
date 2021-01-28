import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {LeftMenuComponent} from '../left-menu/left-menu.component';
import {FavouriteRocketsModalComponent} from '../modal-windows/favourite-rockets-modal/favourite-rockets-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    LeftMenuComponent
  ],
  entryComponents: [FavouriteRocketsModalComponent],
})
export class HomeModule { }
