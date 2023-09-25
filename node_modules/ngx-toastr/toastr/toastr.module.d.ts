import { ModuleWithProviders } from '@angular/core';
import { GlobalConfig } from './toastr-config';
import * as i0 from "@angular/core";
import * as i1 from "./toast.component";
import * as i2 from "@angular/common";
export declare const DefaultGlobalConfig: GlobalConfig;
export declare class ToastrModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<ToastrModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastrModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToastrModule, [typeof i1.Toast], [typeof i2.CommonModule], [typeof i1.Toast]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToastrModule>;
}
export declare class ToastrComponentlessModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<ToastrModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastrComponentlessModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToastrComponentlessModule, never, [typeof i2.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToastrComponentlessModule>;
}
