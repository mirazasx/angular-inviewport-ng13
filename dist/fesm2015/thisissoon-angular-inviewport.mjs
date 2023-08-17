import * as i0 from '@angular/core';
import { InjectionToken, EventEmitter, Directive, Inject, Input, Output, HostBinding, NgModule } from '@angular/core';

const WINDOW = new InjectionToken('WINDOW', {
    providedIn: 'root',
    factory: () => window,
});

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
class InViewportDirective {
    constructor(el, window) {
        this.el = el;
        this.window = window;
        this.inViewportChange = new EventEmitter();
        this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
    }
    get isInViewport() {
        return this.inViewport;
    }
    get isNotInViewport() {
        return !this.inViewport;
    }
    ngOnInit() {
        if (!this.hasIntersectionObserver) {
            this.inViewport = true;
            this.inViewportChange.emit(this.inViewport);
        }
    }
    ngAfterViewInit() {
        if (this.hasIntersectionObserver) {
            const IntersectionObserver = this.window['IntersectionObserver'];
            this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), this.inViewportOptions);
            this.observer.observe(this.el.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
        }
    }
    intersectionObserverCallback(entries) {
        entries.forEach((entry) => {
            if (this.inViewport === entry.isIntersecting)
                return;
            this.inViewport = entry.isIntersecting;
            this.inViewportChange.emit(this.inViewport);
        });
    }
    intersectionObserverFeatureDetection() {
        // Exits early if all IntersectionObserver and IntersectionObserverEntry
        // features are natively supported.
        if ('IntersectionObserver' in this.window &&
            'IntersectionObserverEntry' in this.window) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            if (!('isIntersecting' in
                this.window['IntersectionObserverEntry']['prototype'])) {
                Object.defineProperty(this.window['IntersectionObserverEntry']['prototype'], 'isIntersecting', {
                    get: function () {
                        return this.intersectionRatio > 0;
                    },
                });
            }
            return true;
        }
        return false;
    }
}
InViewportDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportDirective, deps: [{ token: i0.ElementRef }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Directive });
InViewportDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: InViewportDirective, selector: "[snInViewport]", inputs: { inViewportOptions: "inViewportOptions" }, outputs: { inViewportChange: "inViewportChange" }, host: { properties: { "class.sn-viewport--in": "this.isInViewport", "class.sn-viewport--out": "this.isNotInViewport" } }, exportAs: ["snInViewport"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[snInViewport]',
                    exportAs: 'snInViewport',
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: Window, decorators: [{
                        type: Inject,
                        args: [WINDOW]
                    }] }];
    }, propDecorators: { inViewportOptions: [{
                type: Input
            }], inViewportChange: [{
                type: Output
            }], isInViewport: [{
                type: HostBinding,
                args: ['class.sn-viewport--in']
            }], isNotInViewport: [{
                type: HostBinding,
                args: ['class.sn-viewport--out']
            }] } });

const WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER = {
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
    addEventListener: (...args) => null,
    alert: (...args) => null,
    atob: (...args) => null,
    blur: (...args) => null,
    btoa: (...args) => null,
    clearInterval: (...args) => null,
    clearTimeout: (...args) => null,
    close: (...args) => null,
    confirm: (...args) => null,
    focus: (...args) => null,
    getComputedStyle: (...args) => null,
    getSelection: (...args) => null,
    matchMedia: (...args) => null,
    moveBy: (...args) => null,
    moveTo: (...args) => null,
    open: (...args) => null,
    print: (...args) => null,
    prompt: (...args) => null,
    resizeBy: (...args) => null,
    resizeTo: (...args) => null,
    removeEventListener: (...args) => null,
    scroll: (...args) => null,
    scrollBy: (...args) => null,
    scrollTo: (...args) => null,
    setInterval: (...args) => null,
    setTimeout: (...args) => null,
    stop: (...args) => null,
};
const WINDOW_MOCK = Object.assign(Object.assign({}, WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER), { IntersectionObserver: function (...args) {
        this.observe = () => null;
        this.unobserve = () => null;
    }, IntersectionObserverEntry: class IntersectionObserverEntryMock {
    } });

/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browsers viewport and adds a
 * sn-viewport--in or sn-viewport--out class to the element.
 */
class InViewportModule {
    static forServer() {
        return {
            ngModule: InViewportModule,
            providers: [{ provide: WINDOW, useValue: WINDOW_MOCK }],
        };
    }
}
InViewportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InViewportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportModule, declarations: [InViewportDirective], exports: [InViewportDirective] });
InViewportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: InViewportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InViewportDirective],
                    exports: [InViewportDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InViewportDirective, InViewportModule, WINDOW, WINDOW_MOCK };
//# sourceMappingURL=thisissoon-angular-inviewport.mjs.map
