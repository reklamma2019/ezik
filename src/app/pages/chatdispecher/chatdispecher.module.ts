import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatdispecherPage } from './chatdispecher.page';

const routes: Routes = [
  {
    path: '',
    component: ChatdispecherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatdispecherPage]
})
export class ChatdispecherPageModule {}
