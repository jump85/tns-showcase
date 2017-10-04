"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var side_drawer_page_1 = require("./side-drawer-page");
var borderless_btn_directive_1 = require("./borderless-btn.directive");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
        ],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        exports: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLHNFQUFtRjtBQUVuRix1REFBNkQ7QUFDN0QsdUVBQW9FO0FBZ0JwRSxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFkeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1osK0JBQXFCO1lBQ3JCLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBdUI7WUFDdkIsaURBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLWRyYXdlci1wYWdlJztcclxuaW1wb3J0IHsgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZSB9IGZyb20gJy4vYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXHJcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcclxuICAgIEJvcmRlcmxlc3NCdG5EaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50LFxyXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==