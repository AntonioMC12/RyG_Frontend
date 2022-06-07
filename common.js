"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 35862:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};




/***/ }),

/***/ 93014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 95159:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 74551:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./explore-container.component.html */ 29651);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 86732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 40456:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 74551);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 60797:
/*!***********************************************************!*\
  !*** ./src/app/pages/create-premio/create-premio.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePremioPage": () => (/* binding */ CreatePremioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_premio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-premio.page.html */ 86593);
/* harmony import */ var _create_premio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-premio.page.scss */ 99764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/premio.service */ 90383);
/* harmony import */ var _crear_boleto_crear_boleto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crear-boleto/crear-boleto.page */ 78151);








let CreatePremioPage = class CreatePremioPage {
    constructor(modalController, fb, apiPremio) {
        this.modalController = modalController;
        this.fb = fb;
        this.apiPremio = apiPremio;
    }
    ngOnInit() {
        this.formPremio = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    /**
     * Cierra el modal
     */
    cerrar() {
        this.modalController.dismiss();
    }
    /**
     * Pasar a la pag siguiente
     *
     */
    siguiente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newPremio = {
                id: -1,
                description: this.formPremio.get('description').value,
                entregado: false,
            };
            this.modalController.dismiss();
            const modal = yield this.modalController.create({
                component: _crear_boleto_crear_boleto_page__WEBPACK_IMPORTED_MODULE_3__.CrearBoletoPage,
                cssClass: 'my-custom-class',
                componentProps: { newPremio },
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
};
CreatePremioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_2__.PremioService }
];
CreatePremioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-premio',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_premio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_premio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatePremioPage);



/***/ }),

/***/ 80810:
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-premio/edit-premio.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPremioPage": () => (/* binding */ EditPremioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_premio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-premio.page.html */ 21239);
/* harmony import */ var _edit_premio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-premio.page.scss */ 26521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/premio.service */ 90383);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);









let EditPremioPage = class EditPremioPage {
    constructor(modalController, api, fb, toast, miLoading) {
        this.modalController = modalController;
        this.api = api;
        this.fb = fb;
        this.toast = toast;
        this.miLoading = miLoading;
    }
    ngOnInit() {
        this.formPremio = this.fb.group({
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    /**
     * Cierra el modal
     */
    cerrar() {
        this.modalController.dismiss();
    }
    /**
     * Edita un haciendo uso del servicio -> PremioService
     */
    editPremio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newPremio = {
                id: this.premio.id,
                description: this.formPremio.get("description").value,
                entregado: this.premio.entregado
            };
            try {
                yield this.api.updatePremio(newPremio);
                yield this.formPremio.reset();
                yield this.toast.showToast("Premio editado correctamente", "tertiary");
                this.cerrar();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
EditPremioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_premio_service__WEBPACK_IMPORTED_MODULE_3__.PremioService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService }
];
EditPremioPage.propDecorators = {
    premio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
EditPremioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-premio',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_premio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_premio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPremioPage);



/***/ }),

/***/ 68300:
/*!***********************************************!*\
  !*** ./src/app/pages/qr-page/qr-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePage": () => (/* binding */ QrPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./qr-page.page.html */ 52026);
/* harmony import */ var _qr_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-page.page.scss */ 53112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/boleto.service */ 27101);
/* harmony import */ var src_app_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encryption.service */ 47728);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 63339);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);








let QrPagePage = class QrPagePage {
    constructor(boletoService, loadingService, encrypter, toastService) {
        this.boletoService = boletoService;
        this.loadingService = loadingService;
        this.encrypter = encrypter;
        this.toastService = toastService;
        this.boletosFilter = new Array();
        this.isQRReady = false;
        this.url = 'https://ryg.netlify.app/check-ticket/';
    }
    /**
     * Cada vez que inicia la pagina, debe consultar los boletos que hay
     * elegir uno comprobando que el boleto no esté entregado ni cangeado,
     * una vez el boleto esté elegido, debemos updatearlo como entregado y
     * redirigir al usuario a la pagina del ticket asociado a dicho boleto.
     */
    ngOnInit() { }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingService.showLoading();
            let selectedBoleto = yield this.setBoletoAsEntregado(yield this.pickRandomBoleto())
                .then((boleto) => {
                this.toastService.showToast('Boleto generado correctamente', 'success');
                return boleto;
            }).catch((error) => {
                this.toastService.showToast('Error al generar el boleto', 'danger');
                this.loadingService.hideLoading();
                return null;
            });
            if (selectedBoleto != null) {
                this.url = this.url.concat(this.encryptBoletoId(selectedBoleto.id));
                console.log(this.url);
                this.isQRReady = true;
                this.loadingService.hideLoading();
            }
        });
    }
    //funcion para generar el boleto random
    pickRandomBoleto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllBoletosFromDataBase();
            this.filterBoletosNoCangeadosAndEntregado();
            return this.getRandomTicketFromFilterBoletos();
        });
    }
    //consultar los boletos que hay y los guarda en el array boletos local.
    getAllBoletosFromDataBase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.boletos = yield this.boletoService.getBoletos();
        });
    }
    //filtrar los boletos no entregados y cangeados.
    filterBoletosNoCangeadosAndEntregado() {
        for (let index = 0, subIndex = 0; index < this.boletos.length; index++) {
            if (this.isNotCanjeadoAndEntregado(this.boletos[index])) {
                this.boletosFilter[subIndex] = this.boletos[index];
                subIndex++;
            }
        }
        return this.boletosFilter;
    }
    //comprobar que un boleto no es entregado ni canjeado.
    isNotCanjeadoAndEntregado(element) {
        if (!element.canjeado && !element.entregado)
            return true;
    }
    //elegir un ticket aleatorio desde el listado filtrado
    getRandomTicketFromFilterBoletos() {
        let randomIndex = Math.floor(Math.random() * this.boletosFilter.length);
        return this.boletosFilter[randomIndex];
    }
    setBoletoAsEntregado(boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            boleto.entregado = true;
            return yield this.boletoService.putBoleto(boleto);
        });
    }
    encryptBoletoId(idBoleto) {
        return this.encrypter.encrypt(idBoleto.toString());
    }
};
QrPagePage.ctorParameters = () => [
    { type: src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_2__.BoletoService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
QrPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-qr-page',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_qr_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrPagePage);



/***/ }),

