import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { RocketsComponent } from './modules/components/rockets/rockets.component';
import { DragonsComponent } from './modules/components/dragons/dragons.component';
import { RocketItemComponent } from './modules/components/rockets/rocket-item/rocket-item.component';
import {CapsulesComponent} from './modules/components/capsules/capsules.component';
import {LaunchesComponent} from "./modules/components/launches/launches.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rockets',
    component: RocketsComponent
  },
  {
    path: 'rockets/:id',
    component: RocketItemComponent
  },
  {
    path: 'dragons',
    component: DragonsComponent
  },
  {
    path: 'capsules',
    component: CapsulesComponent
  },
  {
    path: 'launches',
    component: LaunchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
