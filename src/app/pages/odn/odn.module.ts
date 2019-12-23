import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OdnPage } from './odn.page';

const routes: Routes = [
  {
    path: '',
    component: OdnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OdnPage]
})
export class OdnPageModule {}
