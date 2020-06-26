import { Component } from '@angular/core';
import { AuthAbstract } from '../../abstract/auth-abstract';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends AuthAbstract {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  buildForm(): void {
    this.authForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  authUser(): void {
    if (this.authForm.valid) {
      this.loading = true;
      const user: UserModel = { ...this.authForm.value } as UserModel;
      const subscription = this.authService.createUser(user).subscribe(
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
