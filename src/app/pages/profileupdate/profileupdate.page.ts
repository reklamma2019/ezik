import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,Validators, ReactiveFormsModule}	from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { Api, ToastNotify } from '../../providers/providers';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { DadataConfig, DadataType, DadataSuggestion, DadataAddress } from '@kolkov/ngx-dadata';
import {
    AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.page.html',
  styleUrls: ['./profileupdate.page.scss'],
})
export class ProfileupdatePage {
	config: DadataConfig = {
		apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
		type: DadataType.address,
		locations: [
			{
				region: 'Пензенская',
				city: 'Пенза',
			}        
		]     
	  };
	events: any;
	  onAddressSelected(event: DadataSuggestion) {
		const addressData = event.data as DadataAddress;
		console.log(addressData);
	  }
  loginForm: FormGroup;
  total: any;
  user: User;

	constructor(
    private authService: AuthService,
		public formBuilder: FormBuilder,
		private toastController: ToastController,
		private api: Api,
		private navCtrl: NavController,
		public alertController: AlertController,
		public toastNotify: ToastNotify,
	) {
		let self = this;
		self.loginForm = formBuilder.group({
		phone: ['', Validators.required],
    username:['', Validators.required],
	adress_fakt: [],
	lastname: [],
	patronymic: [],
	kv: [],
	uk: [],
	email: [],
	numberhouse: [],
	smspodpiska: [],
	password: [],
	epodpiska: [],

        });
  }
  ionViewWillEnter() {
    let self = this;
	this.authService.user().subscribe(
      user => {
        this.user = user;
		self.loginForm.controls.phone.setValue(user.phone);
		self.loginForm.controls.lastname.setValue(user.lastname);
		self.loginForm.controls.patronymic.setValue(user.patronymic);
		self.loginForm.controls.username.setValue(user.username);
		self.loginForm.controls.adress_fakt.setValue(user.adress_fakt);
		self.loginForm.controls.kv.setValue(user.kv);
		self.loginForm.controls.uk.setValue(user.uk.username);
		self.loginForm.controls.email.setValue(user.email);
		self.loginForm.controls.numberhouse.setValue(user.numberhouse);
		self.loginForm.controls.smspodpiska.setValue(user.smspodpiska);
		self.loginForm.controls.password.setValue(user.password);
		self.loginForm.controls.epodpiska.setValue(user.epodpiska);
	  }
	);
  }
	
	save(){
		let self = this,
			error: string = '',
			values = self.loginForm.getRawValue();
		console.log('values = ', values);
		if(!error.length) {
			let params: any = {
		username:  values.username,
		password: values.password,
		lastname: values.lastname,
		patronymic: values.patronymic,
        phone:  values.phone,
		adress_fakt:  values.adress_fakt,
		kv: values.kv,
		email: values.email,
		numberhouse: values.numberhouse,
			};
			console.log('todo send data ', params);
			self.api.showMask()
			.then(() => {
				self.api.updateProfile(params)
				.then((response: any) => {
					self.api.hideMask() 
					.then(() => {
						if(response.status) {
							self.loginForm.controls.phone.setValue("");
		                    self.loginForm.controls.lastname.setValue("");
							self.loginForm.controls.patronymic.setValue("");
							self.loginForm.controls.adress_fakt.setValue("");
							self.loginForm.controls.username.setValue("");
							self.loginForm.controls.kv.setValue("");
							self.loginForm.controls.uk.setValue("");
							self.loginForm.controls.email.setValue("");
							self.loginForm.controls.numberhouse.setValue("");
							self.loginForm.controls.smspodpiska.setValue("");
							self.loginForm.controls.password.setValue("");						
						}
					});
				});
			});
			this.navCtrl.navigateRoot('/profilefinish');
		} else {
			self.showError(error);
		}
	}
	async showError(text: string) {
		let self = this;
		const toast = await self.toastController.create({
			message: text,
			duration: 3000
		});
		toast.present();
	}
}
