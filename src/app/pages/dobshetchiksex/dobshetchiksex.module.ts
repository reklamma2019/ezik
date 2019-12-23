import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DobshetchiksexPage } from './dobshetchiksex.page';

const routes: Routes = [
  {
    path: '',
    component: DobshetchiksexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DobshetchiksexPage]
})
export class DobshetchiksexPageModule {}
