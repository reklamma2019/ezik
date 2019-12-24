import { Injectable } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Events } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
    loadingMask: any;
    alert: any;
    errorDisplayed: boolean = false;
    repeatInterval: number;

    constructor(
        public http: HttpClient,
        public loadingCtrl: LoadingController,
        public events: Events,
        private alertCtrl: AlertController,
        private storage: NativeStorage,
        private navCtrl: NavController,
        private platform: Platform
    ) {
        let self = this;
    }
    getBackendUrl() {
        return 'http://api.fin.up/';
    }
    showMask() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.beforeShowMask().then(() => {
                resolve();
            });
        });
    }
    async beforeShowMask() {
        let self = this;
        self.loadingMask = await this.loadingCtrl.create({
            mode: 'md',
            spinner: 'lines-small',
            message: 'Выполняется запрос'
        });
        await self.loadingMask.present();

    }
    hideMask() {
        let self = this;
        return new Promise((resolve, reject) => {
            if (self.loadingMask) {
                self.loadingMask.dismiss()
                .then(() => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }
    async showError(status?: any, errorText?: string, doneFunc: any = () => {}) {
        let self = this;
        if (!self.errorDisplayed) {
            self.alert = await self.alertCtrl.create({
                header: status ? status : 'Ошибка',
                message: errorText ? errorText : 'Произошла ошибка',
                backdropDismiss: false,
                mode: 'md',
                buttons: [{
                    text: 'OK',
                    handler: () => {
                        self.errorDisplayed = false;
                        self.alert.dismiss().then(doneFunc());
                        return false;
                    }
                }]
            });
            if (self.loadingMask && !self.loadingMask._isHidden) {
               self.hideMask()
               .then(() => {
                    self.errorDisplayed = true;
                    self.alert.present();
               });
            } else {
                self.errorDisplayed = true;
                self.alert.present();
            }
        }
    }
    toHttpParams(obj: Object): HttpParams {
        let params = new HttpParams();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const val = obj[key];
                if (val !== null && val !== undefined) {
                    params = params.append(key, val.toString());
                }
            }
        }
        return params;
    }
    serialize(obj: any) {
        const formData = new FormData();

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let element = obj[key];
                formData.append(key, element);
            }
        }
        return formData;
    }

    getToken(){
        let self = this;
        return new Promise((resolve, reject) => {
            if(self.platform.is('cordova')) {
                self.storage.getItem('token')
                .then((token: any) => {
                    resolve(token);
                });
            } else {
                resolve(JSON.parse((<any>window).localStorage.getItem('token')))
            }
        });
    }

    doRequest(method: string, endpoint: string, params?: any, skipError?: boolean) {
        let self = this,
            options: any = {};
        return new Promise((resolve, reject) => {
            let headers: any = {};
            headers['Content-Type'] = 'application/json';
            self.getToken()
            .then((token: any) => {
                if(token && token.token) {
                    headers['Authorization'] = 'Bearer ' + token.token;
                }
                console.log('params ', params);
                if (params) {
                    if (method === 'GET') {
                        options.params = self.toHttpParams(params);
                    } else {
                        options.body = params;
                    }
                }
                options.headers = new HttpHeaders(headers);
                self.http.request(method, self.getBackendUrl() + endpoint, options)
                .pipe(timeout(60000))
                .subscribe(data => {
                    resolve(data);
                },
                error => {
                    self.hideMask()
                    .then(() => {
                        if(error.status === 200) {
                            resolve(error.error.text);
                        } else if(error.status === 401) {
                            this.navCtrl.navigateRoot('/landing');
                            resolve();
                        } else {
                            console.log('api error ', error);
                            /*self.showError('Ошибка ' + error.status, error.error.data && error.error.data.status ? error.error.data.status : error.statusText, () => {
                                reject(error.error);
                            });*/
                           //TODO вывод ошибки сервера
                        }
                    });
                });
            });
        });
    }
    authorize(params: any) {
        return this.doRequest('POST', `users-management/users/signIn`, params);
    }
   sendRegistrety(params: any) {
        return this.doRequest('POST', `regis`, params);
    }
    getUser() {
        return this.doRequest('GET', `user`, {});
    }
    getMyuk() {
        return this.doRequest('GET', `user`, {});
    }
    getZayavi(){
        return this.doRequest('GET', `zayvkis`, {});
    }
    sendZayavka(params: any){
        return this.doRequest('POST', `zayvkis`, params);
    }
    getUslugii(){
        return this.doRequest('GET', `ulugii`, {});
    }
    getCategories(){
        return this.doRequest('GET', `cats`, {});
    }
    getServicesByCategory(params: any){
        return this.doRequest('GET', `uslid`, params);
    }
    sendUslugi(params: any){
        return this.doRequest('POST', `uslugi`, params);
    }
    getOdn(){
        return this.doRequest('GET', `odn`, {});
    }
    getMyzayvki(){
        return this.doRequest('GET', `myzayvk`, {});
    }
    getMyzayvkinew(){
        return this.doRequest('GET', `newmyzayvki`, {});
    }
    getPartner(){
        return this.doRequest('GET', `partnery`, {});
    }
    getHelp(){
        return this.doRequest('GET', `help`, {});
    }
    updateProfile(params: any){
        return this.doRequest('PUT', `updateuser`, params);
    }
    getType(){
        return this.doRequest('GET', `typeshet`, {});
    }
    sendShet(params: any){
        return this.doRequest('POST', `addshet`, params);
    }
    
       
    log(message: string, xhr: any, method: string, params?: any) {
        let err,
            resp,
            xhrMessage = '';
        if (xhr) {
            resp = xhr.statusText || null;
            xhrMessage = ['URL:' + xhr.url,
                'status:' + xhr.status + '(' + xhr.statusText + ')',
                resp ? (' , response: ' + xhr.statusText) : '',
                method === 'POST' ? 'jsonData:' + JSON.stringify(params) : ''].join(' ');
        }
        err = new Error(['PSMException:', message, xhrMessage].join(' '));
        console.log(err);
    }
}
