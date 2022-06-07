"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_check-ticket_check-ticket_module_ts"],{

/***/ 20559:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 53201:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 20559);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 31482)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 46659:
/*!*******************************************************************!*\
  !*** ./src/app/pages/check-ticket/check-ticket-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTicketPageRoutingModule": () => (/* binding */ CheckTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _check_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-ticket.page */ 19643);




const routes = [
    {
        path: '',
        component: _check_ticket_page__WEBPACK_IMPORTED_MODULE_0__.CheckTicketPage
    }
];
let CheckTicketPageRoutingModule = class CheckTicketPageRoutingModule {
};
CheckTicketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckTicketPageRoutingModule);



/***/ }),

/***/ 6085:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-ticket/check-ticket.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTicketPageModule": () => (/* binding */ CheckTicketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _check_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-ticket-routing.module */ 46659);
/* harmony import */ var _check_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-ticket.page */ 19643);







let CheckTicketPageModule = class CheckTicketPageModule {
};
CheckTicketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckTicketPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_check_ticket_page__WEBPACK_IMPORTED_MODULE_1__.CheckTicketPage]
    })
], CheckTicketPageModule);



/***/ }),

/***/ 19643:
/*!*********************************************************!*\
  !*** ./src/app/pages/check-ticket/check-ticket.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTicketPage": () => (/* binding */ CheckTicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./check-ticket.page.html */ 99332);
/* harmony import */ var _check_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-ticket.page.scss */ 58189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 53201);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/boleto.service */ 27101);
/* harmony import */ var src_app_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encryption.service */ 47728);
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ticket.service */ 91257);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 6588);
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuarios.service */ 30682);













let CheckTicketPage = class CheckTicketPage {
    constructor(usuarioService, activatedRoute, fb, ticketService, boletoService, encrypter, router, navCtrl, toastService) {
        this.usuarioService = usuarioService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.ticketService = ticketService;
        this.boletoService = boletoService;
        this.encrypter = encrypter;
        this.router = router;
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.usuarios = [];
        this.takePicture = () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.file = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
            });
            console.log(this.file);
        });
        this.form = this.fb.group({
            multipartFile: [null],
        });
        this.formTicket = this.fb.group({
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
            nticket: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
            comercio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
            fechayhora: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2)]],
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUsuarios();
            this.boleto = yield this.boletoService.getBoleto(yield this.getURLBoleto());
            console.log(yield this.getURLBoleto());
            console.log(this.boleto);
        });
    }
    getUsuarios(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (id != undefined && id > -1) {
                this.usuarioService.getUsuarios(id);
            }
            else {
                this.usuarios = yield this.usuarioService.getUsuarios();
            }
        });
    }
    getURLBoleto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            return Number(yield this.decryptIdBoleto(this.activatedRoute.snapshot.paramMap.get('boleto')));
        });
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let ticket = {
                id: -1,
                nombreCliente: this.formTicket.get('nombre').value,
                telefono: this.formTicket.get('telefono').value,
                numeroTicket: Number(this.formTicket.get('nticket').value),
                fechaTicket: this.formatterFecha(this.formTicket.get('fechayhora').value),
                nombreComercio: this.formTicket.get('comercio').value,
                foto: '',
                boleto: this.boleto,
            };
            if (this.file == null) {
                this.toastService.showToast('Debe tomar una foto del ticket', 'danger');
                return;
            }
            let multipartFile = yield this.urltoFile(this.file.dataUrl, 'foto', 'image/png');
            console.log(multipartFile);
            var formData = new FormData();
            formData.append('ticket', new Blob([JSON.stringify(ticket)], {
                type: 'application/json',
            }));
            formData.append('multipartFile', multipartFile);
            yield this.ticketService.createTicket(formData).then((response) => {
                console.log(response);
            }).catch((error) => {
                this.toastService.showToast('Error al guardar el ticket', 'danger');
                this.toastService.showToast('Póngase en contacto con el administrador.', 'danger');
            });
            const dato = { state: { example: this.boleto } };
            // this.router.navigate(['/movimientos-sua'], dato);
            console.log('entro');
            this.router.navigate(['rascaygana'], dato);
        });
    }
    urltoFile(url, filename, mimeType) {
        return fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        });
    }
    formatterFecha(fecha) {
        return fecha.split('T')[0];
    }
    decryptIdBoleto(idBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            return this.encrypter.decrypt(idBoleto);
        });
    }
};
CheckTicketPage.ctorParameters = () => [
    { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__.UsuariosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__.TicketService },
    { type: src_app_services_boleto_service__WEBPACK_IMPORTED_MODULE_3__.BoletoService },
    { type: src_app_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService }
];
CheckTicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-check-ticket',
        template: _C_Users_Antonio_Desktop_ProyectoEmpresas_ryg_frontend_ryg_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_check_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckTicketPage);



/***/ }),

