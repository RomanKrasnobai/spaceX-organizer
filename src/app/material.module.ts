import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


const mat = [
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
];

@NgModule({
    imports: [...mat],
    exports: [...mat],
})
export class MaterialModule { }
