import { NgModule } from "@angular/core";
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


const mat = [
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
];

@NgModule({
    imports: [...mat],
    exports: [...mat],
})
export class MaterialModule { }