import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZayvkaikonomPage } from './zayvkaikonom.page';

const routes: Routes = [
  {
    path: '',
    component: ZayvkaikonomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZayvkaikonomPage]
})
export class ZayvkaikonomPageModule {}

