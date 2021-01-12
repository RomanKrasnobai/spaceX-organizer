import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {CapsulesComponent} from './capsules.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    CapsulesComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class CapsulesModule { }
