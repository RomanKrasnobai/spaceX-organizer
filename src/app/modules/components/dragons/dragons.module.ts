import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsComponent } from './dragons.component';
import {MaterialModule} from '../../../material.module';



@NgModule({
  declarations: [DragonsComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DragonsModule { }
