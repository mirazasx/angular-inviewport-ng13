import { Directive, HostBinding, EventEmitter, Output, Inject, Input, } from '@angular/core';
import { WINDOW } from '../window/window-token';
import * as i0 from "@angular/core";
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
export class InViewportDirective {
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; }, propDecorators: { inViewportOptions: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tdmlld3BvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9pbi12aWV3cG9ydC9pbi12aWV3cG9ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFHTixNQUFNLEVBQ04sS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFaEQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxXQUFXO0FBS1gsTUFBTSxPQUFPLG1CQUFtQjtJQW1COUIsWUFBb0IsRUFBYyxFQUEwQixNQUFjO1FBQXRELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBMEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWIxRSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBYzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBWkQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQ3RDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztZQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELDRCQUE0QixDQUFDLE9BQW9DO1FBQy9ELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLGNBQWM7Z0JBQUUsT0FBTztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0NBQW9DO1FBQzFDLHdFQUF3RTtRQUN4RSxtQ0FBbUM7UUFDbkMsSUFDRSxzQkFBc0IsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUNyQywyQkFBMkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUMxQztZQUNBLDBEQUEwRDtZQUMxRCw4REFBOEQ7WUFDOUQsSUFDRSxDQUFDLENBQ0MsZ0JBQWdCO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQ3RELEVBQ0Q7Z0JBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxnQkFBZ0IsRUFDaEI7b0JBQ0UsR0FBRyxFQUFFO3dCQUNILE9BQU8sSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztpQkFDRixDQUNGLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dIQXBGVSxtQkFBbUIsNENBbUJjLE1BQU07b0dBbkJ2QyxtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztpQkFDekI7bUZBb0JxRSxNQUFNOzBCQUFyQyxNQUFNOzJCQUFDLE1BQU07NENBZmxELGlCQUFpQjtzQkFEaEIsS0FBSztnQkFHTixnQkFBZ0I7c0JBRGYsTUFBTTtnQkFLSCxZQUFZO3NCQURmLFdBQVc7dUJBQUMsdUJBQXVCO2dCQU1oQyxlQUFlO3NCQURsQixXQUFXO3VCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5kb3cvd2luZG93LXRva2VuJztcblxuLyoqXG4gKiBBIHNpbXBsZSBsaWdodHdlaWdodCBsaWJyYXJ5IGZvciBBbmd1bGFyIHdpdGggdGhhdCBkZXRlY3RzIHdoZW4gYW5cbiAqIGVsZW1lbnQgaXMgd2l0aGluIHRoZSBicm93c2VycyB2aWV3cG9ydCBhbmQgYWRkcyBhIGBpbi12aWV3cG9ydGAgb3JcbiAqIGBub3QtaW4tdmlld3BvcnRgIGNsYXNzIHRvIHRoZSBlbGVtZW50LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBodG1sXG4gKiA8cFxuICogIGNsYXNzPVwiZm9vXCJcbiAqICBzbkluVmlld3BvcnRcbiAqICAoaW5WaWV3cG9ydENoYW5nZSk9XCJteUV2ZW50SGFuZGxlcigkZXZlbnQpXCI+XG4gKiAgQW1ldCB0ZW1wb3IgZXhjZXB0ZXVyIG9jY2FlY2F0IG51bGxhLlxuICogPC9wPlxuICogYGBgXG4gKi9cbi8vIEBkeW5hbWljXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc25JblZpZXdwb3J0XScsXG4gIGV4cG9ydEFzOiAnc25JblZpZXdwb3J0Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW5WaWV3cG9ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBpblZpZXdwb3J0OiBib29sZWFuO1xuICBwcml2YXRlIGhhc0ludGVyc2VjdGlvbk9ic2VydmVyOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpblZpZXdwb3J0T3B0aW9uczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0O1xuICBAT3V0cHV0KClcbiAgaW5WaWV3cG9ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc24tdmlld3BvcnQtLWluJylcbiAgZ2V0IGlzSW5WaWV3cG9ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pblZpZXdwb3J0O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbi12aWV3cG9ydC0tb3V0JylcbiAgZ2V0IGlzTm90SW5WaWV3cG9ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaW5WaWV3cG9ydDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvdzogV2luZG93KSB7XG4gICAgdGhpcy5oYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXJGZWF0dXJlRGV0ZWN0aW9uKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuaW5WaWV3cG9ydCA9IHRydWU7XG4gICAgICB0aGlzLmluVmlld3BvcnRDaGFuZ2UuZW1pdCh0aGlzLmluVmlld3BvcnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5oYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0aGlzLndpbmRvd1snSW50ZXJzZWN0aW9uT2JzZXJ2ZXInXTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWxsYmFjay5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLmluVmlld3BvcnRPcHRpb25zXG4gICAgICApO1xuXG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBpbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSkge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmICh0aGlzLmluVmlld3BvcnQgPT09IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm47XG4gICAgICB0aGlzLmluVmlld3BvcnQgPSBlbnRyeS5pc0ludGVyc2VjdGluZztcbiAgICAgIHRoaXMuaW5WaWV3cG9ydENoYW5nZS5lbWl0KHRoaXMuaW5WaWV3cG9ydCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGludGVyc2VjdGlvbk9ic2VydmVyRmVhdHVyZURldGVjdGlvbigpIHtcbiAgICAvLyBFeGl0cyBlYXJseSBpZiBhbGwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgYW5kIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcbiAgICAvLyBmZWF0dXJlcyBhcmUgbmF0aXZlbHkgc3VwcG9ydGVkLlxuICAgIGlmIChcbiAgICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gdGhpcy53aW5kb3cgJiZcbiAgICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB0aGlzLndpbmRvd1xuICAgICkge1xuICAgICAgLy8gTWluaW1hbCBwb2x5ZmlsbCBmb3IgRWRnZSAxNSdzIGxhY2sgb2YgYGlzSW50ZXJzZWN0aW5nYFxuICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8yMTFcbiAgICAgIGlmIChcbiAgICAgICAgIShcbiAgICAgICAgICAnaXNJbnRlcnNlY3RpbmcnIGluXG4gICAgICAgICAgdGhpcy53aW5kb3dbJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknXVsncHJvdG90eXBlJ11cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICB0aGlzLndpbmRvd1snSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSddWydwcm90b3R5cGUnXSxcbiAgICAgICAgICAnaXNJbnRlcnNlY3RpbmcnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==