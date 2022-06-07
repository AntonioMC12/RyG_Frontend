"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 89561:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 54787);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 24250:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 54787);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 89561);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 54787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 72040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 60282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_premio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/premio.service */ 90383);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast.service */ 6588);
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuarios.service */ 30682);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pages_create_premio_create_premio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/create-premio/create-premio.page */ 60797);
/* harmony import */ var _pages_edit_premio_edit_premio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/edit-premio/edit-premio.page */ 80810);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ 63339);
/* harmony import */ var _pages_crear_boleto_crear_boleto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/crear-boleto/crear-boleto.page */ 78151);












let Tab2Page = class Tab2Page {
    constructor(usuarioService, alertController, api, modalController, miLoading, toast) {
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.api = api;
        this.modalController = modalController;
        this.miLoading = miLoading;
        this.toast = toast;
        this.premios = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.miLoading.showLoading();
            yield this.getAllPremio();
            yield this.miLoading.hideLoading();
        });
    }
    cargaPremios(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!event) {
                yield this.miLoading.showLoading();
            }
            this.premios = [];
            try {
                this.premios = yield this.api.getAllPremios();
            }
            catch (err) {
                console.error(err);
                yield this.toast.showToast('Error cargando datos', 'danger');
            }
            finally {
                if (event) {
                    event.target.complete();
                }
                else {
                    yield this.miLoading.hideLoading();
                }
            }
        });
    }
    getAllPremio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.premios = yield this.api.getAllPremios();
            }
            catch (error) {
                this.listado = null;
            }
        });
    }
    deletePremio(premio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmación',
                message: 'Estas seguro de que quieres eliminar',
                cssClass: 'my-css',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'my-css',
                        handler: (blah) => {
                            //nada
                        },
                    },
                    {
                        text: 'Eliminar',
                        cssClass: 'my-css',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.miLoading.showLoading();
                                yield this.api.deletePremio(premio.id);
                                //Para recargar la lista
                                let i = this.premios.indexOf(premio, 0);
                                if (i > -1) {
                                    this.premios.splice(i, 1);
                                }
                                yield this.miLoading.hideLoading();
                                yield this.toast.showToast('Premio borrado correctamente', 'tertiary');
                            }
                            catch (error) { }
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    crear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_create_premio_create_premio_page__WEBPACK_IMPORTED_MODULE_5__.CreatePremioPage,
                cssClass: 'my-custom-class',
                componentProps: {},
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getAllPremio();
        });
    }
    editar(premio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_edit_premio_edit_premio_page__WEBPACK_IMPORTED_MODULE_6__.EditPremioPage,
                cssClass: 'my-custom-class',
                componentProps: { premio },
            });
            yield modal.present();
            yield this.getAllPremio();
        });
    }
    /**
     * Busca filtrando descripción
     * @param $event
     */
    buscar($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let premios = [];
            const filtro = $event.detail.value;
            if (filtro.length > 1) {
                for (let premio of this.premios) {
                    if (premio.description.includes(filtro)) {
                        premios.push(premio);
                    }
                }
                this.premios = premios;
            }
            else if (filtro.length == 0) {
                yield this.getAllPremio();
            }
        });
    }
    /**
     * Pasar a la pag siguiente
     *
     */
    siguiente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_crear_boleto_crear_boleto_page__WEBPACK_IMPORTED_MODULE_8__.CrearBoletoPage,
                cssClass: 'my-custom-class',
                componentProps: {},
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__.UsuariosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _services_premio_service__WEBPACK_IMPORTED_MODULE_2__.PremioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tab2',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 72040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"header\">\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title> PREMIOS </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"content\">\r\n  <ion-searchbar\r\n    class=\"searchbar\"\r\n    color=\"dark\"\r\n    (ionChange)=\"buscar($event)\"\r\n    placeholder=\"Buscar...\"\r\n  ></ion-searchbar>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"cargaPremios($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-list>\r\n    <h6>LISTA DE PREMIOS</h6>\r\n    <ion-card *ngFor=\"let premio of premios; let i=index\">\r\n      <div class=\"display\">\r\n        <ion-card-header>\r\n          <ion-card-title>Id: {{premio.id}}</ion-card-title>\r\n          <ion-card-subtitle\r\n            >Descripción: {{premio.description}}</ion-card-subtitle\r\n          >\r\n          <ion-card-subtitle>Entregado: {{premio.entregado}}</ion-card-subtitle>\r\n        </ion-card-header>\r\n\r\n        <ion-item>\r\n          <ion-button (click)=\"editar(premio)\">\r\n            <ion-icon name=\"pencil\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button color=\"danger\" (click)=\"deletePremio(premio)\">\r\n            <ion-icon name=\"trash-bin\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </div>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"tertiary\" (click)=\"crear()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 60282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: auto;\n}\nion-header ion-toolbar ion-title {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n.searchbar {\n  width: 70%;\n  margin: 2% auto;\n  border-color: black;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content ion-list {\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2%;\n  background-color: white;\n}\nion-content ion-list ion-card {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  background-color: white;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: auto;\n}\nion-content ion-list ion-card ion-card-header {\n  color: black;\n}\nion-content ion-list ion-card ion-icon {\n  margin: 0 auto;\n}\nion-content ion-list h6 {\n  margin: 2%;\n}\nion-content ion-fab {\n  margin: 2%;\n  color: darkcyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFEUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSx3RUFBQTtBQUFaO0FBT0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUlBLG1CQUFBO0VBQ0Esd0VBQUE7QUFSSjtBQVVBO0VBQ0ksd0VBQUE7QUFQSjtBQVFJO0VBRUksVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEsdUJBQUE7QUFSUjtBQVNRO0VBQ0ksd0VBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFQWjtBQVFZO0VBRUksWUFBQTtBQVBoQjtBQVdnQjtFQUNJLGNBQUE7QUFUcEI7QUFjUTtFQUNJLFVBQUE7QUFaWjtBQWVJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFiUiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoYmFye1xyXG4gICAgXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAvLyBwYWRkaW5nOiAwJTtcclxuICAvLyAgbWFyZ2luLXRvcDogMiU7XHJcbiAgIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1mYWIge1xyXG4gICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgY29sb3I6ZGFya2N5YW5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map