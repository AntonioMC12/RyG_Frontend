"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 78383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 72371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 94265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 72371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 78383);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-qrcode */ 23709);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_3__.QRCodeModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 72371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 32817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 28443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pages_boleto_details_boleto_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/boleto-details/boleto-details.page */ 6499);
/* harmony import */ var _pages_qr_page_qr_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/qr-page/qr-page.page */ 68300);
/* harmony import */ var _services_boleto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/boleto.service */ 27101);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 6588);









let Tab1Page = class Tab1Page {
    constructor(boletoService, navCtrl, modalController, toastService) {
        this.boletoService = boletoService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.toastService = toastService;
        this.isGenerated = false;
    }
    dirigirAAyuda() {
        this.navCtrl.navigateRoot('help');
    }
    /**
     * Generar qr para acceder a la pagina de los tickets
     */
    generateBoletoQR() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_qr_page_qr_page_page__WEBPACK_IMPORTED_MODULE_3__.QrPagePage,
                cssClass: 'my-modal',
                componentProps: {},
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
    checkBoleto(idBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(idBoleto);
            if (!this.checkParseNumber(idBoleto)) {
                this.toastService.showToast('El boleto no es valido, inserte un número correcto.', 'danger');
                return;
            }
            this.boletoService
                .getBoleto(idBoleto)
                .then((boleto) => {
                if (boleto.id)
                    this.showBoletoModal(boleto);
                else
                    this.toastService.showToast('Boleto no encontrado', 'danger');
            })
                .catch((error) => {
                this.toastService.showToast('Ha ocurrido un error...', 'danger');
            });
        });
    }
    checkParseNumber(idBoleto) {
        if (typeof idBoleto !== 'string') {
            return false;
        }
        if (idBoleto.trim() === '') {
            return false;
        }
        return !Number.isNaN(Number(idBoleto));
    }
    showBoletoModal(boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_boleto_details_boleto_details_page__WEBPACK_IMPORTED_MODULE_2__.BoletoDetailsPage,
                cssClass: 'my-modal',
                componentProps: {
                    boleto: boleto,
                },
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_boleto_service__WEBPACK_IMPORTED_MODULE_4__.BoletoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab1',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 32817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title class=\"header\"> RASCA Y GANA </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button class=\"buttonHelp\" (click)=\"dirigirAAyuda()\">\r\n      <ion-icon name=\"help-circle\" class=\"iconHelp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <div class=\"home\">\r\n    <div class=\"ini\">\r\n      <img src=\"../../assets/icono.png\" />\r\n    </div>\r\n    <ion-label>Validador de premios:</ion-label>\r\n    <ion-input\r\n      placeholder=\"Introduce el código del premio...\"\r\n      class=\"input\"\r\n      id=\"idBoleto\"\r\n      name=\"idBoleto\"\r\n      #idBoleto\r\n    ></ion-input>\r\n    <ion-button\r\n      class=\"boton\"\r\n      type=\"submit\"\r\n      color=\"tertiary\"\r\n      shape=\"round\"\r\n      expand=\"block\"\r\n      (click)=\"checkBoleto(idBoleto.value)\"\r\n      >COMPROBAR</ion-button\r\n    >\r\n    <ion-button\r\n      class=\"boton-boleto\"\r\n      (click)=\"generateBoletoQR()\"\r\n      shape=\"round\"\r\n      color=\"tertiary\"\r\n      expand=\"block\"\r\n    >\r\n      <ion-icon name=\"qr-code-outline\"></ion-icon>&nbsp;&nbsp; GENERAR BOLETO\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 28443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.ini {\n  align-items: center;\n  margin-top: 3%;\n  margin-left: 40%;\n  margin-right: 40%;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.qr {\n  align-items: center;\n  margin-left: 30%;\n  margin-right: 30%;\n  margin-top: 10%;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.iconHelp {\n  font-size: 60px;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.boton-boleto {\n  margin-top: 10%;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.boton {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx3RUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0Usd0VBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSxlQUFBO0VBQ0Esd0VBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLHdFQUFBO0FBR0Y7O0FBREE7RUFDRSx3RUFBQTtBQUlGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmluaSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNDAlO1xyXG59XHJcbi5ob21lIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAvL3BhZGRpbmc6MTVweCAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTczKTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnFyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgLy9tYXJnaW4tbGVmdDogNDAlO1xyXG4gIC8vbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmljb25IZWxwIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYm90b24tYm9sZXRvIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYm90b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map