import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,Validators }	from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Api, ToastNotify } from '../../providers/providers';
import {
    ModalController,
    AlertController
} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-shet',
  templateUrl: './shet.page.html',
  styleUrls: ['./shet.page.scss'],
})
export class ShetPage {
	addshetForm: FormGroup;
	total: any;
	fieldsName: Array<string> = ['data_instal', 'data_poverkend', 'typeshetchik_id'];
  type: Array<any> = [];
  typename: string;
  number: string;

	constructor(
		public formBuilder: FormBuilder,
		private toastController: ToastController,
		private api: Api,
		public alertController: AlertController,
		public toastNotify: ToastNotify,
	) {
		let self = this;
		self.addshetForm = formBuilder.group({
    number: [],
		data_instal:[moment().format('DD/MM/YYYY')],
    data_poverkend: [],
    typeshetchik_id: [{
      id: 0
    }],
        });
	}
	ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
			self.api.getType()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
					self.type = response;
					self.type.unshift({
            typename: "Выберите значение",
            id: 0				
					});
					self.addshetForm.controls.typeshetchik_id.setValue(self.type[0]);
				});
			});
		});
	}
	save(){
		let self = this,
			error: string = '',
			values = self.addshetForm.getRawValue();
		console.log('values = ', values);
    if(values.typeshetchik_id.id == 0 ) {
			error+='Выбирите тип счетчика.';
    }
    if(values.number == null ) {
			error+='Введите № счетчика.';
    }
		if(!error.length) {
			let params: any = {
    typeshetchik_id: values.typeshetchik_id.id,
    number: values.number,
    data_instal:values.data_instal,
			};
			console.log('todo send data ', params);
			self.api.showMask()
			.then(() => {
				self.api.sendShet(params)
				.then((response: any) => {
					self.api.hideMask()
					.then(() => {
						if(response.status) {
							self.addshetForm.controls.typeshetchik_id.setValue(self.type[0]);
              self.addshetForm.controls.data_instal.setValue(moment().format('DD/MM/YYYY'));
              self.showError('Ваша заявка успешно отправлена.');					
						} else {
							//self.showError(response.errorMessage);//TODO выставить правильный параметр из ответа
						}
					});
				});
      });
			self.toastNotify.success('Ваша заявка отправлена.');
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
