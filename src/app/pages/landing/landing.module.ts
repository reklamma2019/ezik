import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxDadataModule } from '@kolkov/ngx-dadata';
import { LandingPage } from './landing.page';
import { LoginPage } from '../auth/login/login.page';
import { RegisterPage } from '../auth/register/register.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    NgxDadataModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

 declarations: [LandingPage, LoginPage, RegisterPage],
  entryComponents: [LoginPage, RegisterPage]
})
export class LandingPageModule {}
