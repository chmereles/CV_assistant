import { Directive, NgModule, } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastContainerDirective {
    constructor(el) {
        this.el = el;
    }
    getContainerElement() {
        return this.el.nativeElement;
    }
}
ToastContainerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ToastContainerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.2", type: ToastContainerDirective, selector: "[toastContainer]", exportAs: ["toastContainer"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
export class ToastContainerModule {
}
ToastContainerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToastContainerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerModule, declarations: [ToastContainerDirective], exports: [ToastContainerDirective] });
ToastContainerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: ToastContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ToastContainerDirective],
                    exports: [ToastContainerDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90b2FzdHIvdG9hc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDOztBQU12QixNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUksQ0FBQztJQUN2QyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDOztvSEFKVSx1QkFBdUI7d0dBQXZCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUpuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOztBQVlELE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFYcEIsdUJBQXVCLGFBQXZCLHVCQUF1QjtrSEFXdkIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9hc3RDb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICd0b2FzdENvbnRhaW5lcicsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG4gIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lck1vZHVsZSB7fVxuIl19