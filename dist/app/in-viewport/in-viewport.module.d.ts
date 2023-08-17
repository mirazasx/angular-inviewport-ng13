import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./in-viewport.directive";
/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browsers viewport and adds a
 * sn-viewport--in or sn-viewport--out class to the element.
 */
export declare class InViewportModule {
    static forServer(): ModuleWithProviders<InViewportModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InViewportModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InViewportModule, [typeof i1.InViewportDirective], never, [typeof i1.InViewportDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InViewportModule>;
}
