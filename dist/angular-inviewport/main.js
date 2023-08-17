"use strict";
(self["webpackChunkangular_inviewport"] = self["webpackChunkangular_inviewport"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _in_viewport_in_viewport_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-viewport/in-viewport.directive */ 6650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






var _c0 = function _c0(a0) {
  return [a0];
};

function AppComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amet tempor excepteur occaecat nulla. Aute deserunt esse duis velit mollit exercitation nisi officia. Anim do irure cillum esse esse ea magna elit. Velit reprehenderit eiusmod aliqua do reprehenderit elit commodo enim do deserunt consequat ea elit. Incididunt dolore officia consectetur anim ex ea commodo ullamco veniam ipsum esse amet cupidatat commodo. Id consequat duis aliqua minim aliquip enim officia elit. Sint est fugiat ex ex proident ad veniam do excepteur.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, "index" + i_r2))("inViewportOptions", ctx_r0.options);
  }
}

var _c1 = function _c1(a0) {
  return {
    "highlight": a0
  };
};

var AppComponent = /*#__PURE__*/function () {
  function AppComponent() {
    (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.highlight = false;
    this.options = {
      rootMargin: '-100px 0px 50px 0px'
    };
    this.bigMockData = new Array(100);
  }

  (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "onInViewportChange",
    value: function onInViewportChange(inViewport) {
      this.highlight = inViewport;
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["sn-root"]],
  decls: 18,
  vars: 5,
  consts: [[1, "spacer"], ["snInViewport", "", 1, "element--small", 3, "ngClass", "inViewportChange"], ["snInViewport", "", 1, "element--large"], [1, "scrollable"], ["snInViewport", "", 1, "scrollable__inner"], ["snInViewport", "", 1, "element--has-options", 3, "inViewportOptions"], ["class", "element--has-options", "snInViewport", "", 3, "ngClass", "inViewportOptions", 4, "ngFor", "ngForOf"], ["snInViewport", "", 1, "element--has-options", 3, "ngClass", "inViewportOptions"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Scroll down \u2193 and right \u2192");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("inViewportChange", function AppComponent_Template_p_inViewportChange_3_listener($event) {
        return ctx.onInViewportChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Amet tempor excepteur occaecat nulla. Aute deserunt esse duis velit mollit exercitation nisi officia. Anim do irure cillum esse esse ea magna elit. Velit reprehenderit eiusmod aliqua do reprehenderit elit commodo enim do deserunt consequat ea elit. Incididunt dolore officia consectetur anim ex ea commodo ullamco veniam ipsum esse amet cupidatat commodo. Id consequat duis aliqua minim aliquip enim officia elit. Sint est fugiat ex ex proident ad veniam do excepteur.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "very large element");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Element inside scrollable div ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Amet tempor excepteur occaecat nulla. Aute deserunt esse duis velit mollit exercitation nisi officia. Anim do irure cillum esse esse ea magna elit. Velit reprehenderit eiusmod aliqua do reprehenderit elit commodo enim do deserunt consequat ea elit. Incididunt dolore officia consectetur anim ex ea commodo ullamco veniam ipsum esse amet cupidatat commodo. Id consequat duis aliqua minim aliquip enim officia elit. Sint est fugiat ex ex proident ad veniam do excepteur.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Performance test for browsers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AppComponent_p_17_Template, 2, 4, "p", 6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx.highlight));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inViewportOptions", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bigMockData);
    }
  },
  directives: [_in_viewport_in_viewport_directive__WEBPACK_IMPORTED_MODULE_2__.InViewportDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["[_nghost-%COMP%] {\n  font-family: Roboto, sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 200vw;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: yellow;\n}\n\n.element--large[_ngcontent-%COMP%] {\n  background: palegreen;\n  min-height: 200vh;\n}\n\n.element--has-options.sn-viewport--in[_ngcontent-%COMP%] {\n  background-color: pink;\n  color: black;\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n}\n\n.scrollable__inner[_ngcontent-%COMP%] {\n  background-color: blueviolet;\n  color: white;\n}\n\n.scrollable__inner.sn-viewport--in[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDIwMHZ3O1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuXG4uZWxlbWVudC0tbGFyZ2Uge1xuICBiYWNrZ3JvdW5kOiBwYWxlZ3JlZW47XG4gIG1pbi1oZWlnaHQ6IDIwMHZoO1xufVxuXG4uZWxlbWVudC0taGFzLW9wdGlvbnMge1xuICAmLnNuLXZpZXdwb3J0LS1pbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNjcm9sbGFibGVfX2lubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICYuc24tdmlld3BvcnQtLWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _in_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-viewport */ 128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var AppModule = /*#__PURE__*/(0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _in_viewport__WEBPACK_IMPORTED_MODULE_3__.InViewportModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _in_viewport__WEBPACK_IMPORTED_MODULE_3__.InViewportModule]
  });
})();

