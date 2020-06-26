import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsMaterial } from '../components.material';
import { LayoutModule } from '@angular/cdk/layout';

const componentsCommons = [
  NavbarComponent
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
    LayoutModule
  ]
})
export class CommonsModule { }
