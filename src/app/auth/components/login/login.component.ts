import { Component } from '@angular/core';
import { AuthAbstract } from '../../abstract/auth-abstract';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthAbstract {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  buildForm(): void {
    this.authForm = this.fb.group({
      email: ['juanito@test.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });
  }

  authUser(): void {
    if (this.authForm.valid) {
      this.loading = true;
      const user: UserModel = { ...this.authForm.value } as UserModel;
      const subscription = this.authService.loginUser(user).subscribe(
        () => {
          this.router.navigate(['/home']);
          this.loading = false;
        }, error => {
          console.error(error);
          this.loading = false;
        }
      );
      this.subscriptions.push(subscription);
    }
  }

}
