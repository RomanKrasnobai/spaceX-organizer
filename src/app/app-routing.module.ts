import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { RocketsComponent } from './modules/components/rockets/rockets.component';
import { DragonsComponent } from './modules/components/dragons/dragons.component';


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
    path: 'dragons',
    component: DragonsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
