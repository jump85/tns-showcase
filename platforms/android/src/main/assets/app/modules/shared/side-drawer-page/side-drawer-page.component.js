"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Home', commands: ['/'] },
            { name: 'About', commands: ['/about'] },
            { name: 'Contact', commands: ['/contact'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBRXVCO0FBQ3ZCLDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsZ0NBQStCO0FBQy9CLHFDQUE0QztBQUM1Qyw0Q0FBMkM7QUFDM0Msc0VBRW9EO0FBQ3BELGlFQUU0QztBQU81QyxJQUFhLHVCQUF1QjtJQXdCbEMsaUNBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLElBQVUsRUFDVixNQUFjO1FBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUF6QnhCOztXQUVHO1FBQ0gscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBT2pDOztXQUVHO1FBQ0gsWUFBTyxHQUFVO1lBQ2YsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7U0FDNUMsQ0FBQztRQVVBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxH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QUFrQixnQ0FBc0I7Z0VBQUM7QUFEaEUsdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSxpRUFBaUU7UUFDOUUsU0FBUyxFQUFFLENBQUMsZ0VBQWdFLENBQUM7S0FDOUUsQ0FBQztxQ0EwQjRCLHlCQUFnQjtRQUNsQix1QkFBYztRQUN4QixXQUFJO1FBQ0YsYUFBTTtHQTVCYix1QkFBdUIsQ0F1R25DO0FBdkdZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3VpL2FjdGlvbi1iYXInO1xuaW1wb3J0IHtcbiAgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGVcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7XG4gIFB1c2hUcmFuc2l0aW9uLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlLWRyYXdlci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBPbiB0YXAgb2YgYW55IHNpZGUtZHJhd2VyIGl0ZW0sIGhpZGluZyBjb250ZW50IGlmIHRoaXMgZmxhZyBpcyB0cnVlLlxuICAgKi9cbiAgaXNDb250ZW50VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZvciBhbmRyb2lkIHVzaW5nIFNsaWRlT25Ub3AgdHJhbnNpdGlvbiBhbmQgZm9yIGlPUywgcHVzaCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgZHJhd2VyVHJhbnNpdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIE1lbnUgSXRlbXNcbiAgICovXG4gIG5hdk1lbnU6IGFueVtdID0gW1xuICAgIHsgbmFtZTogJ0hvbWUnLCBjb21tYW5kczogWycvJ10gfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGNvbW1hbmRzOiBbJy9hYm91dCddIH0sXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGNvbW1hbmRzOiBbJy9jb250YWN0J10gfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJJY29uKHRoaXMucGFnZSk7XG4gICAgdGhpcy5zZXREcmF3ZXJUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gbmV4dCBwYWdlIGFmdGVyIGRyYXdlciBpcyBjbG9zZWQuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKHJvdXRlQ29tbWFuZHM6IGFueVtdKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgIGxldCBuZXdVcmxUcmVlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5jcmVhdGVVcmxUcmVlKHJvdXRlQ29tbWFuZHMpO1xuICAgIGxldCBuZXdVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnNlcmlhbGl6ZVVybChuZXdVcmxUcmVlKTtcbiAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kcmF3ZXIub24oJ2RyYXdlckNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmF3ZXJUcmFuc2l0aW9uKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgUHVzaFRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJhckljb24ocGFnZTogUGFnZSkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0odGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBsZXQgbmF2QWN0aW9uSXRlbSA9IG5ldyBBY3Rpb25JdGVtKCk7XG4gICAgbmF2QWN0aW9uSXRlbS5pY29uID0gJ3JlczovL2ljX21lbnVfYmxhY2snO1xuICAgIGlmIChuYXZBY3Rpb25JdGVtLmlvcykge1xuICAgICAgbmF2QWN0aW9uSXRlbS5pb3MucG9zaXRpb24gPSAnbGVmdCc7XG4gICAgfVxuICAgIG5hdkFjdGlvbkl0ZW0ub24oJ3RhcCcsIHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcykpO1xuICAgIHJldHVybiBuYXZBY3Rpb25JdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxufVxuIl19