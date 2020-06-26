import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule
];

const commonModules = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    ...materialModules,
    ...commonModules
  ],
  exports: [
    ...materialModules,
    ...commonModules
  ]
})
export class CommonModules { }
