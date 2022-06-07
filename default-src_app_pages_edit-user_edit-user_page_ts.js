"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_edit-user_edit-user_page_ts"],{

/***/ 89314:
/*!***************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": () => (/* binding */ EditUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-user.page.html */ 57930);
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page.scss */ 54773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 90951);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuarios.service */ 30682);











let EditUserPage = class EditUserPage {
    constructor(modalController, renderer, fb, toast, usuarioService, authService, miLoading) {
        this.modalController = modalController;
        this.renderer = renderer;
        this.fb = fb;
        this.toast = toast;
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.miLoading = miLoading;
        this.isOpen = false;
    }
    ngOnInit() {
        this.formUsuario = this.fb.group({
            nombre_comercio: [
                this.Usuario.nombre_comercio,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            email: [
                this.Usuario.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            direccion: [
                this.Usuario.direccion,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            latitud: [
                this.Usuario.latitud,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            longitud: [
                this.Usuario.longitud,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            telefono: [
                this.Usuario.telefono,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            administrador: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
        });
    }
    ionViewDidEnter() {
        this.initMap();
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__.map('map').setView([37.66994, -4.72531], 13);
        leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
        setTimeout(() => {
            this.map.invalidateSize();
        }, 200);
        let marker = leaflet__WEBPACK_IMPORTED_MODULE_2__.marker([37.66994, -4.72531], {
            draggable: true,
        }).addTo(this.map);
        marker.on('dragend', () => {
            this.formUsuario.get('latitud').setValue(marker.getLatLng().lat);
            this.formUsuario.get('longitud').setValue(marker.getLatLng().lng);
        });
    }
    updateUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.validateEmail(this.formUsuario.get('email').value)) {
                this.miLoading.showLoading();
                let usuario = {
                    id: this.Usuario.id,
                    nombre_comercio: this.formUsuario.get('nombre_comercio').value,
                    direccion: this.formUsuario.get('direccion').value,
                    email: this.formUsuario.get('email').value,
                    latitud: this.formUsuario.get('latitud').value,
                    longitud: this.formUsuario.get('longitud').value,
                    participaciones: this.Usuario.participaciones,
                    telefono: this.formUsuario.get('telefono').value,
                    uid: this.Usuario.uid,
                    admin: false,
                    boletos: this.Usuario.boletos,
                };
                yield this.usuarioService
                    .putUsuario(usuario)
                    .then(() => {
                    this.miLoading.hideLoading();
                    this.toast.showToast('Usuario actualizado con éxito con éxito', 'success');
                    this.cerrar();
                })
                    .catch(() => {
                    this.miLoading.hideLoading();
                    this.toast.showToast('Error al actualizar el usuario', 'danger');
                });
            }
            else {
                //mal email
                this.toast.showToast('Has introducido un email inválido', 'warning');
            }
        });
    }
    //cerrar modal
    cerrar() {
        this.modalController.dismiss();
    }
    clickMapButton() {
        this.isOpen = this.isOpen ? false : true;
        if (this.isOpen) {
            this.show();
        }
        else {
            this.hide();
        }
        console.log(this.isOpen);
    }
    show() {
        const parent = document.getElementById('map');
        this.renderer.setStyle(parent, 'display', 'block');
        setTimeout(() => {
            this.map.invalidateSize(true);
        }, 200);
    }
    hide() {
        const parent = document.getElementById('map');
        this.renderer.setStyle(parent, 'display', 'none');
        setTimeout(() => {
            this.map.invalidateSize(true);
        }, 200);
    }
    mostrarContrasena() {
        if (this.password.type == 'password') {
            this.password.type = 'text';
        }
        else {
            this.password.type = 'password';
        }
    }
    get isPassword() {
        return this.password.type == 'password';
    }
    validateEmail(email) {
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    }
    validatePassword(pass) {
        let validate = pass.length > 5 ? true : false;
        return validate;
    }
};
EditUserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2 },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__.UsuariosService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
EditUserPage.propDecorators = {
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['password',] }],
    Usuario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
EditUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-user',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUserPage);



/***/ }),

/***/ 57930:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/edit-user/edit-user.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>EDITAR USUARIO</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"close-circle\" style=\"zoom:2.0\" (click)=\"cerrar()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"home\">\r\n    <form [formGroup]=\"formUsuario\" (ngSubmit)=\"updateUsuario()\" novalidate>\r\n      <ion-item lines=\"full\" class=\"input\">\r\n        <ion-label position=\"floating\" class=\"label\">Nombre del Comercio</ion-label>\r\n        <ion-input formControlName=\"nombre_comercio\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\" class=\"input\">\r\n        <ion-label position=\"floating\" class=\"label\">Correo Electrónico</ion-label>\r\n        <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\" class=\"input\">\r\n        <ion-label position=\"floating\" class=\"label\">Telefono</ion-label>\r\n        <ion-input formControlName=\"telefono\" type=\"number\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"full\" class=\"input\">\r\n        <ion-label position=\"floating\" class=\"label\">Dirección</ion-label>\r\n        <ion-input formControlName=\"direccion\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"no-click\">\r\n        <ion-label position=\"floating\" class=\"label\">Latitud y Longitud</ion-label>\r\n        <ion-input formControlName=\"latitud\" type=\"number\" required></ion-input>\r\n        <ion-input formControlName=\"longitud\" type=\"number\" required></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-button type=\"button\" (click)=\"clickMapButton()\" color=\"tertiary\" expand=\"block\">ABRIR MAPA</ion-button>\r\n      <div class=\"map\" id=\"map\"></div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" color=\"tertiary\" expand=\"block\">ACTUALIZAR</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 54773:
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#map {\n  height: 180px;\n  display: none;\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n.label {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0Usd0VBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0Usb0JBQUE7QUFHRjs7QUFEQTtFQUNFLHdFQUFBO0FBSUYiLCJmaWxlIjoiZWRpdC11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhvbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAvL3BhZGRpbmc6MTVweCAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NzMpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uby1jbGljayB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8vVGhpcyBtYWtlcyBpdCBub3QgY2xpY2thYmxlXHJcbn1cclxuLmxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_edit-user_edit-user_page_ts.js.map