/***/ }),

/***/ 6650:
/*!******************************************************!*\
  !*** ./src/app/in-viewport/in-viewport.directive.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InViewportDirective": function() { return /* binding */ InViewportDirective; }
/* harmony export */ });
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _window_window_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/window-token */ 2575);





/**
 * A simple lightweight library for Angular with that detects when an
 * element is within the browsers viewport and adds a `in-viewport` or
 * `not-in-viewport` class to the element.
 *
 * @example
 * ```html
 * <p
 *  class="foo"
 *  snInViewport
 *  (inViewportChange)="myEventHandler($event)">
 *  Amet tempor excepteur occaecat nulla.
 * </p>
 * ```
 */
// @dynamic

var InViewportDirective = /*#__PURE__*/function () {
  function InViewportDirective(el, window) {
    (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InViewportDirective);

    this.el = el;
    this.window = window;
    this.inViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
  }

  (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InViewportDirective, [{
    key: "isInViewport",
    get: function get() {
      return this.inViewport;
    }
  }, {
    key: "isNotInViewport",
    get: function get() {
      return !this.inViewport;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.hasIntersectionObserver) {
        this.inViewport = true;
        this.inViewportChange.emit(this.inViewport);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (this.hasIntersectionObserver) {
        var IntersectionObserver = this.window['IntersectionObserver'];
        this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), this.inViewportOptions);
        this.observer.observe(this.el.nativeElement);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.observer) {
        this.observer.unobserve(this.el.nativeElement);
      }
    }
  }, {
    key: "intersectionObserverCallback",
    value: function intersectionObserverCallback(entries) {
      var _this = this;

      entries.forEach(function (entry) {
        if (_this.inViewport === entry.isIntersecting) return;
        _this.inViewport = entry.isIntersecting;

        _this.inViewportChange.emit(_this.inViewport);
      });
    }
  }, {
    key: "intersectionObserverFeatureDetection",
    value: function intersectionObserverFeatureDetection() {
      // Exits early if all IntersectionObserver and IntersectionObserverEntry
      // features are natively supported.
      if ('IntersectionObserver' in this.window && 'IntersectionObserverEntry' in this.window) {
        // Minimal polyfill for Edge 15's lack of `isIntersecting`
        // See: https://github.com/w3c/IntersectionObserver/issues/211
        if (!('isIntersecting' in this.window['IntersectionObserverEntry']['prototype'])) {
          Object.defineProperty(this.window['IntersectionObserverEntry']['prototype'], 'isIntersecting', {
            get: function get() {
              return this.intersectionRatio > 0;
            }
          });
        }

        return true;
      }

      return false;
    }
  }]);

  return InViewportDirective;
}();

InViewportDirective.ɵfac = function InViewportDirective_Factory(t) {
  return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_window_window_token__WEBPACK_IMPORTED_MODULE_2__.WINDOW));
};

InViewportDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: InViewportDirective,
  selectors: [["", "snInViewport", ""]],
  hostVars: 4,
  hostBindings: function InViewportDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sn-viewport--in", ctx.isInViewport)("sn-viewport--out", ctx.isNotInViewport);
    }
  },
  inputs: {
    inViewportOptions: "inViewportOptions"
  },
  outputs: {
    inViewportChange: "inViewportChange"
  },
  exportAs: ["snInViewport"]
});

/***/ }),

/***/ 601:
/*!***************************************************!*\
  !*** ./src/app/in-viewport/in-viewport.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InViewportModule": function() { return /* binding */ InViewportModule; }
/* harmony export */ });
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _in_viewport_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-viewport.directive */ 6650);
/* harmony import */ var _window_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/window-token */ 2575);
/* harmony import */ var _window_window_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window/window-mock */ 1374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browsers viewport and adds a
 * sn-viewport--in or sn-viewport--out class to the element.
 */

var InViewportModule = /*#__PURE__*/function () {
  function InViewportModule() {
    (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InViewportModule);
  }

  (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InViewportModule, null, [{
    key: "forServer",
    value: function forServer() {
      return {
        ngModule: InViewportModule,
        providers: [{
          provide: _window_window_token__WEBPACK_IMPORTED_MODULE_3__.WINDOW,
          useValue: _window_window_mock__WEBPACK_IMPORTED_MODULE_4__.WINDOW_MOCK
        }]
      };
    }
  }]);

  return InViewportModule;
}();

