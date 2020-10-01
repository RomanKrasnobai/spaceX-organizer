import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const mat = [
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressSpinnerModule,
];

@NgModule({
    imports: [...mat],
    exports: [...mat],
})
export class MaterialModule { }
