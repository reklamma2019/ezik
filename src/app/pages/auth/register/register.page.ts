import { Component} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule}	from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Api, ToastNotify } from 'src/app//providers/providers';
import { DadataConfig, DadataType, DadataSuggestion, DadataAddress } from '@kolkov/ngx-dadata';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  loginForm: FormGroup;
	total: any;
	fieldsName: Array<string> = ['username', 'phone'];
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
	  onAddressSelected(event: DadataSuggestion) {
		const addressData = event.data as DadataAddress;
		console.log(addressData);
	  };
  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
		private toastController: ToastController,
		private api: Api,
		public alertController: AlertController,
		public toastNotify: ToastNotify,
  ) {
		let self = this;
		self.loginForm = formBuilder.group({
    phone: ['', Validators.required],
    username:['', Validators.required],
    lastname: ['', Validators.required],
    kv: ['', Validators.required],
    numberhouse: ['', Validators.required],
    password: ['', Validators.required],
    adress_fakt: ['', Validators.required],
    agreement: ['', Validators.required]
        });
	}
  ngOnInit() {
  }
  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }

	save(){
		let self = this,
			error: string = '',
			values = self.loginForm.getRawValue();
		console.log('values = ', values);
		if(!error.length) {
			let params: any = {
		username:  values.username,
    phone:  values.phone,
    lastname: values.lastname,
    kv: values.kv,
    adress_fakt: values.adress_fakt,
    numberhouse: values.numberhouse,
    password: values.password,
			};
			console.log('todo send data ', params);
			self.api.hideMask()
			.then(() => {
				self.api.sendRegistrety(params)
				.then((response: any) => {
					self.api.hideMask()
					.then(() => {
						if(response.status) {
              self.loginForm.controls.username.setValue("");
              self.loginForm.controls.phone.setValue("");
              self.loginForm.controls.lastname.setValue("");		
              self.loginForm.controls.kv.setValue("");
              self.loginForm.controls.numberhouse.setValue("");
              self.loginForm.controls.password.setValue("");
              self.loginForm.controls.adress_fakt.setValue("");		
						} else {
							//self.showError(response.errorMessage);//TODO выставить правильный параметр из ответа
						}
					});
				});
			});
		} else {
			self.showError(error);
		}
  }
   async presentAlertMultipleButtons() {
    let self = this;
    const alert = await this.alertController.create({
      cssClass: 'pin-code-enter',
      header: 'Введите код потверждения.',
      message: 'Вам на номер телефона указанный при регистрации был отпралвен код потверждения. Пожалуйста, введите его в специальное поле.',
    inputs: [
      {
        name: 'ops_number',
        placeholder: 'КОД ПОТВЕРЖДЕНИЯ'
      },
     
    ],
    buttons: [
      {
        text: 'Отмена',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Потвердить',
        handler: (inputs) => {
          if(inputs.ops_number.length) {
            this.navCtrl.navigateRoot('/landing');
          } else {
            // invalid login
            return false;
          }
        }
      }
    ]
    });

    await alert.present();
  }
  async showError(text: string) {
		let self = this;
		const toast = await self.toastController.create({
			message: text,
			duration: 3000
		});
		toast.present();
	}
  };