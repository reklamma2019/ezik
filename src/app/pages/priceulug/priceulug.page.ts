import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import {Ulugi} from 'src/app/models/ulugi';
@Component({
  selector: 'app-priceulug',
  templateUrl: './priceulug.page.html',
  styleUrls: ['./priceulug.page.scss'],
})
export class PriceulugPage implements OnInit {
  ulugi: Ulugi;
  constructor(private menu: MenuController, private authService: AuthService) { 
    this.menu.enable(true);
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.authService.ulugi().subscribe(
      ulugi => {
        this.ulugi = ulugi;
      }
    );
  }
}