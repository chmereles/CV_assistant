/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DomPortalHost } from '../portal/dom-portal-host';
import { OverlayRef } from './overlay-ref';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
export class Overlay {
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document;
        // Namespace panes by overlay container
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    create(positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    }
    getPaneElement(positionClass = '', overlayContainer) {
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    _createPaneElement(positionClass, overlayContainer) {
        const pane = this._document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    _createOverlayRef(pane) {
        return new OverlayRef(this._createPortalHost(pane));
    }
}
Overlay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: Overlay, deps: [{ token: i1.OverlayContainer }, { token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
Overlay.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: Overlay, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: Overlay, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.OverlayContainer }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvb3ZlcmxheS9vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUE0QyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFM0M7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxPQUFPO0lBSWxCLFlBQ1UsaUJBQW1DLEVBQ25DLHlCQUFtRCxFQUNuRCxPQUF1QixFQUNMLFNBQWM7UUFIaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ0wsY0FBUyxHQUFULFNBQVMsQ0FBSztRQVAxQyx1Q0FBdUM7UUFDL0Isa0JBQWEsR0FBOEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU8xRixDQUFDO0lBQ0o7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGFBQXNCLEVBQUUsZ0JBQTBDO1FBQ3ZFLGdDQUFnQztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGNBQWMsQ0FDWixnQkFBd0IsRUFBRSxFQUMxQixnQkFBMEM7UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUEyQyxDQUFDLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQTJDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQTJDLENBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4RixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBMkMsQ0FBRSxDQUNsRSxhQUFhLENBQ2QsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUEyQyxDQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGtCQUFrQixDQUN4QixhQUFxQixFQUNyQixnQkFBMEM7UUFFMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGlCQUFpQixDQUFDLElBQWlCO1FBQ3pDLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGlCQUFpQixDQUFDLElBQWlCO1FBQ3pDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7b0dBMUVVLE9BQU8sd0hBUVIsUUFBUTt3R0FSUCxPQUFPLGNBRE0sTUFBTTsyRkFDbkIsT0FBTztrQkFEbkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQVM3QixNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tUG9ydGFsSG9zdCB9IGZyb20gJy4uL3BvcnRhbC9kb20tcG9ydGFsLWhvc3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi90b2FzdHIvdG9hc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcbiAqIHVzZWQgYXMgYSBsb3ctbGV2ZWwgYnVpbGRpbmcgYnVpbGRpbmcgYmxvY2sgZm9yIG90aGVyIGNvbXBvbmVudHMuIERpYWxvZ3MsIHRvb2x0aXBzLCBtZW51cyxcbiAqIHNlbGVjdHMsIGV0Yy4gY2FuIGFsbCBiZSBidWlsdCB1c2luZyBvdmVybGF5cy4gVGhlIHNlcnZpY2Ugc2hvdWxkIHByaW1hcmlseSBiZSB1c2VkIGJ5IGF1dGhvcnNcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxuICpcbiAqIEFuIG92ZXJsYXkgKmlzKiBhIFBvcnRhbEhvc3QsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuICAvLyBOYW1lc3BhY2UgcGFuZXMgYnkgb3ZlcmxheSBjb250YWluZXJcbiAgcHJpdmF0ZSBfcGFuZUVsZW1lbnRzOiBNYXA8VG9hc3RDb250YWluZXJEaXJlY3RpdmUsIFJlY29yZDxzdHJpbmcsIEhUTUxFbGVtZW50Pj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge31cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICovXG4gIGNyZWF0ZShwb3NpdGlvbkNsYXNzPzogc3RyaW5nLCBvdmVybGF5Q29udGFpbmVyPzogVG9hc3RDb250YWluZXJEaXJlY3RpdmUpOiBPdmVybGF5UmVmIHtcbiAgICAvLyBnZXQgZXhpc3RpbmcgcGFuZSBpZiBwb3NzaWJsZVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKHRoaXMuZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcikpO1xuICB9XG5cbiAgZ2V0UGFuZUVsZW1lbnQoXG4gICAgcG9zaXRpb25DbGFzczogc3RyaW5nID0gJycsXG4gICAgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlLFxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKCF0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIgYXMgVG9hc3RDb250YWluZXJEaXJlY3RpdmUpKSB7XG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHMuc2V0KG92ZXJsYXlDb250YWluZXIgYXMgVG9hc3RDb250YWluZXJEaXJlY3RpdmUsIHt9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lciBhcyBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSkhW3Bvc2l0aW9uQ2xhc3NdKSB7XG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIgYXMgVG9hc3RDb250YWluZXJEaXJlY3RpdmUpIVtcbiAgICAgICAgcG9zaXRpb25DbGFzc1xuICAgICAgXSA9IHRoaXMuX2NyZWF0ZVBhbmVFbGVtZW50KHBvc2l0aW9uQ2xhc3MsIG92ZXJsYXlDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIgYXMgVG9hc3RDb250YWluZXJEaXJlY3RpdmUpIVtwb3NpdGlvbkNsYXNzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgcGFuZSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudChcbiAgICBwb3NpdGlvbkNsYXNzOiBzdHJpbmcsXG4gICAgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlLFxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGFuZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcGFuZS5pZCA9ICd0b2FzdC1jb250YWluZXInO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZChwb3NpdGlvbkNsYXNzKTtcbiAgICBwYW5lLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFvdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5hcHBlbmRDaGlsZChwYW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQocGFuZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRG9tUG9ydGFsSG9zdCBpbnRvIHdoaWNoIHRoZSBvdmVybGF5IGNvbnRlbnQgY2FuIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBob3N0LlxuICAgKiBAcmV0dXJucyBBIHBvcnRhbCBob3N0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxIb3N0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsSG9zdCB7XG4gICAgcmV0dXJuIG5ldyBEb21Qb3J0YWxIb3N0KHBhbmUsIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIE92ZXJsYXlSZWYgZm9yIGFuIG92ZXJsYXkgaW4gdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0gcGFuZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXlcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYocGFuZTogSFRNTEVsZW1lbnQpOiBPdmVybGF5UmVmIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYodGhpcy5fY3JlYXRlUG9ydGFsSG9zdChwYW5lKSk7XG4gIH1cbn1cbiJdfQ==