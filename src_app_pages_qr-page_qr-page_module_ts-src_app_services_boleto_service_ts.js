"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_qr-page_qr-page_module_ts-src_app_services_boleto_service_ts"],{

/***/ 87807:
/*!*********************************************************!*\
  !*** ./src/app/pages/qr-page/qr-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePageRoutingModule": () => (/* binding */ QrPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _qr_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-page.page */ 68300);




const routes = [
    {
        path: '',
        component: _qr_page_page__WEBPACK_IMPORTED_MODULE_0__.QrPagePage
    }
];
let QrPagePageRoutingModule = class QrPagePageRoutingModule {
};
QrPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrPagePageRoutingModule);



/***/ }),

/***/ 89696:
/*!*************************************************!*\
  !*** ./src/app/pages/qr-page/qr-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePageModule": () => (/* binding */ QrPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _qr_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-page-routing.module */ 87807);
/* harmony import */ var _qr_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-page.page */ 68300);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-qrcode */ 23709);








let QrPagePageModule = class QrPagePageModule {
};
QrPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _qr_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrPagePageRoutingModule,
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_2__.QRCodeModule
        ],
        declarations: [_qr_page_page__WEBPACK_IMPORTED_MODULE_1__.QrPagePage]
    })
], QrPagePageModule);



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



/***/ })

}]);
//# sourceMappingURL=src_app_pages_qr-page_qr-page_module_ts-src_app_services_boleto_service_ts.js.map