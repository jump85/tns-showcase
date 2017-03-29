"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var application = require("application");
/**
 * Android Only.
 *
 * Directive which removes border from the button when applied on android.
 */
var BorderlessBtnDirective = (function () {
    function BorderlessBtnDirective(_el) {
        this._el = _el;
    }
    BorderlessBtnDirective.prototype.setBorderlessBackground = function () {
        var outValue = new android.util.TypedValue();
        application.android.context.getTheme().resolveAttribute(android.R.attr.selectableItemBackground, outValue, true);
        this.nsBtn.android.setBackgroundResource(outValue.resourceId);
    };
    BorderlessBtnDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (platform_1.isAndroid) {
            this.nsBtn = this._el.nativeElement;
            // if the view has already loaded - set immediately
            if (this.nsBtn.isLoaded) {
                this.setBorderlessBackground();
            }
            // Attach the setter for future loaded events
            this.nsBtn.on('loaded', function () { _this.setBorderlessBackground(); });
        }
    };
    BorderlessBtnDirective.prototype.ngOnDestroy = function () {
        // Cleanup
        if (platform_1.isAndroid) {
            this.nsBtn.off('loaded');
            this.nsBtn = undefined;
        }
    };
    return BorderlessBtnDirective;
}());
BorderlessBtnDirective = __decorate([
    core_1.Directive({
        selector: '.borderless-btn'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BorderlessBtnDirective);
exports.BorderlessBtnDirective = BorderlessBtnDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFHekUscUNBQXFDO0FBQ3JDLHlDQUEyQztBQUkzQzs7OztHQUlHO0FBSUgsSUFBYSxzQkFBc0I7SUFJakMsZ0NBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQztJQUV4Qyx3REFBdUIsR0FBdkI7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQ3hELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUU1QyxtREFBbUQ7WUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBRUQsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFRLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsVUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksc0JBQXNCO0lBSGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO0tBQzVCLENBQUM7cUNBS3lCLGlCQUFVO0dBSnhCLHNCQUFzQixDQW1DbEM7QUFuQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuLyoqXG4gKiBBbmRyb2lkIE9ubHkuXG4gKlxuICogRGlyZWN0aXZlIHdoaWNoIHJlbW92ZXMgYm9yZGVyIGZyb20gdGhlIGJ1dHRvbiB3aGVuIGFwcGxpZWQgb24gYW5kcm9pZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnLmJvcmRlcmxlc3MtYnRuJ1xufSlcbmV4cG9ydCBjbGFzcyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbnNCdG46IEJ1dHRvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XG5cbiAgc2V0Qm9yZGVybGVzc0JhY2tncm91bmQoKSB7XG4gICAgbGV0IG91dFZhbHVlID0gbmV3IGFuZHJvaWQudXRpbC5UeXBlZFZhbHVlKCk7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5jb250ZXh0LmdldFRoZW1lKCkucmVzb2x2ZUF0dHJpYnV0ZShcbiAgICAgIGFuZHJvaWQuUi5hdHRyLnNlbGVjdGFibGVJdGVtQmFja2dyb3VuZCwgb3V0VmFsdWUsIHRydWVcbiAgICApO1xuICAgIHRoaXMubnNCdG4uYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2Uob3V0VmFsdWUucmVzb3VyY2VJZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICB0aGlzLm5zQnRuID0gPEJ1dHRvbj50aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAvLyBpZiB0aGUgdmlldyBoYXMgYWxyZWFkeSBsb2FkZWQgLSBzZXQgaW1tZWRpYXRlbHlcbiAgICAgIGlmICh0aGlzLm5zQnRuLmlzTG9hZGVkKSB7XG4gICAgICAgIHRoaXMuc2V0Qm9yZGVybGVzc0JhY2tncm91bmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIHRoZSBzZXR0ZXIgZm9yIGZ1dHVyZSBsb2FkZWQgZXZlbnRzXG4gICAgICB0aGlzLm5zQnRuLm9uKCdsb2FkZWQnLCAoKSA9PiB7IHRoaXMuc2V0Qm9yZGVybGVzc0JhY2tncm91bmQoKTsgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMubnNCdG4ub2ZmKCdsb2FkZWQnKTtcbiAgICAgIHRoaXMubnNCdG4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=