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
            { name: 'Contact', commands: ['/contact'] },
            { name: 'Maps', commands: ['/maps'] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBRXVCO0FBQ3ZCLDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsZ0NBQStCO0FBQy9CLHFDQUE0QztBQUM1Qyw0Q0FBMkM7QUFDM0Msc0VBRW9EO0FBQ3BELGlFQUU0QztBQU81QyxJQUFhLHVCQUF1QjtJQXlCbEMsaUNBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLElBQVUsRUFDVixNQUFjO1FBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUExQnhCOztXQUVHO1FBQ0gscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBT2pDOztXQUVHO1FBQ0gsWUFBTyxHQUFVO1lBQ2YsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQ3RDLENBQUM7UUFVQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxrREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNENBQVUsR0FBVixVQUFXLGFBQW9CO1FBQS9CLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDdkUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUMxQzt3QkFDRSxZQUFZLEVBQUUsSUFBSTt3QkFDbEIsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCLENBQUMsQ0FBQztvQkFDTCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTyxxREFBbUIsR0FBM0I7UUFDRSxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDdkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksMkJBQWMsRUFBRSxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRU8sa0RBQWdCLEdBQXhCLFVBQXlCLElBQVU7UUFDakMsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9ELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDSCxDQUFDO0lBRU8scURBQW1CLEdBQTNCO1FBQ0UsSUFBSSxhQUFhLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDckMsYUFBYSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUNELGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sOENBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXhHRCxJQXdHQztBQXZHb0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBa0IsZ0NBQXNCO2dFQUFDO0FBRGhFLHVCQUF1QjtJQUxuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsaUVBQWlFO1FBQzlFLFNBQVMsRUFBRSxDQUFDLGdFQUFnRSxDQUFDO0tBQzlFLENBQUM7cUNBMkI0Qix5QkFBZ0I7UUFDbEIsdUJBQWM7UUFDeEIsV0FBSTtRQUNGLGFBQU07R0E3QmIsdUJBQXVCLENBd0duQztBQXhHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd1aS9hY3Rpb24tYmFyJztcbmltcG9ydCB7XG4gIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQge1xuICBQdXNoVHJhbnNpdGlvbiwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZS1kcmF3ZXItcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogT24gdGFwIG9mIGFueSBzaWRlLWRyYXdlciBpdGVtLCBoaWRpbmcgY29udGVudCBpZiB0aGlzIGZsYWcgaXMgdHJ1ZS5cbiAgICovXG4gIGlzQ29udGVudFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBGb3IgYW5kcm9pZCB1c2luZyBTbGlkZU9uVG9wIHRyYW5zaXRpb24gYW5kIGZvciBpT1MsIHB1c2ggdHJhbnNpdGlvbi5cbiAgICovXG4gIGRyYXdlclRyYW5zaXRpb246IGFueTtcblxuICAvKipcbiAgICogTmF2aWdhdGlvbiBNZW51IEl0ZW1zXG4gICAqL1xuICBuYXZNZW51OiBhbnlbXSA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnQWJvdXQnLCBjb21tYW5kczogWycvYWJvdXQnXSB9LFxuICAgIHsgbmFtZTogJ0NvbnRhY3QnLCBjb21tYW5kczogWycvY29udGFjdCddIH0sXG4gICAgeyBuYW1lOiAnTWFwcycsIGNvbW1hbmRzOiBbJy9tYXBzJ10gfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJJY29uKHRoaXMucGFnZSk7XG4gICAgdGhpcy5zZXREcmF3ZXJUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gbmV4dCBwYWdlIGFmdGVyIGRyYXdlciBpcyBjbG9zZWQuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKHJvdXRlQ29tbWFuZHM6IGFueVtdKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgIGxldCBuZXdVcmxUcmVlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5jcmVhdGVVcmxUcmVlKHJvdXRlQ29tbWFuZHMpO1xuICAgIGxldCBuZXdVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnNlcmlhbGl6ZVVybChuZXdVcmxUcmVlKTtcbiAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kcmF3ZXIub24oJ2RyYXdlckNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmF3ZXJUcmFuc2l0aW9uKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgUHVzaFRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGlvbkJhckljb24ocGFnZTogUGFnZSkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSB0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0odGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkJ1dHRvbigpIHtcbiAgICBsZXQgbmF2QWN0aW9uSXRlbSA9IG5ldyBBY3Rpb25JdGVtKCk7XG4gICAgbmF2QWN0aW9uSXRlbS5pY29uID0gJ3JlczovL2ljX21lbnVfYmxhY2snO1xuICAgIGlmIChuYXZBY3Rpb25JdGVtLmlvcykge1xuICAgICAgbmF2QWN0aW9uSXRlbS5pb3MucG9zaXRpb24gPSAnbGVmdCc7XG4gICAgfVxuICAgIG5hdkFjdGlvbkl0ZW0ub24oJ3RhcCcsIHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcykpO1xuICAgIHJldHVybiBuYXZBY3Rpb25JdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxufVxuIl19