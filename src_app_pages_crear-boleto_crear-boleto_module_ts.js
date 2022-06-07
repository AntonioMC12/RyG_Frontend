"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_crear-boleto_crear-boleto_module_ts"],{

/***/ 30073:
/*!*******************************************************************!*\
  !*** ./src/app/pages/crear-boleto/crear-boleto-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearBoletoPageRoutingModule": () => (/* binding */ CrearBoletoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _crear_boleto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-boleto.page */ 78151);




const routes = [
    {
        path: '',
        component: _crear_boleto_page__WEBPACK_IMPORTED_MODULE_0__.CrearBoletoPage
    }
];
let CrearBoletoPageRoutingModule = class CrearBoletoPageRoutingModule {
};
CrearBoletoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearBoletoPageRoutingModule);



/***/ }),

/***/ 94913:
/*!***********************************************************!*\
  !*** ./src/app/pages/crear-boleto/crear-boleto.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearBoletoPageModule": () => (/* binding */ CrearBoletoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _crear_boleto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-boleto-routing.module */ 30073);
/* harmony import */ var _crear_boleto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-boleto.page */ 78151);







let CrearBoletoPageModule = class CrearBoletoPageModule {
};
CrearBoletoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_boleto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearBoletoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_crear_boleto_page__WEBPACK_IMPORTED_MODULE_1__.CrearBoletoPage]
    })
], CrearBoletoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_crear-boleto_crear-boleto_module_ts.js.map