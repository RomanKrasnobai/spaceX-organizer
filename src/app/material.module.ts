import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

const mat = [
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule
];

@NgModule({
    imports: [...mat],
    exports: [...mat],
})
export class MaterialModule { }
