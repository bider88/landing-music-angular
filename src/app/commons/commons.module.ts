import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { CommonModules } from '../commons.modules';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

const componentsCommons = [
  LandingComponent
];

@NgModule({
  declarations: [
    ...componentsCommons,
    LoaderComponent
  ],
  exports: [
    ...componentsCommons
  ],
  imports: [
    CommonModule,
    CommonModules,
    LayoutModule,
    RouterModule
  ]
})
export class CommonsModule { }
