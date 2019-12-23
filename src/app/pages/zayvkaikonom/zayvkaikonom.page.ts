import { Component, OnInit } from '@angular/core';
import { FormBuilder,
		FormGroup,
		Validators }			from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Api } from '../../providers/providers';
@Component({
	selector: 'app-zayvkaikonom',
	templateUrl: './zayvkaikonom.page.html',
	styleUrls: ['./zayvkaikonom.page.scss'],
})
export class ZayvkaikonomPage {
	loginForm: FormGroup;
	baseTotal: string = 'Выберите услугу и время.';
	baseFakt: string = 'Цена будет определена по факту работ.';
	total: any;
	usluginame: string;
	payment: any;

	fieldsName: Array<string> = ['uslugi_id', 'hours', 'date', 'price_ikon'];
	segmentChanged(event) {
		this.payment = event;
	  }
	ulugii: Array<any> = [];

	constructor(
		public formBuilder: FormBuilder,
		private toastController: ToastController,
		private api: Api
	) {
		this.payment = "1";
		let self = this;
		self.total = self.baseTotal;
		self.loginForm = formBuilder.group({
			uslugi_id: [{
				id: 0
			}],
			hours: ["0"],
            data_vyp: [moment().format('DD/MM/YYYY HH:mm')],
           // date: [moment().toISOString()],
		   payment: ["1"],
		   total: []
        });
	}
	ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
			self.api.getUslugii()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
					self.ulugii = response;
					self.ulugii.unshift({
						usluginame: "Выберите значение",
						id: 0				
					});
					self.loginForm.controls.uslugi_id.setValue(self.ulugii[0]);
					self.calculate();
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
			error+='Выберите специалиста. ';
		}
		if(values.hours == 0 ) {
			error+='Выберите время. ';
		}
		if(values.payment == 0 ) {
			error+='Выберите способ оплаты. ';
		}
		if(!error.length) {
			let params: any = {
				uslugi_id: values.uslugi_id.id,
				/*hours: values.hours,*/
				data_vyp: values.data_vyp,
				oplata_id: values.payment,
				hours: values.hours,
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
							self.loginForm.controls.hours.setValue("0");
							self.loginForm.controls.data_vyp.setValue(moment().format('DD/MM/YYYY HH:mm'));
							self.loginForm.controls.payment.setValue("1");
							self.calculate();
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
	calculate(){
		let self = this,
			values = self.loginForm.getRawValue();
		if(values.uslugi_id.id == 0 || values.hours == 0) {
			self.total = self.baseTotal;
		} else {
			if(values.hours == 'fakt') {
				self.total = self.baseFakt;
			} else {
				self.total = (Number(values.uslugi_id.price_ikon) * (Number(values.hours))) + ' руб.';
			}
		}
	}
}
