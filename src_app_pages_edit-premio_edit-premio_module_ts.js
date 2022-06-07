"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_edit-premio_edit-premio_module_ts"],{

/***/ 89994:
/*!*****************************************************************!*\
  !*** ./src/app/pages/edit-premio/edit-premio-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPremioPageRoutingModule": () => (/* binding */ EditPremioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_premio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-premio.page */ 80810);




const routes = [
    {
        path: '',
        component: _edit_premio_page__WEBPACK_IMPORTED_MODULE_0__.EditPremioPage
    }
];
let EditPremioPageRoutingModule = class EditPremioPageRoutingModule {
};
EditPremioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPremioPageRoutingModule);



/***/ }),

/***/ 20046:
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-premio/edit-premio.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPremioPageModule": () => (/* binding */ EditPremioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _edit_premio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-premio-routing.module */ 89994);
/* harmony import */ var _edit_premio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-premio.page */ 80810);







let EditPremioPageModule = class EditPremioPageModule {
};
EditPremioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_premio_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPremioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_premio_page__WEBPACK_IMPORTED_MODULE_1__.EditPremioPage]
    })
], EditPremioPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_edit-premio_edit-premio_module_ts.js.map