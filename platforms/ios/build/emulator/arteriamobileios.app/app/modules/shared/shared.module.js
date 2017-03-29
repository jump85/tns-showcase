"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
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
            platform_1.NativeScriptModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUV6QywwREFBbUU7QUFDbkUsc0VBQW1GO0FBRW5GLHVEQUE2RDtBQUM3RCx1RUFBb0U7QUFnQnBFLElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQWR4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCw2QkFBa0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDWiwrQkFBcUI7WUFDckIsMENBQXVCO1lBQ3ZCLGlEQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcblxuaW1wb3J0IHsgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtZHJhd2VyLXBhZ2UnO1xuaW1wb3J0IHsgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZSB9IGZyb20gJy4vYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxuICAgIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50LFxuICAgIEJvcmRlcmxlc3NCdG5EaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50LFxuICAgIEJvcmRlcmxlc3NCdG5EaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG59XG4iXX0=