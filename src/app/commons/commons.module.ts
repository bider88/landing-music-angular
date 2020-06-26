import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { ComponentsMaterial } from '../components.material';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

const componentsCommons = [
  LandingComponent
];

@NgModule({
  declarations: [
    ...componentsCommons
  ],
  exports: [
    ...componentsCommons
  ],
  imports: [
    CommonModule,
    ComponentsMaterial,
    LayoutModule,
    RouterModule
  ]
})
export class CommonsModule { }
