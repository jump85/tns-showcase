/**
 * Created by giampaolo on 13/03/17.
 */
"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var MapExampleComponent = (function () {
    function MapExampleComponent() {
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
    }
    return MapExampleComponent;
}());
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], MapExampleComponent.prototype, "mapView", void 0);
MapExampleComponent = __decorate([
    core_1.Component({
        selector: 'map-example-component',
        template: "\n    <GridLayout>\n        <MapView (mapReady)=\"onMapReady($event)\"></MapView>\n    </GridLayout>\n    "
    })
], MapExampleComponent);
exports.MapExampleComponent = MapExampleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWV4YW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLWV4YW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILHNDQUErRDtBQUMvRCwwRUFBc0U7QUFFdEUsZ0ZBQWdGO0FBQ2hGLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQVVsRixJQUFhLG1CQUFtQjtJQVJoQztRQVlJLFlBQVk7UUFDWixlQUFVLEdBQUcsVUFBQyxLQUFLO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDTixDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQU55QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBVSxpQkFBVTtvREFBQztBQUZqQyxtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFLDRHQUlUO0tBQ0osQ0FBQztHQUNXLG1CQUFtQixDQVEvQjtBQVJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBnaWFtcGFvbG8gb24gMTMvMDMvMTcuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcblxuLy8gSW1wb3J0YW50IC0gbXVzdCByZWdpc3RlciBNYXBWaWV3IHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaW4gQW5ndWxhciB0ZW1wbGF0ZXNcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFwLWV4YW1wbGUtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0PlxuICAgICAgICA8TWFwVmlldyAobWFwUmVhZHkpPVwib25NYXBSZWFkeSgkZXZlbnQpXCI+PC9NYXBWaWV3PlxuICAgIDwvR3JpZExheW91dD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE1hcEV4YW1wbGVDb21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcblxuICAgIC8vTWFwIGV2ZW50c1xuICAgIG9uTWFwUmVhZHkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXAgUmVhZHlcIik7XG4gICAgfTtcbn1cbiJdfQ==