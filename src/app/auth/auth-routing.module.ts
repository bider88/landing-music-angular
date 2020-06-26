import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
