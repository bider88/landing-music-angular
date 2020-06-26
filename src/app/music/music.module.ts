import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';

import { CommonsModule } from '../commons/commons.module';
import { RouterModule } from '@angular/router';
import { CommonModules } from '../commons.modules';

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
    CommonModules,
    RouterModule
  ]
})
export class MusicModule { }
