import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { RocketsComponent } from './modules/components/rockets/rockets.component';
import { DragonsComponent } from './modules/components/dragons/dragons.component';
import { RocketItemComponent } from './modules/components/rockets/rocket-item/rocket-item.component';


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
    path: 'rockets/rocket/:id',
    component: RocketItemComponent
  },
  {
    path: 'dragons',
    component: DragonsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
