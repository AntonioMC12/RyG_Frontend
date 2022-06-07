"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_help_help_module_ts"],{

/***/ 45107:
/*!***************************************************!*\
  !*** ./src/app/pages/help/help-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageRoutingModule": () => (/* binding */ HelpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page */ 3588);




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_0__.HelpPage
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ 83878:
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageModule": () => (/* binding */ HelpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 45107);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page */ 3588);







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpPageRoutingModule
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_1__.HelpPage]
    })
], HelpPageModule);



/***/ }),

/***/ 3588:
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPage": () => (/* binding */ HelpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./help.page.html */ 43035);
/* harmony import */ var _help_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page.scss */ 84913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let HelpPage = class HelpPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    retroceder() {
        this.navCtrl.navigateRoot("tabs/tab1");
    }
};
HelpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
HelpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-help',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpPage);



/***/ }),

/***/ 43035:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/help/help.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-title>\r\n      AYUDA\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list>\r\n    <ion-title>DATOS DEL ADMINISTRADOR:</ion-title>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-icon name=\"call\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-header>\r\n        <ion-card-title>Teléfono</ion-card-title>\r\n        <ion-card-subtitle>#########</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-icon name=\"mail\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-header>\r\n        <ion-card-title>Correo electrónico</ion-card-title>\r\n        <ion-card-subtitle>email@email.com</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-icon name=\"person-circle\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-header>\r\n        <ion-card-title>Nombre del Administrador</ion-card-title>\r\n        <ion-card-subtitle>nombre_administrador</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-icon name=\"location\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-header>\r\n        <ion-card-title>Dirección</ion-card-title>\r\n        <ion-card-subtitle>c/direccion_administrador, #</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"tertiary\" class=\"buttonHelp\" (click)=\"retroceder()\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Tab 3</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-button (click)=\"getAllPremio()\">get Premios</ion-button>\r\n  <ion-button (click)=\"createPremio()\">crear premio</ion-button>\r\n  <ion-button (click)=\"updatePremio()\">actualizar premio</ion-button>\r\n  <ion-button (click)=\"deletePremio()\">borrar premio</ion-button>\r\n  <ion-button (click)=\"getByDescription()\">get by description</ion-button>\r\n  <ion-button (click)=\"getPremiosEntregados()\">get premios entregados</ion-button>\r\n  <ion-button (click)=\"getPremiosNoEntregados()\">get premios no entregados</ion-button>\r\n  <app-explore-container name=\"Tab 3 page\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 84913:
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nion-header ion-toolbar ion-title {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n  color: black;\n}\nion-header ion-toolbar ion-icon {\n  font-size: 30px;\n}\nion-content {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nion-content ion-list {\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2%;\n  border-radius: 1%;\n  background-color: white;\n}\nion-content ion-list ion-card {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  background-color: white;\n  margin: 3%;\n}\nion-content ion-list ion-item ion-icon {\n  font-size: 30px;\n}\nion-content ion-list h6 {\n  margin: 2%;\n}\nion-content ion-fab {\n  margin: 2%;\n  color: darkcyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQURKO0FBRUk7RUFDRSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFOO0FBRUk7RUFDRSxlQUFBO0FBQU47QUFLQTtFQUNFLHdFQUFBO0FBRkY7QUFHRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUVJO0VBQ0Usd0VBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQU47QUFHTTtFQUNFLGVBQUE7QUFEUjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBS0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUhKIiwiZmlsZSI6ImhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDMlO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgIG1hcmdpbjogMiU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1mYWIge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help_help_module_ts.js.map