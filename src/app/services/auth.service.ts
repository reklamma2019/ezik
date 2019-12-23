import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import {Ulugii} from '../models/ulugii';
import {Ulugi} from '../models/ulugi';
import {Dop} from '../models/dop';
import {Slyzby} from '../models/slyzby';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  isLoggedIn = false;
  token:any;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private platform: Platform
  ) {
    let self = this;
    self.platform.ready()
    .then(() => {
      if(self.platform.is('cordova')) {
        this.storage.getItem('token')
        .then((token) => {
          self.token = token;
        });
      } else {
        self.token = JSON.parse((<any>window).localStorage.getItem('token'));
      }
    });
  }
  login(phone: String, password: String) {
  let self = this;
    return this.http.post(this.env.API_URL + 'auth',
      {phone: phone, password: password}
    ).pipe(
      tap(token => {
        if(self.platform.is('cordova')) {
          this.storage.setItem('token', token)
          .then(
            () => {
              console.log('Token Stored');
            },
            error => console.error('Error storing item', error)
          );
        } else {
          (<any>window).localStorage.setItem('token', JSON.stringify(token));
        }
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  user() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+" "+this.token["token"]
    });
    return this.http.get<User>(this.env.API_URL + 'user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  ulugii() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+" "+this.token["token"]
    });
    return this.http.get<Ulugii>(this.env.API_URL + 'ulugii', { headers: headers })
    .pipe(
      tap(ulugii => {
        return ulugii;
      })
    )
  }
  dop() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+" "+this.token["token"]
    });
    return this.http.get<Dop>(this.env.API_URL + 'dop', { headers: headers })
    .pipe(
      tap(dop => {
        return dop;
      })
    )
  }
  slyzby(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+" "+this.token["token"]
    });
    return this.http.get<Slyzby>(this.env.API_URL + 'services', { headers: headers })
    .pipe(
      tap(slyzby => {
        return slyzby;
      })
    )
  }
  ulugi() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer'+" "+this.token["token"]
    });
    return this.http.get<Ulugi>(this.env.API_URL + 'ulugi', { headers: headers })
    .pipe(
      tap(ulugi => {
        return ulugi;
      })
    )
  }
  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
