"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_crear-boleto_crear-boleto_page_ts"],{

/***/ 78151:
/*!*********************************************************!*\
  !*** ./src/app/pages/crear-boleto/crear-boleto.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearBoletoPage": () => (/* binding */ CrearBoletoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crear_boleto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./crear-boleto.page.html */ 46308);
/* harmony import */ var _crear_boleto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-boleto.page.scss */ 61058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/boleto.service */ 27101);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/premio.service */ 90383);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuarios.service */ 30682);
/* harmony import */ var _crear_participaciones_crear_participaciones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crear-participaciones/crear-participaciones.page */ 76651);












let CrearBoletoPage = class CrearBoletoPage {
    constructor(modalController, api, fb, toast, apiBoleto, apiPremio, loading) {
        this.modalController = modalController;
        this.api = api;
        this.fb = fb;
        this.toast = toast;
        this.apiBoleto = apiBoleto;
        this.apiPremio = apiPremio;
        this.loading = loading;
        this.usuarios = [];
        this.premios = [];
        this.boletos = [];
    }
    ngOnInit() {
        this.formBoleto = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            comercio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            nBoletos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            nPremiados: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        });
    }
    validador() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.showLoading();
            let result = false;
            let nBoletos = this.formBoleto.get('nBoletos').value;
            let nPremiados = this.formBoleto.get('nPremiados').value;
            let usuarioBoleto = yield this.api.getUsuario(this.formBoleto.get('comercio').value);
            let premio1 = this.newPremio;
            let premioPersistido;
            if (nBoletos > nPremiados && nBoletos > 0 && nPremiados > 0) {
                result = true;
                for (let j = 0; j < nPremiados; j++) {
                    this.premio = premio1;
                    premioPersistido = yield this.apiPremio.createPremio(this.premio);
                    let premio2 = this.convertPremio(premioPersistido);
                    premioPersistido = premio2;
                    this.premios.push(premio2);
                }
                for (let i = 0; i < nBoletos; i++) {
                    let boleto = {
                        id: -1,
                        descripcion: this.formBoleto.get('description').value,
                        entregado: false,
                        canjeado: false,
                        premio: null,
                        usuario: usuarioBoleto,
                    };
                    let boletoPersistido = yield this.apiBoleto.postBoleto(boleto);
                    this.boletos.push(boletoPersistido);
                }
                for (let i = 0; i < this.premios.length; i++) {
                    let numberRandom = Math.floor(Math.random() * (this.boletos.length - 0) + 0);
                    while (numberRandom == this.number) {
                        numberRandom = Math.floor(Math.random() * (this.boletos.length - 0) + 0);
                    }
                    this.number = numberRandom;
                    let boletoPremiado = this.boletos[this.number];
                    boletoPremiado = {
                        id: boletoPremiado.id,
                        descripcion: boletoPremiado.descripcion,
                        entregado: boletoPremiado.entregado,
                        canjeado: boletoPremiado.canjeado,
                        premio: this.premios[i],
                        usuario: boletoPremiado.usuario,
                    };
                    yield this.apiBoleto.putBoleto(boletoPremiado);
                }
                this.loading.hideLoading();
                this.siguiente();
            }
            else {
                result = false;
                yield this.toast.showToast('El nº premios tiene que ser MENOR que el nº de boletos', 'danger');
                yield this.formBoleto.reset();
            }
            this.loading.hideLoading();
            return result;
        });
    }
    /**
     * Cierra el modal
     */
    cerrar() {
        this.modalController.dismiss();
    }
    /**
     * Método que trae todos los comercios para el ion-select
     */
    getAllUsuarios() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.usuarios = yield this.api.getUsuarios();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     * Método para pasar al siguiente modal -> reparto de participaciones
     *
     */
    siguiente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss(); // Cierra el modal anterior
            let nBoletos = this.formBoleto.get('nBoletos').value;
            let allboletos = this.boletos;
            const modal = yield this.modalController.create({
                component: _crear_participaciones_crear_participaciones_page__WEBPACK_IMPORTED_MODULE_7__.CrearParticipacionesPage,
                cssClass: 'my-custom-class',
                componentProps: { nBoletos, allboletos },
            });
            yield modal.present();
            yield modal.onDidDismiss();
            // await this.getAllPremio();
        });
    }
    convertPremio(premio) {
        let premioConvert = {
            id: premio.id,
            description: premio.description,
            entregado: premio.entregado,
        };
        return premioConvert;
    }
};
CrearBoletoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__.UsuariosService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__.BoletoService },
    { type: src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_4__.PremioService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
CrearBoletoPage.propDecorators = {
    newPremio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
CrearBoletoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-crear-boleto',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crear_boleto_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crear_boleto_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearBoletoPage);



/***/ }),

