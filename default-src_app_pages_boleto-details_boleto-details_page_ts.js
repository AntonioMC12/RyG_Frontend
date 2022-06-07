"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_boleto-details_boleto-details_page_ts"],{

/***/ 6499:
/*!*************************************************************!*\
  !*** ./src/app/pages/boleto-details/boleto-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletoDetailsPage": () => (/* binding */ BoletoDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boleto_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./boleto-details.page.html */ 21029);
/* harmony import */ var _boleto_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boleto-details.page.scss */ 60051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/boleto.service */ 27101);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/premio.service */ 90383);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);









let BoletoDetailsPage = class BoletoDetailsPage {
    constructor(modalController, premioService, boletoService, toastService, loading) {
        this.modalController = modalController;
        this.premioService = premioService;
        this.boletoService = boletoService;
        this.toastService = toastService;
        this.loading = loading;
    }
    ngOnInit() { }
    entregar() { }
    /**
     * Cierra el modal
     */
    cerrar() {
        this.modalController.dismiss();
    }
    get isValid() {
        var _a;
        return this.boleto.premio === null
            ? this.boleto.canjeado
            : this.boleto.canjeado && ((_a = this.boleto.premio) === null || _a === void 0 ? void 0 : _a.entregado);
    }
    //hay que actualizar los boletos y premios desde premio.
    updateBoleto(boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.boletoService
                .putBoleto(boleto)
                .then(() => {
                this.toastService.showToast('Marcado como entregado', 'tertiary');
            })
                .catch(() => {
                this.toastService.showToast('Error al marcar como entregado', 'danger');
            });
        });
    }
    updateBoletoAndBindPremio(premio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.premioService
                .updatePremio(premio)
                .then((premio) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                let boleto = premio.boleto;
                boleto.premio = {
                    id: premio.id,
                    description: premio.description,
                    entregado: premio.entregado,
                };
                yield this.updateBoleto(boleto);
            }))
                .catch(() => {
                this.toastService.showToast('Error al marcar como entregado', 'danger');
            });
        });
    }
    getPremioById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let response = null;
            yield this.premioService.getPremio(id).then((premio) => {
                response = premio;
            });
            return response;
        });
    }
    getBoletoById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let response = null;
            yield this.boletoService
                .getBoleto(id)
                .then((boleto) => {
                response = boleto;
            })
                .catch(() => { });
            return response;
        });
    }
    refreshBoleto(boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let response;
            yield this.getBoletoById(boleto.id).then((boleto) => {
                response = boleto;
            });
            if (response)
                this.boleto = response;
        });
    }
    setCanjeadosToTrue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //comprobar si boleto tiene premio
            this.loading.showLoading();
            if (this.boleto.premio === null) {
                this.boleto.canjeado = true;
                this.boleto.entregado = true;
                yield this.updateBoleto(this.boleto);
            }
            else {
                let premio;
                yield this.getPremioById(this.boleto.premio.id).then((response) => (premio = response));
                if (premio != null) {
                    premio.entregado = true;
                    premio.boleto.canjeado = true;
                    premio.boleto.entregado = true;
                    yield this.updateBoletoAndBindPremio(premio);
                }
                else {
                    this.toastService.showToast('Error al marcar como entregado', 'danger');
                }
            }
            yield this.refreshBoleto(this.boleto);
            this.loading.hideLoading();
            console.log(this.boleto);
        });
    }
};
BoletoDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_4__.PremioService },
    { type: src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__.BoletoService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
BoletoDetailsPage.propDecorators = {
    boleto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
BoletoDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-boleto-details',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_boleto_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_boleto_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoletoDetailsPage);



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

/***/ 21029:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/boleto-details/boleto-details.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>Crear Boletos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon\r\n        name=\"close-circle\"\r\n        style=\"zoom: 2\"\r\n        (click)=\"cerrar()\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"home\">\r\n    <form>\r\n      <ion-label>Descripción:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-label>{{this.boleto.descripcion}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-label>Comercio:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-label>{{this.boleto.usuario.nombre_comercio}}</ion-label>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"this.boleto.premio; else notPremiado\">\r\n        <ion-label>Canjeado:</ion-label>\r\n        <ion-item class=\"input\">\r\n          <ion-label>{{this.boleto.premio.entregado}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-label>Premio:</ion-label>\r\n        <ion-item class=\"input\">\r\n          <ion-label>{{this.boleto.premio.description}}</ion-label>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ng-template #notPremiado>\r\n        <ion-label>Canjeado:</ion-label>\r\n        <ion-item class=\"input\">\r\n          <ion-label>ESTE BOLETO NO TIENE PREMIO</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-label>Premio:</ion-label>\r\n        <ion-item class=\"input\">\r\n          <ion-label>ESTE BOLETO NO TIENE PREMIO</ion-label>\r\n        </ion-item>\r\n      </ng-template>\r\n\r\n      <ion-button\r\n        expand=\"full\"\r\n        color=\"tertiary\"\r\n        type=\"submit\"\r\n        (click)=\"setCanjeadosToTrue()\"\r\n        [disabled]=\"isValid\"\r\n        >MARCAR COMO ENTREGADO</ion-button\r\n      >\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 60051:
/*!***************************************************************!*\
  !*** ./src/app/pages/boleto-details/boleto-details.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.select {\n  background: rgba(255, 255, 255, 0.199);\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGV0by1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0VBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSx3RUFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0FBR0YiLCJmaWxlIjoiYm9sZXRvLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhvbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC8vcGFkZGluZzoxNXB4IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3Myk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk5KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_boleto-details_boleto-details_page_ts.js.map