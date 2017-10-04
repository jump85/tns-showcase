"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHFDQUFxQztBQUNyQyx5Q0FBMkM7QUFJM0M7Ozs7R0FJRztBQUlILElBQWEsc0JBQXNCO0lBSWpDLGdDQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFeEMsd0RBQXVCLEdBQXZCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUNyRCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUN4RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFFNUMsbURBQW1EO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDakMsQ0FBQztZQUVELDZDQUE2QztZQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBUSxLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDSCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLFVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLHNCQUFzQjtJQUhsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDO3FDQUt5QixpQkFBVTtHQUp4QixzQkFBc0IsQ0FtQ2xDO0FBbkNZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5cclxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XHJcblxyXG4vKipcclxuICogQW5kcm9pZCBPbmx5LlxyXG4gKlxyXG4gKiBEaXJlY3RpdmUgd2hpY2ggcmVtb3ZlcyBib3JkZXIgZnJvbSB0aGUgYnV0dG9uIHdoZW4gYXBwbGllZCBvbiBhbmRyb2lkLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICcuYm9yZGVybGVzcy1idG4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIG5zQnRuOiBCdXR0b247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgc2V0Qm9yZGVybGVzc0JhY2tncm91bmQoKSB7XHJcbiAgICBsZXQgb3V0VmFsdWUgPSBuZXcgYW5kcm9pZC51dGlsLlR5cGVkVmFsdWUoKTtcclxuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuY29udGV4dC5nZXRUaGVtZSgpLnJlc29sdmVBdHRyaWJ1dGUoXHJcbiAgICAgIGFuZHJvaWQuUi5hdHRyLnNlbGVjdGFibGVJdGVtQmFja2dyb3VuZCwgb3V0VmFsdWUsIHRydWVcclxuICAgICk7XHJcbiAgICB0aGlzLm5zQnRuLmFuZHJvaWQuc2V0QmFja2dyb3VuZFJlc291cmNlKG91dFZhbHVlLnJlc291cmNlSWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgIHRoaXMubnNCdG4gPSA8QnV0dG9uPnRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyBpZiB0aGUgdmlldyBoYXMgYWxyZWFkeSBsb2FkZWQgLSBzZXQgaW1tZWRpYXRlbHlcclxuICAgICAgaWYgKHRoaXMubnNCdG4uaXNMb2FkZWQpIHtcclxuICAgICAgICB0aGlzLnNldEJvcmRlcmxlc3NCYWNrZ3JvdW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF0dGFjaCB0aGUgc2V0dGVyIGZvciBmdXR1cmUgbG9hZGVkIGV2ZW50c1xyXG4gICAgICB0aGlzLm5zQnRuLm9uKCdsb2FkZWQnLCAoKSA9PiB7IHRoaXMuc2V0Qm9yZGVybGVzc0JhY2tncm91bmQoKTsgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIENsZWFudXBcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgdGhpcy5uc0J0bi5vZmYoJ2xvYWRlZCcpO1xyXG4gICAgICB0aGlzLm5zQnRuID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=