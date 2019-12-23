import { Component, OnInit } from '@angular/core';
import { FormBuilder,
		FormGroup,
		Validators }			from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Api } from '../../providers/providers';

@Component({
  selector: 'app-odn',
  templateUrl: './odn.page.html',
  styleUrls: ['./odn.page.scss'],
})
export class OdnPage {
	loginForm: FormGroup;
	baseTotal: string = '0';
	fieldsName: Array<string> = ['uslugi_id'];

	ulugii: Array<any> = [];

	constructor(
		public formBuilder: FormBuilder,
		private toastController: ToastController,
		private api: Api
	) {
		let self = this;
		self.loginForm = formBuilder.group({
			uslugi_id: [{
				id: 0
			}],
		//	price_ikon:[],
           // hours: ["0"],
		   data_vyp: [moment().format('DD/MM/YYYY HH:mm')],
            //date: [moment().toISOString()],
           // payment: ["0"]
        });
	}
	ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
			self.api.getOdn()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
					self.ulugii = response;
					self.ulugii.unshift({
						usluginame: "Выберите значение",
						id: 0				
					});
					self.loginForm.controls.uslugi_id.setValue(self.ulugii[0]);
				});
			});
		});
	}
	save(){
		let self = this,
			error: string = '',
			values = self.loginForm.getRawValue();
		console.log('values = ', values);
		if(values.uslugi_id.id == 0 ) {
			error+='Выберите услугу. ';
		}
		if(!error.length) {
			let params: any = {
				uslugi_id: values.uslugi_id.id,
				//hours: values.hours,
				data_vyp: values.data_vyp,
				/*oplata_id: values.payment*/
			};
			console.log('todo send data ', params);
			self.api.showMask()
			.then(() => {
				self.api.sendZayavka(params)
				.then((response: any) => {
					self.api.hideMask()
					.then(() => {
						if(response.status) {
							self.loginForm.controls.uslugi_id.setValue(self.ulugii[0]);
						    self.loginForm.controls.data_vyp.setValue(moment().format('DD/MM/YYYY HH:mm'));
							self.showError('Ваша заявка успешно отправлена.');						
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
	async showError(text: string) {
		let self = this;
		const toast = await self.toastController.create({
			message: text,
			duration: 3000
		});
		toast.present();
	}
}
