import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Профиль',
      url: '/profile',
      icon: 'home'
    },
    {
      title: 'Мои счетчики',
      url: '/shetmy',
      icon: 'home'
    },
    {
      title: 'Показание счетчиков',
      url: '/shetpokaza',
      icon: 'home'
    },
    {
      title: 'Моя управляющая',
      url: '/moyuk',
      icon: 'home'
    },
    {
      title: 'Прайс на услуги',
      url: '/priceulug',
      icon: 'home'
    },
    {
      title: 'Прайс услуги эконом',
      url: '/priceulugikonom',
      icon: 'home'
    },
    {
      title: 'Экстренные службы',
      url: '/slyzby',
      icon: 'home'
    },
    {
      title: 'Мои заявки',
      url: '/myzayvk',
      icon: 'home'
    },
    {
      title: 'Новости ЖКХ',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Новости компании',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Инструкция',
      url: '/help',
      icon: 'home'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      //this.splashScreen.hide();
      this.authService.getToken();
    });
  }
  // When Logout Button is pressed 
  logout() {
    //Api Token Logout
    localStorage.clear();
  }
  }