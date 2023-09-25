import { Subject } from 'rxjs';
/**
 * Reference to a toast opened via the Toastr service.
 */
export class ToastRef {
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Count of duplicates of this toast */
        this.duplicatesCount = 0;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new Subject();
        /** triggered when toast is activated */
        this._activate = new Subject();
        /** notifies the toast that it should close before the timeout */
        this._manualClose = new Subject();
        /** notifies the toast that it should reset the timeouts */
        this._resetTimeout = new Subject();
        /** notifies the toast that it should count a duplicate toast */
        this._countDuplicate = new Subject();
    }
    manualClose() {
        this._manualClose.next();
        this._manualClose.complete();
    }
    manualClosed() {
        return this._manualClose.asObservable();
    }
    timeoutReset() {
        return this._resetTimeout.asObservable();
    }
    countDuplicate() {
        return this._countDuplicate.asObservable();
    }
    /**
     * Close the toast.
     */
    close() {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
        this._countDuplicate.complete();
    }
    /** Gets an observable that is notified when the toast is finished closing. */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    isInactive() {
        return this._activate.isStopped;
    }
    activate() {
        this._activate.next();
        this._activate.complete();
    }
    /** Gets an observable that is notified when the toast has started opening. */
    afterActivate() {
        return this._activate.asObservable();
    }
    /** Reset the toast timouts and count duplicates */
    onDuplicate(resetTimeout, countDuplicate) {
        if (resetTimeout) {
            this._resetTimeout.next();
        }
        if (countDuplicate) {
            this._countDuplicate.next(++this.duplicatesCount);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90b2FzdHIvdG9hc3QtcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHM0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBUTtJQWtCbkIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFkM0Msd0NBQXdDO1FBQ2hDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLDBFQUEwRTtRQUNsRSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDM0Msd0NBQXdDO1FBQ2hDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3hDLGlFQUFpRTtRQUN6RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDM0MsMkRBQTJEO1FBQ25ELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM1QyxnRUFBZ0U7UUFDeEQsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBRUYsQ0FBQztJQUUvQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxXQUFXLENBQUMsWUFBcUIsRUFBRSxjQUF1QjtRQUN4RCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5LXJlZic7XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGEgdG9hc3Qgb3BlbmVkIHZpYSB0aGUgVG9hc3RyIHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFJlZjxUPiB7XG4gIC8qKiBUaGUgaW5zdGFuY2Ugb2YgY29tcG9uZW50IG9wZW5lZCBpbnRvIHRoZSB0b2FzdC4gKi9cbiAgY29tcG9uZW50SW5zdGFuY2UhOiBUO1xuXG4gIC8qKiBDb3VudCBvZiBkdXBsaWNhdGVzIG9mIHRoaXMgdG9hc3QgKi9cbiAgcHJpdmF0ZSBkdXBsaWNhdGVzQ291bnQgPSAwO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgdG9hc3QgaGFzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIHByaXZhdGUgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2YXRlZCAqL1xuICBwcml2YXRlIF9hY3RpdmF0ZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8qKiBub3RpZmllcyB0aGUgdG9hc3QgdGhhdCBpdCBzaG91bGQgY2xvc2UgYmVmb3JlIHRoZSB0aW1lb3V0ICovXG4gIHByaXZhdGUgX21hbnVhbENsb3NlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCByZXNldCB0aGUgdGltZW91dHMgKi9cbiAgcHJpdmF0ZSBfcmVzZXRUaW1lb3V0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCBjb3VudCBhIGR1cGxpY2F0ZSB0b2FzdCAqL1xuICBwcml2YXRlIF9jb3VudER1cGxpY2F0ZSA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxuXG4gIG1hbnVhbENsb3NlKCkge1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbWFudWFsQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbnVhbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdGltZW91dFJlc2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2V0VGltZW91dC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvdW50RHVwbGljYXRlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50RHVwbGljYXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSB0b2FzdC5cbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgICB0aGlzLl9yZXNldFRpbWVvdXQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9jb3VudER1cGxpY2F0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHRvYXN0IGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaXNJbmFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGUuaXNTdG9wcGVkO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5fYWN0aXZhdGUubmV4dCgpO1xuICAgIHRoaXMuX2FjdGl2YXRlLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgdG9hc3QgaGFzIHN0YXJ0ZWQgb3BlbmluZy4gKi9cbiAgYWZ0ZXJBY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBSZXNldCB0aGUgdG9hc3QgdGltb3V0cyBhbmQgY291bnQgZHVwbGljYXRlcyAqL1xuICBvbkR1cGxpY2F0ZShyZXNldFRpbWVvdXQ6IGJvb2xlYW4sIGNvdW50RHVwbGljYXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHJlc2V0VGltZW91dCkge1xuICAgICAgdGhpcy5fcmVzZXRUaW1lb3V0Lm5leHQoKTtcbiAgICB9XG4gICAgaWYgKGNvdW50RHVwbGljYXRlKSB7XG4gICAgICB0aGlzLl9jb3VudER1cGxpY2F0ZS5uZXh0KCsrdGhpcy5kdXBsaWNhdGVzQ291bnQpO1xuICAgIH1cbiAgfVxufVxuIl19