import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../commons/components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'music', component: MusicComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
