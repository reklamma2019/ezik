import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {Ulugii} from 'src/app/models/ulugii';
@Component({
  selector: 'app-priceulugikonom',
  templateUrl: './priceulugikonom.page.html',
  styleUrls: ['./priceulugikonom.page.scss'],
})
export class PriceulugikonomPage implements OnInit {
  ulugii: Ulugii;
  constructor(private menu: MenuController, private authService: AuthService) { 
    this.menu.enable(true);
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.authService.ulugii().subscribe(
      ulugii => {
        this.ulugii = ulugii;
      }
    );
  }
}