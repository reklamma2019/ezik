import { Component, OnInit } from '@angular/core';
import { FormBuilder,
	FormGroup,
	Validators, 
	NgFormSelectorWarning}			from '@angular/forms';
import {
	Api,
	ToastNotify
} from '../../providers/providers';
import { SelectModalComponent } from '../../modal/select-modal/select-modal.page';
import {
    ModalController,
    AlertController
} from '@ionic/angular';
import * as moment from 'moment';
import { count } from 'rxjs/operators';

@Component({
	selector: 'app-zayvka',
	templateUrl: './zayvka.page.html',
	styleUrls: ['./zayvka.page.scss'],
})
export class ZayvkaPage {
	loginForm: FormGroup;
	baseTotal: string = '0';
	selectedServices: Array<any> = [];
	allCategories: Array<any> = [];
	total: any;
	
	fieldsName: Array<string> = ['uslugi_id', 'hours', 'data_vyp', 'date', 'payment', 'price_ikon'];

	ulugii: Array<any> = [];
	constructor (
		public api: Api,
		public alertController: AlertController,
		public toastNotify: ToastNotify,
		public modalCtrl: ModalController,
		public formBuilder: FormBuilder,
	) {
		let self = this;
		self.total = self.baseTotal;
		self.loginForm = formBuilder.group({
			uslugi_id: [],
			price:[],
            hours: ["0"],
            data_vyp: [moment().format('DD/MM/YYYY HH:mm')],
            //date: [moment().toISOString()],
            payment: ["0"]
        });
	}
	ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
			self.api.getCategories()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
					self.allCategories = response;
					self.loginForm.controls.uslugi_id.setValue(self.ulugii[0]);
				});
			});
		});
	}
	async selectCategory() {
        let self = this,
            cssClass = 'bottom-modal select-category',
            modalView;
        modalView = await self.modalCtrl.create({
            component: SelectModalComponent,
            cssClass: cssClass,
            backdropDismiss: true,
            showBackdrop: true,
            componentProps: {
            	title: 'Выберите категорию',
                items: self.allCategories
            }
        });
        await modalView.present();
        const { data } = await modalView.onDidDismiss();
        if (data) {
           self.getServicesByCategory(data.id);
        }
    }
    getServicesByCategory(id: number){
    	let self = this;
    	self.api.showMask()
    	.then(() => {
    		self.api.getServicesByCategory({
    			id: id
    		})
    		.then((response: any) => {
    			let services = response.map((item) => {
    				return {
	    				name: item.usluginame,
	    				id: item.id,
	    				price: item.price
	    			};
	    		});
    			self.api.hideMask()
    			.then(() => {
    				if(services.length) {
    					self.selectService(services)
    				} else {
    					self.toastNotify.error('Выберите другую категорию. В этой категории нет услуг.');
    				}
    			});
    		});
    	});
    }
    async selectService(services: Array<any>) {
        let self = this,
            cssClass = 'bottom-modal select-category',
            modalView;
        modalView = await self.modalCtrl.create({
            component: SelectModalComponent,
            cssClass: cssClass,
            backdropDismiss: true,
            showBackdrop: true,
            componentProps: {
            	title: 'Выберите услугу',
				items: services	
            }
        });
        await modalView.present();
        const { data } = await modalView.onDidDismiss();
        if (data) {
           self.specifyCount(data);
        }
    }
    async specifyCount(service: any) {
    	let self = this;
		const alert = await this.alertController.create({
			header: 'Укажите количество',
			inputs: [{
				name: 'count',
				type: 'tel',
			}],
			buttons: [{
				text: 'Отмена',
				role: 'cancel'
			}, {
				text: 'Выбрать',
				handler: (data) => {
					if(data.count) {
						self.selectServiceDone(Object.assign(service, {count: Number(data.count)}))
					}
				}
			}]
		});
		await alert.present();
	}
	delete(index: number) {
		let self = this;
		self.selectedServices.splice(index, 1);
		if(self.selectedServices.length) {
			self.calculateTotal();
		} else {
			self.total = 0;
		}
	}
	selectServiceDone(service: any){
		let self = this,
			found: boolean = false;
		if(self.selectedServices.filter(item => item.id === service.id).length) {
			self.selectedServices.map((item) => {
				if(item.id === service.id) {
					item.count += service.count;
				}
				return item;
			});
		} else {
			self.selectedServices.push(service);
		}
		self.calculateTotal();
	}
	calculateTotal(){
		let self = this;
		self.total = self.selectedServices.map(item => item.price * item.count).reduce((sum, x) => sum + x);
	}
	send() {
		let self = this,
		error: string = '',
		values = self.loginForm.getRawValue();
		if(!error.length) {
			let params: any = {
			};
			params.service = {}
			/*self.selectedServices.forEach(item => params.service[item.id] = item.count);*/
			for (var i = 0; i<self.selectedServices.length; i++ ) {
				params.service[i] = {'id' : self.selectedServices[i].id, "count": self.selectedServices[i].count };
			}
			console.log(self.selectedServices);
			self.api.showMask()
			.then(() => {
				self.api.sendUslugi(params)
				.then((response: any) => {
					console.log(response);           
					self.api.hideMask()
					.then(() => {
						if(response.status) {
							/*self.loginForm.controls.uslugi_id.setValue(self.ulugii[0]);
							self.loginForm.controls.hours.setValue("0");
							self.loginForm.controls.date.setValue(moment().toISOString());
							self.loginForm.controls.payment.setValue("0");*/				
						} else {
							//self.showError(response.errorMessage);//TODO выставить правильный параметр из ответа
						}
					});
				});
			});
			self.clearData();
			self.toastNotify.success('Ваша заявка отправлена.');
		}
	}
	clearData(){
		let self = this;
		self.selectedServices = [];
		self.total = 0;
	}
}
