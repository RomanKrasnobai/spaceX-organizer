import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/components/home/home.module';
import { RocketsModule } from './modules/components/rockets/rockets.module';
import { DragonsModule } from './modules/components/dragons/dragons.module';
import {CapsulesModule} from './modules/components/capsules/capsules.module';
import {FavouriteRocketsModalModule} from './modules/components/favourite-rockets-modal/favourite-rockets-modal.module';
import {LaunchesModule} from "./modules/components/launches/launches.module";


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
    CapsulesModule,
    FavouriteRocketsModalModule,
    LaunchesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
