"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 98058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 12308);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 67586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 12308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 98058);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 12308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 38752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 44170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_premio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/premio.service */ 90383);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast.service */ 6588);
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuarios.service */ 30682);
/* harmony import */ var _pages_create_user_create_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/create-user/create-user.page */ 72119);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ 63339);
/* harmony import */ var _pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/edit-user/edit-user.page */ 89314);











let Tab3Page = class Tab3Page {
    constructor(api, usuarioService, toast, alertController, modalController, miLoading) {
        this.api = api;
        this.usuarioService = usuarioService;
        this.toast = toast;
        this.alertController = alertController;
        this.modalController = modalController;
        this.miLoading = miLoading;
        this.usuarios = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.miLoading.showLoading();
            yield this.getUsuarios();
            yield this.miLoading.hideLoading();
        });
    }
    getUsuarios(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (id && id > -1) {
                this.usuarios = yield this.usuarioService.getUsuarios(id);
            }
            else {
                this.usuarios = yield this.usuarioService.getUsuarios();
            }
        });
    }
    getUsuarioByCoordinates(latitud, longitud) {
        if (latitud != undefined && longitud != undefined) {
            this.usuarioService.getUsuarioByCoordinates(latitud, longitud);
        }
    }
    deleteUsuario(usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmación',
                message: '¿Estás seguro de que quieres eliminar?',
                cssClass: 'my-css',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'my-css',
                        handler: (blah) => {
                            this.toast.showToast('Operación cancelada', 'warning');
                        },
                    },
                    {
                        text: 'Eliminar',
                        cssClass: 'my-css',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.miLoading.showLoading();
                                yield this.usuarioService.deleteUsuario(usuario.id);
                                let i = this.usuarios.indexOf(usuario, 0);
                                this.toast.showToast('Usuario eliminado con éxito', 'tertiary');
                                if (i > -1) {
                                    this.usuarios.splice(i, 1);
                                }
                                yield this.miLoading.hideLoading();
                            }
                            catch (error) {
                                this.toast.showToast('Error al eliminar el usuario', 'danger');
                            }
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    crear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_create_user_create_user_page__WEBPACK_IMPORTED_MODULE_5__.CreateUserPage,
                cssClass: 'my-modal',
                componentProps: {},
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getUsuarios();
            // this.toast.showToast("Usuario creado con éxito", "success");
        });
    }
    editar(usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_7__.EditUserPage,
                cssClass: 'my-modal',
                componentProps: {
                    Usuario: usuario,
                },
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getUsuarios();
            // this.toast.showToast("Usuario creado con éxito", "success");
        });
    }
    /**
     * Busca filtrando descripción
     * @param $event
     */
    buscar($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let usuarios = [];
            const filtro = $event.detail.value;
            if (filtro.length > 1) {
                for (let usuario of this.usuarios) {
                    if (usuario.nombre_comercio.includes(filtro)) {
                        usuarios.push(usuario);
                    }
                }
                this.usuarios = usuarios;
            }
            else if (filtro.length == 0) {
                yield this.getUsuarios();
            }
        });
    }
    doRefresh($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                let usuarios = [];
                for (let usuario of this.usuarios) {
                    usuarios.push(usuario);
                }
                this.usuarios = usuarios;
                yield this.getUsuarios();
                this.inputSearchName = '';
                $event.target.complete();
            }), 1000);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_premio_service__WEBPACK_IMPORTED_MODULE_2__.PremioService },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__.UsuariosService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab3',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 38752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>\r\n      USUARIOS\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-searchbar class=\"searchbar\" color=\"dark\" (ionChange)=\"buscar($event)\" placeholder=\"Buscar...\" [(ngModel)]=\"inputSearchName\"></ion-searchbar>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content>\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list>\r\n    <h6>LISTA DE USUARIOS</h6>\r\n    <ion-card *ngFor=\"let usuario of usuarios; let i=index\">\r\n      <ion-card-header>\r\n        <ion-card-title>Id: {{usuario.id}}</ion-card-title>\r\n        <ion-card-subtitle>{{usuario.nombre_comercio}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n\r\n      <ion-item>\r\n        <ion-button (click)=\"editar(usuario)\">\r\n          <ion-icon name=\"pencil\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"danger\" (click)=\"deleteUsuario(usuario)\">\r\n          <ion-icon name=\"trash-bin\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"tertiary\" (click)=\"crear()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Tab 3</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-button (click)=\"getAllPremio()\">get Premios</ion-button>\r\n  <ion-button (click)=\"createPremio()\">crear premio</ion-button>\r\n  <ion-button (click)=\"updatePremio()\">actualizar premio</ion-button>\r\n  <ion-button (click)=\"deletePremio()\">borrar premio</ion-button>\r\n  <ion-button (click)=\"getByDescription()\">get by description</ion-button>\r\n  <ion-button (click)=\"getPremiosEntregados()\">get premios entregados</ion-button>\r\n  <ion-button (click)=\"getPremiosNoEntregados()\">get premios no entregados</ion-button>\r\n  <app-explore-container name=\"Tab 3 page\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 44170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: auto;\n}\nion-header ion-toolbar ion-title {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n  color: black;\n}\n.searchbar {\n  width: 70%;\n  margin: 2% auto;\n  border-color: black;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content ion-list {\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2%;\n  background-color: white;\n}\nion-content ion-list ion-card {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: auto;\n  align-items: center;\n  background-color: white;\n}\nion-content ion-list h6 {\n  margin: 2%;\n}\nion-content ion-fab {\n  margin: 2%;\n  color: darkcyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFEUjtBQUVRO0VBQ0ksd0VBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBWjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdFQUFBO0FBRko7QUFLQTtFQUdJLHdFQUFBO0FBSko7QUFLSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLHVCQUFBO0FBSlI7QUFLUTtFQUNJLHdFQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSFo7QUFLUTtFQUNJLFVBQUE7QUFIWjtBQU1JO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFKUiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogMSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tZmFiIHtcclxuICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIGNvbG9yOmRhcmtjeWFuXHJcbiAgICB9XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map