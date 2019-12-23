import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxDadataModule } from '@kolkov/ngx-dadata';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SelectModalComponent } from './modal/select-modal/select-modal.page';

import {
  Api,
  ToastNotify
} from './providers/providers';

@NgModule({
  declarations: [
    AppComponent,
    SelectModalComponent
  ],
  entryComponents: [
    SelectModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxDadataModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    ToastNotify,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
