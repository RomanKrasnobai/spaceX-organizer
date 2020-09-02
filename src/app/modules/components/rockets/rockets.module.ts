import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsComponent } from './rockets.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowByDatePipe } from 'src/app/shared/pipes/show-by-date.pipe';



@NgModule({
  declarations: [RocketsComponent,ShowByDatePipe],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RocketsModule { }
