import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DopulugimenyPage } from './dopulugimeny.page';

const routes: Routes = [
  {
    path: '',
    component: DopulugimenyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DopulugimenyPage]
})
export class DopulugimenyPageModule {}
