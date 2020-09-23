import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {LeftMenuComponent} from './left-menu/left-menu.component';


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
})
export class HomeModule { }
