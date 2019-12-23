import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorlistPageRoutingModule } from './authorlist-routing.module';

import { AuthorlistPage } from './authorlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorlistPageRoutingModule
  ],
  declarations: [AuthorlistPage]
})
export class AuthorlistPageModule {}
