import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [LaunchesComponent],
    imports: [
        CommonModule,
        MaterialModule,
    ]
})
export class LaunchesModule { }
