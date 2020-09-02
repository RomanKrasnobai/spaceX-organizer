import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { LeftMenuComponent } from './modules/components/home/left-menu/left-menu.component';
import { HomeModule } from './modules/components/home/home.module';
import { RocketsModule } from './modules/components/rockets/rockets.module';
import { DragonsModule } from './modules/components/dragons/dragons.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    RocketsModule,
    DragonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
