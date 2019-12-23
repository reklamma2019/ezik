import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Slyzby } from 'src/app/models/slyzby';
@Component({
  selector: 'app-slyzby',
  templateUrl: './slyzby.page.html',
  styleUrls: ['./slyzby.page.scss'],
})
export class SlyzbyPage implements OnInit {
  slyzby: Slyzby;
  constructor(private menu: MenuController, private authService: AuthService) { 
    this.menu.enable(true);
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.authService.slyzby().subscribe(
      slyzby => {
        this.slyzby = slyzby;
      }
    );
  }
}