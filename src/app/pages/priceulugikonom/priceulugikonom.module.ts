import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PriceulugikonomPage } from './priceulugikonom.page';

const routes: Routes = [
  {
    path: '',
    component: PriceulugikonomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PriceulugikonomPage]
})
export class PriceulugikonomPageModule {}
