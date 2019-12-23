import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZayvkadopPage } from './zayvkadop.page';

const routes: Routes = [
  {
    path: '',
    component: ZayvkadopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZayvkadopPage]
})
export class ZayvkadopPageModule {}