/***/ 29651:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/explore-container/explore-container.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 86593:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/create-premio/create-premio.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>Crear Premio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon\r\n        name=\"close-circle\"\r\n        class=\"close-btn\"\r\n        (click)=\"cerrar()\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"home\">\r\n    <form [formGroup]=\"formPremio\">\r\n      <ion-label>Introduce la descripción del premio:</ion-label>\r\n      <ion-item class=\"input\">\r\n        <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button\r\n   \r\n        expand=\"full\"\r\n        color=\"tertiary\"\r\n        type=\"submit\"\r\n      \r\n        [disabled]=\"this.formPremio.invalid\"\r\n        (click)=\"siguiente()\"\r\n        >Siguiente</ion-button\r\n      >\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 21239:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/edit-premio/edit-premio.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"warning\" class=\"header\">\r\n    <ion-title>Editar Premio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"close-circle\" style=\"zoom:2.0\" (click)=\"cerrar()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"home\">\r\n  <form [formGroup]=\"formPremio\">\r\n    <ion-label>Introduce la nueva descripción del premio:</ion-label>\r\n    <ion-item class=\"input\">  \r\n      <ion-input placeholder=\"Introduce descripción...\" type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n   \r\n    <ion-button expand=\"full\" color=\"tertiary\" type=\"submit\" [disabled]=\"this.formPremio.invalid\" (click)=\"editPremio()\">Actualizar premio</ion-button>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 52026:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/qr-page/qr-page.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"body\">\r\n  <div class=\"qr-card\">\r\n    <ion-card *ngIf=\"isQRReady\">\r\n      <qr-code class=\"center\" [value]=this.url [size]=\"300\" [level]=\"\"></qr-code>\r\n    </ion-card>\r\n    <h3 class=\"card-title\">Escanea el QR para obtener tu Boleto</h3>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 86732:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 99764:
/*!*************************************************************!*\
  !*** ./src/app/pages/create-premio/create-premio.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 20%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.close-btn {\n  zoom: 2;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcmVtaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsa0JBQUE7RUFDRyx3RUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHdFQUFBO0VBRUEsbUJBQUE7RUFDSCxrQkFBQTtFQUNBLHNDQUFBO0VBQ0csZ0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJjcmVhdGUtcHJlbWlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcblxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmhvbWV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG5cclxufVxyXG4uaW5wdXR7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0Ly9wYWRkaW5nOjE1cHggMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcblx0YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTczKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICB6b29tOiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 26521:
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-premio/edit-premio.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n.home {\n  color: black;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 20%;\n}\n\n.input {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  align-items: center;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJlbWlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGtCQUFBO0VBQ0csd0VBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSx3RUFBQTtFQUVBLG1CQUFBO0VBQ0gsa0JBQUE7RUFDQSxzQ0FBQTtFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJlZGl0LXByZW1pby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdFxyXG59XHJcbi5ob21le1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIFxyXG59XHJcbi5pbnB1dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHQvL3BhZGRpbmc6MTVweCAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOjVweDtcclxuXHRiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NzMpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 53112:
/*!*************************************************!*\
  !*** ./src/app/pages/qr-page/qr-page.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".body {\n  align-content: center;\n  background-color: #FFC107;\n  display: flex;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  height: 100%;\n  justify-content: center;\n}\n\n.qr-card {\n  background-color: #fcfcfc;\n  border-radius: 16px;\n  max-width: 500px;\n  padding: 16px;\n  text-align: center;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n\n.card-title {\n  color: #222;\n  margin-top: 10%;\n}\n\n@keyframes colorChange {\n  0% {\n    color: #1A1A40;\n  }\n  25% {\n    color: #270082;\n  }\n  50% {\n    color: #7A0BC0;\n  }\n  75% {\n    color: #FA58B6;\n  }\n  100% {\n    color: #1A1A40;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDRyxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFDRDs7QUFHQTtFQUNDO0lBQUssY0FBQTtFQUNKO0VBQUE7SUFBTSxjQUFBO0VBR047RUFGQTtJQUFNLGNBQUE7RUFLTjtFQUpBO0lBQU0sY0FBQTtFQU9OO0VBTkQ7SUFBTyxjQUFBO0VBU047QUFDRiIsImZpbGUiOiJxci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xci1jYXJkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG5cdGNvbG9yOiAjMjIyO1xyXG5cdG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgY29sb3JDaGFuZ2Uge1xyXG5cdDAlIHsgY29sb3I6ICMxQTFBNDA7IH1cclxuIFx0MjUlIHsgY29sb3I6ICMyNzAwODI7IH1cclxuIFx0NTAlIHsgY29sb3I6ICM3QTBCQzA7IH1cclxuIFx0NzUlIHsgY29sb3I6ICNGQTU4QjY7IH1cclxuXHQxMDAlIHsgY29sb3I6ICMxQTFBNDA7IH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=common.js.map