import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToastContainerDirective {
    private el;
    constructor(el: ElementRef);
    getContainerElement(): HTMLElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastContainerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastContainerDirective, "[toastContainer]", ["toastContainer"], {}, {}, never, never, false>;
}
export declare class ToastContainerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastContainerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToastContainerModule, [typeof ToastContainerDirective], never, [typeof ToastContainerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToastContainerModule>;
}
