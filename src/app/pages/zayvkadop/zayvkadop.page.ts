import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Dop } from 'src/app/models/dop';
@Component({
  selector: 'app-zayvkadop',
  templateUrl: './zayvkadop.page.html',
  styleUrls: ['./zayvkadop.page.scss'],
})
export class ZayvkadopPage implements OnInit {
  dop: Dop;
  constructor(private menu: MenuController, private authService: AuthService) { 
    this.menu.enable(true);
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.authService.dop().subscribe(
      dop => {
        this.dop = dop;
      }
    );
  }
}