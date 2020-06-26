import { FormGroup } from '@angular/forms';
import { OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

export abstract class AuthAbstract implements OnInit, OnDestroy {

  configLoader = {
    animationType: ngxLoadingAnimationTypes.circleSwish,
    primaryColour: '#ffffff',
    secondaryColour: '#ccc',
    backdropBorderRadius: '3px'
  };
  loadingTemplate: TemplateRef<any>;
  authForm: FormGroup;
  loading = false;
  subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public abstract buildForm(): void;
  public abstract authUser(): void;


  isValidFormControlName(control: string): boolean {
    return this.authForm.get(control).invalid && this.authForm.get(control).touched;
  }

}
