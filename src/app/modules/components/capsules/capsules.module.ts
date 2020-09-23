import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {CapsulesComponent} from './capsules.component';

@NgModule({
  declarations: [
    CapsulesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class CapsulesModule { }
