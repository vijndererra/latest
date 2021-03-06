import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import {SharedModule} from '../shared/shared.module'
import{LoginRegistartinRoutingModule} from '../login-registration/login-registartin-routing/login-registartin-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { LoggedInServce } from './store/login.effects';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRegistartinRoutingModule,
    // EffectsModule.forFeature([LoggedInServce]),

  ]
})
export class LoginModule { }
