import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxDadataModule } from '@kolkov/ngx-dadata';
import { IonicModule } from '@ionic/angular';
import { ProfileupdatePage } from './profileupdate.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    NgxDadataModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileupdatePage]
})
export class ProfileupdatePageModule {}
