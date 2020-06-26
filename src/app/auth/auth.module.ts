import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const componentsAuth = [
  LoginComponent,
  SignupComponent
];

@NgModule({
  declarations: [
    ...componentsAuth
  ],
  exports: [
    ...componentsAuth
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
