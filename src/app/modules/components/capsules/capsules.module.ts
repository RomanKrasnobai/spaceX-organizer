import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {CapsulesComponent} from './capsules.component';
import { FiltersComponent } from './filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CapsulesComponent,
    FiltersComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
})
export class CapsulesModule { }