/***/ 76651:
/*!***************************************************************************!*\
  !*** ./src/app/pages/crear-participaciones/crear-participaciones.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearParticipacionesPage": () => (/* binding */ CrearParticipacionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crear_participaciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./crear-participaciones.page.html */ 22215);
/* harmony import */ var _crear_participaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-participaciones.page.scss */ 83250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ 30682);









let CrearParticipacionesPage = class CrearParticipacionesPage {
    constructor(modalController, api, fb, toast, loading) {
        this.modalController = modalController;
        this.api = api;
        this.fb = fb;
        this.toast = toast;
        this.loading = loading;
        this.usuarios = [];
        this.isDisabled = false;
        this.number = 0;
        this.boletos = [];
    }
    ngOnInit() {
        this.modalController.dismiss(); //Cierra el modal anterior
        this.formParticipaciones = this.fb.group({
            participacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(this.nBoletos)],
        });
        this._NParticipaciones = this.nBoletos;
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.showLoading();
            yield this.getAllUsuarios();
            this.loading.hideLoading();
        });
    }
    validador() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let result = false;
            if (this.nBoletos === 0) {
                result = true;
                yield this.setParticipaciones();
                this.toast.showToast('Participaciones actualizadas', 'tertiary');
                this.cerrar();
            }
            else {
                result = false;
                this.toast.showToast('Asegúrese de repartir ' + this._NParticipaciones + ' de participaciones.', 'danger');
            }
            return result;
        });
    }
    /**
     * Método para setear el número de participaciones que le corresponde a cada comercio
     */
    setParticipaciones() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.showLoading();
            this.usuarios = yield this.api.getUsuarios();
            for (let i = 0; i < this.usuarios.length; i++) {
                if (this.allboletos[0].usuario.nombre_comercio ==
                    this.usuarios[i].nombre_comercio) {
                }
                else {
                    let participacion = this.formParticipaciones.get('participacion').value;
                    let updateUsuario = this.usuarios[i];
                    updateUsuario.participaciones =
                        updateUsuario.participaciones + participacion;
                    this.usuario = yield this.api.putUsuario(updateUsuario);
                }
            }
            this.loading.hideLoading();
        });
    }
    /**
     * Cierra el modal
     */
    cerrar() {
        this.modalController.dismiss();
    }
    getAllUsuarios() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.usuarios = yield this.api.getUsuarios();
            }
            catch (error) {
                console.log(error);
            }
            return this.usuarios;
        });
    }
};
CrearParticipacionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__.UsuariosService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService }
];
CrearParticipacionesPage.propDecorators = {
    nBoletos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    allboletos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CrearParticipacionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-crear-participaciones',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_crear_participaciones_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crear_participaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearParticipacionesPage);



/***/ }),

/***/ 27101:
/*!********************************************!*\
  !*** ./src/app/services/boleto.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletoService": () => (/* binding */ BoletoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let BoletoService = class BoletoService {
    constructor(http) {
        this.http = http;
        this.apiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.endpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletos + "/";
    }
    getBoletos(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                let boleto;
                if (id_boleto) {
                    endpoint += id_boleto;
                }
                try {
                    boleto = (yield this.http.get(endpoint).toPromise());
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoleto(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + id_boleto;
                let boleto;
                try {
                    boleto = (yield this.http.get(endpoint).toPromise());
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosEntregados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletosEntregados;
                let boletos;
                try {
                    boletos = yield this.http.get(endpoint).toPromise();
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosCanjeados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletoscanjeados;
                let boletos;
                try {
                    boletos = (yield this.http.get(endpoint).toPromise());
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosByUsuario(id_usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_usuario && id_usuario > -1) {
                    let endpoint = this.apiEndpoint + id_usuario;
                    let boletos;
                    try {
                        boletos = (yield this.http.get(endpoint).toPromise());
                        resolve(boletos);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    reject();
                }
            }));
        });
    }
    getBoletoSorteo(id_usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_usuario && id_usuario > -1) {
                    let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletosSorteo + "/" + id_usuario;
                    let boletos;
                    try {
                        boletos = (yield this.http.get(endpoint).toPromise());
                        resolve(boletos);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    reject("id_usuario mal introducido");
                }
            }));
        });
    }
    postBoleto(newBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                // let boletos: Boleto[];
                try {
                    let boleto = yield this.http.post(endpoint, newBoleto).toPromise();
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    putBoleto(newBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                let boletos;
                try {
                    boletos = (yield this.http.put(endpoint, newBoleto).toPromise());
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    deleteBoleto(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_boleto && id_boleto > -1) {
                    let endpoint = this.apiEndpoint + id_boleto;
                    try {
                        yield this.http.delete(endpoint).toPromise();
                        resolve(true);
                    }
                    catch (error) {
                        reject(false);
                    }
                }
                else {
                    reject(false);
                }
            }));
        });
    }
};
BoletoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
BoletoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BoletoService);



