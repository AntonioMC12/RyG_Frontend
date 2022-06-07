"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_boleto-details_boleto-details_module_ts"],{

/***/ 90391:
/*!***********************************************************************!*\
  !*** ./src/app/pages/boleto-details/boleto-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletoDetailsPageRoutingModule": () => (/* binding */ BoletoDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _boleto_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boleto-details.page */ 6499);




const routes = [
    {
        path: '',
        component: _boleto_details_page__WEBPACK_IMPORTED_MODULE_0__.BoletoDetailsPage
    }
];
let BoletoDetailsPageRoutingModule = class BoletoDetailsPageRoutingModule {
};
BoletoDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BoletoDetailsPageRoutingModule);



/***/ }),

/***/ 65028:
/*!***************************************************************!*\
  !*** ./src/app/pages/boleto-details/boleto-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletoDetailsPageModule": () => (/* binding */ BoletoDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _boleto_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boleto-details-routing.module */ 90391);
/* harmony import */ var _boleto_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boleto-details.page */ 6499);







let BoletoDetailsPageModule = class BoletoDetailsPageModule {
};
BoletoDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _boleto_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoletoDetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_boleto_details_page__WEBPACK_IMPORTED_MODULE_1__.BoletoDetailsPage]
    })
], BoletoDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_boleto-details_boleto-details_module_ts.js.map