InViewportModule.ɵfac = function InViewportModule_Factory(t) {
  return new (t || InViewportModule)();
};

InViewportModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: InViewportModule
});
InViewportModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InViewportModule, {
    declarations: [_in_viewport_directive__WEBPACK_IMPORTED_MODULE_2__.InViewportDirective],
    exports: [_in_viewport_directive__WEBPACK_IMPORTED_MODULE_2__.InViewportDirective]
  });
})();

/***/ }),

/***/ 128:
/*!**************************************!*\
  !*** ./src/app/in-viewport/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InViewportDirective": function() { return /* reexport safe */ _in_viewport_directive__WEBPACK_IMPORTED_MODULE_0__.InViewportDirective; },
/* harmony export */   "InViewportModule": function() { return /* reexport safe */ _in_viewport_module__WEBPACK_IMPORTED_MODULE_1__.InViewportModule; }
/* harmony export */ });
/* harmony import */ var _in_viewport_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./in-viewport.directive */ 6650);
/* harmony import */ var _in_viewport_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-viewport.module */ 601);



/***/ }),

/***/ 1374:
/*!***************************************!*\
  !*** ./src/app/window/window-mock.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW_MOCK": function() { return /* binding */ WINDOW_MOCK; },
/* harmony export */   "WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER": function() { return /* binding */ WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER; }
/* harmony export */ });
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER = {
  closed: null,
  defaultStatus: null,
  document: null,
  frameElement: null,
  frames: null,
  history: null,
  innerHeight: null,
  innerWidth: null,
  length: null,
  localStorage: null,
  location: null,
  name: null,
  navigator: null,
  opener: null,
  outerHeight: null,
  outerWidth: null,
  pageXOffset: null,
  pageYOffset: null,
  parent: null,
  screen: null,
  screenLeft: null,
  screenTop: null,
  screenX: null,
  screenY: null,
  sessionStorage: null,
  scrollX: null,
  scrollY: null,
  self: null,
  status: null,
  top: null,
  addEventListener: function addEventListener() {
    return null;
  },
  alert: function alert() {
    return null;
  },
  atob: function atob() {
    return null;
  },
  blur: function blur() {
    return null;
  },
  btoa: function btoa() {
    return null;
  },
  clearInterval: function clearInterval() {
    return null;
  },
  clearTimeout: function clearTimeout() {
    return null;
  },
  close: function close() {
    return null;
  },
  confirm: function confirm() {
    return null;
  },
  focus: function focus() {
    return null;
  },
  getComputedStyle: function getComputedStyle() {
    return null;
  },
  getSelection: function getSelection() {
    return null;
  },
  matchMedia: function matchMedia() {
    return null;
  },
  moveBy: function moveBy() {
    return null;
  },
  moveTo: function moveTo() {
    return null;
  },
  open: function open() {
    return null;
  },
  print: function print() {
    return null;
  },
  prompt: function prompt() {
    return null;
  },
  resizeBy: function resizeBy() {
    return null;
  },
  resizeTo: function resizeTo() {
    return null;
  },
  removeEventListener: function removeEventListener() {
    return null;
  },
  scroll: function scroll() {
    return null;
  },
  scrollBy: function scrollBy() {
    return null;
  },
  scrollTo: function scrollTo() {
    return null;
  },
  setInterval: function setInterval() {
    return null;
  },
  setTimeout: function setTimeout() {
    return null;
  },
  stop: function stop() {
    return null;
  }
};
var WINDOW_MOCK = Object.assign(Object.assign({}, WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER), {
  IntersectionObserver: function IntersectionObserver() {
    this.observe = function () {
      return null;
    };

    this.unobserve = function () {
      return null;
    };
  },
  IntersectionObserverEntry: /*#__PURE__*/(0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function IntersectionObserverEntryMock() {
    (0,_Users_mantasgudelevicius_Projects_angular_inviewport_ng13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IntersectionObserverEntryMock);
  })
});

/***/ }),

/***/ 2575:
/*!****************************************!*\
  !*** ./src/app/window/window-token.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": function() { return /* binding */ WINDOW; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WINDOW', {
  providedIn: 'root',
  factory: function factory() {
    return window;
  }
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

document.addEventListener('DOMContentLoaded', function () {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
    return console.log(err);
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map