/***/ 27101:
/*!********************************************!*\
  !*** ./src/app/services/boleto.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoletoService": () => (/* binding */ BoletoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let BoletoService = class BoletoService {
    constructor(http) {
        this.http = http;
        this.apiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.endpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletos + "/";
    }
    getBoletos(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                let boleto;
                if (id_boleto) {
                    endpoint += id_boleto;
                }
                try {
                    boleto = (yield this.http.get(endpoint).toPromise());
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoleto(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + id_boleto;
                let boleto;
                try {
                    boleto = (yield this.http.get(endpoint).toPromise());
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosEntregados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletosEntregados;
                let boletos;
                try {
                    boletos = yield this.http.get(endpoint).toPromise();
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosCanjeados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletoscanjeados;
                let boletos;
                try {
                    boletos = (yield this.http.get(endpoint).toPromise());
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    getBoletosByUsuario(id_usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_usuario && id_usuario > -1) {
                    let endpoint = this.apiEndpoint + id_usuario;
                    let boletos;
                    try {
                        boletos = (yield this.http.get(endpoint).toPromise());
                        resolve(boletos);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    reject();
                }
            }));
        });
    }
    getBoletoSorteo(id_usuario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_usuario && id_usuario > -1) {
                    let endpoint = this.apiEndpoint + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEnviroment.apiBoletosSorteo + "/" + id_usuario;
                    let boletos;
                    try {
                        boletos = (yield this.http.get(endpoint).toPromise());
                        resolve(boletos);
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else {
                    reject("id_usuario mal introducido");
                }
            }));
        });
    }
    postBoleto(newBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                // let boletos: Boleto[];
                try {
                    let boleto = yield this.http.post(endpoint, newBoleto).toPromise();
                    resolve(boleto);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    putBoleto(newBoleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                let endpoint = this.apiEndpoint;
                let boletos;
                try {
                    boletos = (yield this.http.put(endpoint, newBoleto).toPromise());
                    resolve(boletos);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    deleteBoleto(id_boleto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (id_boleto && id_boleto > -1) {
                    let endpoint = this.apiEndpoint + id_boleto;
                    try {
                        yield this.http.delete(endpoint).toPromise();
                        resolve(true);
                    }
                    catch (error) {
                        reject(false);
                    }
                }
                else {
                    reject(false);
                }
            }));
        });
    }
};
BoletoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
BoletoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BoletoService);



/***/ }),

/***/ 99332:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/check-ticket/check-ticket.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"formsContainer\">\r\n    <div class=\"home\">\r\n      <ion-title class=\"title\">RASCA Y GANA</ion-title>\r\n      <div class=\"ini\">\r\n        <img src=\"../../assets/icono.png\">\r\n      </div>\r\n      <form [formGroup]=\"formTicket\" (ngSubmit)=\"guardar()\" novalidate>\r\n        <ion-label>Nombre</ion-label>\r\n        <ion-input placeholder=\"Introduce el nombre...\" class=\"input\" formControlName=\"nombre\"></ion-input>\r\n\r\n        <ion-label>Teléfono</ion-label>\r\n        <ion-input placeholder=\"Introduce el teléfono...\" class=\"input\" formControlName=\"telefono\"></ion-input>\r\n\r\n        <ion-label>Nº Ticket</ion-label>\r\n        <ion-input placeholder=\"Introduce el nº ticket...\" class=\"input\" formControlName=\"nticket\"></ion-input>\r\n\r\n        <ion-label>Comercio</ion-label>\r\n        <ion-select placeholder=\"Selecciona un comercio...\" class=\"select\" formControlName=\"comercio\">\r\n          <ion-select-option *ngFor=\"let usuario of usuarios; let i=index\">{{usuario.nombre_comercio}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-label>Fecha y Hora</ion-label>\r\n        <ion-datetime color=\"primary\" presentation=\"date\" value=\"2022-03-08\" class=\"datetime\" formControlName=\"fechayhora\"></ion-datetime>\r\n\r\n        <ion-label>*Sube tu ticket</ion-label>\r\n\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"form-group\">\r\n            <ion-button expand=\"full\" (click)=\"takePicture()\">\r\n              Tomar una foto <ion-icon name=\"camera\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n\r\n        <ion-button type=\"submit\" color=\"tertiary\" expand=\"block\">Guardar</ion-button>\r\n      </form>\r\n      <ion-label></ion-label>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 58189:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-ticket/check-ticket.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\";\n  font-weight: bold;\n  margin-top: 0;\n  position: unset !important;\n}\n\n.ini {\n  align-items: center;\n  margin-left: 40%;\n  margin-right: 40%;\n}\n\n.home {\n  color: black;\n  font-size: 14px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  align-items: center;\n  margin: 5% auto;\n  padding: 3% 3% 8% 3%;\n  background-color: #f7f7f7;\n  border-radius: 2%;\n  box-shadow: 1px 1px 10px gray;\n  max-width: 500px;\n}\n\n.input,\n.select {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  align-items: center;\n  border: 2px solid lightgray;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.973);\n  margin-top: 5px;\n  margin-bottom: 30px;\n}\n\n.datetime {\n  margin-bottom: 20px;\n}\n\n.formsContainer {\n  margin: 4%;\n}\n\nion-fab {\n  margin: 2%;\n  color: darkcyan;\n}\n\n.host {\n  background-color: #ffc107 !important;\n}\n\n.sc-ion-label-ios-h .sc-ion-label-ios-s .ios .hydrated {\n  color: #ffc107 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLXRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlGQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzSEFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTs7RUFFRSxzSEFBQTtFQUVBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLG9DQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtBQUlGIiwiZmlsZSI6ImNoZWNrLXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbmkge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxufVxyXG4uaG9tZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIHBhZGRpbmc6IDMlIDMlIDglIDMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggZ3JheTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5pbnB1dCxcclxuLnNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxyXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3Myk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmRhdGV0aW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3Jtc0NvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA0JTtcclxufVxyXG5pb24tZmFiIHtcclxuICBtYXJnaW46IDIlO1xyXG4gIGNvbG9yOiBkYXJrY3lhbjtcclxufVxyXG5cclxuLmhvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjLWlvbi1sYWJlbC1pb3MtaCAuc2MtaW9uLWxhYmVsLWlvcy1zIC5pb3MgLmh5ZHJhdGVkIHtcclxuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-ticket_check-ticket_module_ts.js.map