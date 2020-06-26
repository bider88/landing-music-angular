import { Component } from '@angular/core';
import { AuthAbstract } from '../../abstract/auth-abstract';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthAbstract {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    super();
  }

  buildForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  authUser(): void {
    if (this.authForm.valid) {
      // const user: UserInterface = { ...this.authForm.value } as UserInterface;
      // const subscription = this.authService.loginUser(user).subscribe(
      //   () => {
      //     this.router.navigate(['/home']);
      //     this.stopLoading();
      //   }, error => {
      //     this.toastService.showError({
      //       title: AN_ERROR_HAS_OCURRED,
      //       message: firebaseMessages(error)
      //     });
      //     this.stopLoading();
      //   }
      // );
      // this.subscriptions.push(subscription);
    }
  }

}
