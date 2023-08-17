import { ElementRef, EventEmitter, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
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
export declare class InViewportDirective implements AfterViewInit, OnDestroy, OnInit {
    private el;
    private window;
    private inViewport;
    private hasIntersectionObserver;
    inViewportOptions: IntersectionObserverInit;
    inViewportChange: EventEmitter<boolean>;
    observer: IntersectionObserver;
    get isInViewport(): boolean;
    get isNotInViewport(): boolean;
    constructor(el: ElementRef, window: Window);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    intersectionObserverCallback(entries: IntersectionObserverEntry[]): void;
    private intersectionObserverFeatureDetection;
    static ɵfac: i0.ɵɵFactoryDeclaration<InViewportDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InViewportDirective, "[snInViewport]", ["snInViewport"], { "inViewportOptions": "inViewportOptions"; }, { "inViewportChange": "inViewportChange"; }, never>;
}