/***/ }),

/***/ 46308:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/crear-boleto/crear-boleto.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>Crear Boletos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"close-circle\" class=\"close-btn\" (click)=\"cerrar()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"home\">\r\n    <form [formGroup]=\"formBoleto\" (ngSubmit)=\"validador()\">\r\n      <ion-label>Descripción:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-input type=\"text\" formControlName=\"description\" placeholder=\"Enter descripción...\"></ion-input>\r\n      </ion-item>\r\n      <ion-label>Comercio:</ion-label>\r\n\r\n      <ion-item class=\"input\">\r\n        <ion-label>Comercios</ion-label>\r\n        <select formControlName=\"comercio\" (click)=\"getAllUsuarios()\" class=\"select\">\r\n\r\n          <option [ngValue]=\"usuario.id\" *ngFor=\"let usuario of usuarios\">{{usuario.nombre_comercio}}</option>\r\n\r\n        </select>\r\n      </ion-item>\r\n\r\n      <ion-label>Nº Boletos:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-input type=\"number\" min=\"0\" formControlName=\"nBoletos\" placeholder=\"Enter nº de boletos...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-label>Nº Boletos PREMIADOS:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-input type=\"number\" min=\"0\" formControlName=\"nPremiados\" placeholder=\"Enter nº boletos premiados...\"></ion-input>\r\n      </ion-item>\r\n      <ion-button expand=\"full\" color=\"tertiary\" type=\"submit\" (ngSubmit)=\"validador()\"\r\n        [disabled]=\"this.formBoleto.invalid\">Siguiente</ion-button>\r\n    </form>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 22215:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/crear-participaciones/crear-participaciones.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>Reparto de participaciones</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon\r\n        name=\"close-circle\"\r\n        class=\"close-btn\"\r\n        (click)=\"cerrar()\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <form [formGroup]=\"formParticipaciones\" (ngSubmit)=\"validador()\">\r\n    <ion-label class=\"label\">Tiene {{nBoletos}} a repartir: </ion-label>\r\n    <div class=\"home\" *ngFor=\"let usuario of usuarios; let i=index\">\r\n   \r\n      <ion-label\r\n        *ngIf=\"this.allboletos[0].usuario.nombre_comercio!=usuario.nombre_comercio\"\r\n        >{{usuario.nombre_comercio}}\r\n      </ion-label>\r\n      <ion-item\r\n        class=\"input\"\r\n        *ngIf=\"this.allboletos[0].usuario.nombre_comercio!=usuario.nombre_comercio\"\r\n      >\r\n        <ion-input\r\n          type=\"number\"\r\n          min=\"0\"\r\n          formControlName=\"participacion\"\r\n          placeholder=\"Enter nº de parcipaciones...\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n  \r\n    </div>\r\n    <ion-label>*Asegúrese que el nº de participaciones no supera al nº de boletos disponibles</ion-label>\r\n    <ion-button \r\n      class=\"button\"\r\n      expand=\"full\"\r\n      [disabled]=\"this.formParticipaciones.invalid\"\r\n      color=\"tertiary\"\r\n      type=\"submit\"\r\n      (ngSubmit)=\"validador()\"\r\n      >Confirmar</ion-button\r\n    >\r\n    \r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 61058:
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-boleto/crear-boleto.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.select {\n  background: rgba(255, 255, 255, 0.199);\n  color: black;\n}\n\n.close-btn {\n  zoom: 2;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLWJvbGV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0Usd0VBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFDQTtFQUNFLE9BQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoiY3JlYXItYm9sZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5ob21lIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAvL3BhZGRpbmc6MTVweCAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NzMpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk5KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICB6b29tOiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 83250:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/crear-participaciones/crear-participaciones.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.label {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.close-btn {\n  zoom: 2;\n  cursor: pointer;\n}\n\n.button {\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXBhcnRpY2lwYWNpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0Usd0VBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJjcmVhci1wYXJ0aWNpcGFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhvbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC8vcGFkZGluZzoxNXB4IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3Myk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sYWJlbHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jbG9zZS1idG4ge1xyXG4gIHpvb206IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b257XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_crear-boleto_crear-boleto_page_ts.js.map