"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_crear-participaciones_crear-participaciones_module_ts"],{

/***/ 82014:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/crear-participaciones/crear-participaciones-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearParticipacionesPageRoutingModule": () => (/* binding */ CrearParticipacionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _crear_participaciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-participaciones.page */ 76651);




const routes = [
    {
        path: '',
        component: _crear_participaciones_page__WEBPACK_IMPORTED_MODULE_0__.CrearParticipacionesPage
    }
];
let CrearParticipacionesPageRoutingModule = class CrearParticipacionesPageRoutingModule {
};
CrearParticipacionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearParticipacionesPageRoutingModule);



/***/ }),

/***/ 12462:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/crear-participaciones/crear-participaciones.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearParticipacionesPageModule": () => (/* binding */ CrearParticipacionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _crear_participaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-participaciones-routing.module */ 82014);
/* harmony import */ var _crear_participaciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-participaciones.page */ 76651);







let CrearParticipacionesPageModule = class CrearParticipacionesPageModule {
};
CrearParticipacionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_participaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearParticipacionesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_crear_participaciones_page__WEBPACK_IMPORTED_MODULE_1__.CrearParticipacionesPage]
    })
], CrearParticipacionesPageModule);



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

/***/ 83250:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/crear-participaciones/crear-participaciones.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.label {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.close-btn {\n  zoom: 2;\n  cursor: pointer;\n}\n\n.button {\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXBhcnRpY2lwYWNpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0Usd0VBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJjcmVhci1wYXJ0aWNpcGFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhvbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC8vcGFkZGluZzoxNXB4IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3Myk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sYWJlbHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5jbG9zZS1idG4ge1xyXG4gIHpvb206IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b257XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crear-participaciones_crear-participaciones_module_ts.js.map