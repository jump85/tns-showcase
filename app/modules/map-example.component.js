"use strict";
/**
 * Created by giampaolo on 13/03/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWV4YW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLWV4YW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFFSCxzQ0FBK0Q7QUFDL0QsMEVBQXNFO0FBRXRFLGdGQUFnRjtBQUNoRixrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFVbEYsSUFBYSxtQkFBbUI7SUFSaEM7UUFZSSxZQUFZO1FBQ1osZUFBVSxHQUFHLFVBQUMsS0FBSztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFOeUI7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQVUsaUJBQVU7b0RBQUM7QUFGakMsbUJBQW1CO0lBUi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSw0R0FJVDtLQUNKLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0I7QUFSWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBnaWFtcGFvbG8gb24gMTMvMDMvMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5cclxuLy8gSW1wb3J0YW50IC0gbXVzdCByZWdpc3RlciBNYXBWaWV3IHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaW4gQW5ndWxhciB0ZW1wbGF0ZXNcclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXAtZXhhbXBsZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxHcmlkTGF5b3V0PlxyXG4gICAgICAgIDxNYXBWaWV3IChtYXBSZWFkeSk9XCJvbk1hcFJlYWR5KCRldmVudClcIj48L01hcFZpZXc+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBFeGFtcGxlQ29tcG9uZW50IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiTWFwVmlld1wiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIC8vTWFwIGV2ZW50c1xyXG4gICAgb25NYXBSZWFkeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFwIFJlYWR5XCIpO1xyXG4gICAgfTtcclxufVxyXG4iXX0=