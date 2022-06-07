"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_create-user_create-user_module_ts"],{

/***/ 21812:
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-user/create-user-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageRoutingModule": () => (/* binding */ CreateUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user.page */ 72119);




const routes = [
    {
        path: '',
        component: _create_user_page__WEBPACK_IMPORTED_MODULE_0__.CreateUserPage
    }
];
let CreateUserPageRoutingModule = class CreateUserPageRoutingModule {
};
CreateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateUserPageRoutingModule);



/***/ }),

/***/ 97646:
/*!*********************************************************!*\
  !*** ./src/app/pages/create-user/create-user.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageModule": () => (/* binding */ CreateUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user-routing.module */ 21812);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.page */ 72119);







let CreateUserPageModule = class CreateUserPageModule {
};
CreateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateUserPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_1__.CreateUserPage]
    })
], CreateUserPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_create-user_create-user_module_ts.js.map