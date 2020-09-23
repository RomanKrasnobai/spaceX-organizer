import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsComponent } from './rockets.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowByDatePipe } from 'src/app/shared/pipes/show-by-date.pipe';
import { RouterModule } from '@angular/router';
import { RocketItemComponent } from './rocket-item/rocket-item.component';


@NgModule({
  declarations: [
    RocketsComponent,
    ShowByDatePipe,
    RocketItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class RocketsModule { }
