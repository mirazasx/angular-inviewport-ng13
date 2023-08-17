import { NgModule } from '@angular/core';
import { InViewportDirective } from './in-viewport.directive';
import { WINDOW } from '../window/window-token';
import { WINDOW_MOCK } from '../window/window-mock';
import * as i0 from "@angular/core";
/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browsers viewport and adds a
 * sn-viewport--in or sn-viewport--out class to the element.
 */
export class InViewportModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tdmlld3BvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9pbi12aWV3cG9ydC9pbi12aWV3cG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFcEQ7Ozs7R0FJRztBQUtILE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLFNBQVM7UUFDZCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQ3hELENBQUM7SUFDSixDQUFDOzs2R0FOVSxnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFIWixtQkFBbUIsYUFDeEIsbUJBQW1COzhHQUVsQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFKNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5WaWV3cG9ydERpcmVjdGl2ZSB9IGZyb20gJy4vaW4tdmlld3BvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbmRvdy93aW5kb3ctdG9rZW4nO1xuaW1wb3J0IHsgV0lORE9XX01PQ0sgfSBmcm9tICcuLi93aW5kb3cvd2luZG93LW1vY2snO1xuXG4vKipcbiAqIEEgc2ltcGxlIGxpZ2h0d2VpZ2h0IGxpYnJhcnkgZm9yIEFuZ3VsYXIgd2l0aCBvdGhlciBkZXBlbmRlbmNpZXNcbiAqIHRoYXQgZGV0ZWN0cyB3aGVuIGFuIGVsZW1lbnQgaXMgd2l0aGluIHRoZSBicm93c2VycyB2aWV3cG9ydCBhbmQgYWRkcyBhXG4gKiBzbi12aWV3cG9ydC0taW4gb3Igc24tdmlld3BvcnQtLW91dCBjbGFzcyB0byB0aGUgZWxlbWVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSW5WaWV3cG9ydERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtJblZpZXdwb3J0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5WaWV3cG9ydE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JTZXJ2ZXIoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJblZpZXdwb3J0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJblZpZXdwb3J0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiBXSU5ET1dfTU9DSyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=