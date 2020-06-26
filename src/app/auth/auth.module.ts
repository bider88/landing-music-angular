import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { CommonModules } from '../commons.modules';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    CommonModules
  ]
})
export class AuthModule { }
