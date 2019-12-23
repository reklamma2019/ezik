import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
  }
];

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    AlertController,
    IonicModule,
  ],
  declarations: [
  ],
})
export class RegisterPageModule {}
