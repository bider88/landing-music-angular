import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';

import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';
import { ComponentsMaterial } from '../components.material';

// Components
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    CommonsModule,
    ComponentsMaterial,
    RouterModule
  ]
})
export class MusicModule { }
