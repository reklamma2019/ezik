import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShetpokazaPage } from './shetpokaza.page';

const routes: Routes = [
  {
    path: '',
    component: ShetpokazaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShetpokazaPage]
})
export class ShetpokazaPageModule {}
