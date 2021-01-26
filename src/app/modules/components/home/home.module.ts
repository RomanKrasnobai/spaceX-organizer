import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {FavouriteRocketsModalComponent} from '../modal-windows/favourite-rockets-modal/favourite-rockets-modal.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from '../../../shared/interceptors/http-error.interceptor';


@NgModule({
  declarations: [
    HomeComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    LeftMenuComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  entryComponents: [FavouriteRocketsModalComponent],
})
export class HomeModule { }
