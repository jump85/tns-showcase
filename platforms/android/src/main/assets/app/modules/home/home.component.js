"use strict";
var core_1 = require("@angular/core");
var Country = (function () {
    function Country(name) {
        this.name = name;
    }
    return Country;
}());
var europianCountries = ["", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];
var HomeComponent = (function () {
    function HomeComponent() {
        this.text = 'About Page';
        this.id = 1;
        this.title = "Notifica";
        this.ticker = 'Special ticker text (Android only)';
        this.at = new Date(new Date().getTime() + (5 * 1000));
        this.glyphs = new Array();
        this.selectedIndex = 0;
        this.countries = [];
        this.selCountry = 0;
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
        for (var charCode = 0xe903; charCode <= 0xeaea; charCode++) {
            var glyph = {
                icon: String.fromCharCode(charCode),
                code: charCode.toString(16)
            };
            this.glyphs.push(glyph);
        }
    }
    HomeComponent.prototype.toSecondTab = function () {
        this.selectedIndex = 1;
    };
    HomeComponent.prototype.onItemTap = function (args) {
        this.body = "5 secondi fa hai scelto" + this.countries[args.index].name;
        // this.notifyOptions.push([this.id, this.title,this.body, this.ticker, this.at]);//.push(this.id);
        // this.notifyOptions[this.title];//.push(this.title);
        // this.notifyOptions[this.body];//.push(this.body);
        // this.notifyOptions[this.ticker];//.push(this.ticker);
        // this.notifyOptions[this.at];//.push(this.at);
        // this.notify.schedule([this.id, this.title,this.body, this.ticker, this.at]);//.then(
        //
        //     function() {
        //         console.log("Notification scheduled");
        //     },
        //     function(error) {
        //         console.log("scheduling error: " + error);
        //     }
        // );
        // alert("Tab View selected index: " + this.countries[args.index].name);
        console.log("Item Tapped at cell index: " + args.index);
        this.selectedIndex = 0;
        this.selCountry = args.index;
    };
    HomeComponent.prototype.onMailButtonPress = function () {
        alert("Your email is " + this.email);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'modules/home/home.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStFO0FBSS9FO0lBQ0UsaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN0QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCO0lBQ2xHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUM3RixRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7SUFDeEcsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU9uRCxJQUFhLGFBQWE7SUFpQnhCO1FBaEJPLFNBQUksR0FBVyxZQUFZLENBQUM7UUFRNUIsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBVSxVQUFVLENBQUM7UUFFMUIsV0FBTSxHQUFVLG9DQUFvQyxDQUFDO1FBQ3JELE9BQUUsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFcEQsV0FBTSxHQUFHLElBQUksS0FBSyxFQUFrQyxDQUFDO1FBSTFELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsR0FBRyxNQUFNLEVBQUUsUUFBUSxJQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFHO2dCQUNWLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQzVCLENBQUE7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVPLG1DQUFXLEdBQW5CO1FBRUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFeEUsbUdBQW1HO1FBQ25HLHNEQUFzRDtRQUN0RCxvREFBb0Q7UUFDcEQsd0RBQXdEO1FBQ3hELGdEQUFnRDtRQUNoRCx1RkFBdUY7UUFDdkYsRUFBRTtRQUNGLG1CQUFtQjtRQUNuQixpREFBaUQ7UUFDakQsU0FBUztRQUNULHdCQUF3QjtRQUN4QixxREFBcUQ7UUFDckQsUUFBUTtRQUNSLEtBQUs7UUFDTCx3RUFBd0U7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDOztHQUNXLGFBQWEsQ0FvRXpCO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcblxuY2xhc3MgQ291bnRyeSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxufVxuXG5sZXQgZXVyb3BpYW5Db3VudHJpZXMgPSBbXCJcIiwgXCJBdXN0cmlhXCIsIFwiQmVsZ2l1bVwiLCBcIkJ1bGdhcmlhXCIsIFwiQ3JvYXRpYVwiLCBcIkN5cHJ1c1wiLCBcIkN6ZWNoIFJlcHVibGljXCIsXG4gIFwiRGVubWFya1wiLCBcIkVzdG9uaWFcIiwgXCJGaW5sYW5kXCIsIFwiRnJhbmNlXCIsIFwiR2VybWFueVwiLCBcIkdyZWVjZVwiLCBcIkh1bmdhcnlcIiwgXCJJcmVsYW5kXCIsIFwiSXRhbHlcIixcbiAgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJMdXhlbWJvdXJnXCIsIFwiTWFsdGFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlBvbGFuZFwiLCBcIlBvcnR1Z2FsXCIsIFwiUm9tYW5pYVwiLCBcIlNsb3Zha2lhXCIsXG4gIFwiU2xvdmVuaWFcIiwgXCJTcGFpblwiLCBcIlN3ZWRlblwiLCBcIlVuaXRlZCBLaW5nZG9tXCJdO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBwdWJsaWMgdGV4dDogc3RyaW5nID0gJ0Fib3V0IFBhZ2UnO1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5PjtcbiAgcHVibGljIHNlbENvdW50cnk6IG51bWJlcjtcbiAgcHVibGljIG5vdGlmeTogTm90aWZpY2F0aW9ucy5Mb2NhbE5vdGlmaWNhdGlvbnM7XG4gIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuXG4gIHB1YmxpYyBub3RpZnlPcHRpb25zOiBOb3RpZmljYXRpb25zLlNjaGVkdWxlT3B0aW9uc1tdO1xuICBwdWJsaWMgaWQ6bnVtYmVyID0gMTtcbiAgcHVibGljIHRpdGxlOlN0cmluZyA9IFwiTm90aWZpY2FcIjtcbiAgcHVibGljIGJvZHk6U3RyaW5nO1xuICBwdWJsaWMgdGlja2VyOlN0cmluZyA9ICdTcGVjaWFsIHRpY2tlciB0ZXh0IChBbmRyb2lkIG9ubHkpJztcbiAgcHVibGljIGF0OkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg1KjEwMDApKTtcblxuICBwdWJsaWMgZ2x5cGhzID0gbmV3IEFycmF5PHsgaWNvbjogc3RyaW5nLCBjb2RlOiBzdHJpbmcgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgdGhpcy5jb3VudHJpZXMgPSBbXTtcbiAgICB0aGlzLnNlbENvdW50cnkgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldXJvcGlhbkNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChuZXcgQ291bnRyeShldXJvcGlhbkNvdW50cmllc1tpXSkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNoYXJDb2RlID0gMHhlOTAzOyBjaGFyQ29kZSA8PSAweGVhZWE7IGNoYXJDb2RlKyspIHtcbiAgICAgIHZhciBnbHlwaCA9IHtcbiAgICAgICAgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSksXG4gICAgICAgIGNvZGU6IGNoYXJDb2RlLnRvU3RyaW5nKDE2KVxuICAgICAgfVxuICAgICAgdGhpcy5nbHlwaHMucHVzaChnbHlwaCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b1NlY29uZFRhYigpe1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMTtcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuXG4gICAgdGhpcy5ib2R5ID0gXCI1IHNlY29uZGkgZmEgaGFpIHNjZWx0b1wiICsgdGhpcy5jb3VudHJpZXNbYXJncy5pbmRleF0ubmFtZTtcblxuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9ucy5wdXNoKFt0aGlzLmlkLCB0aGlzLnRpdGxlLHRoaXMuYm9keSwgdGhpcy50aWNrZXIsIHRoaXMuYXRdKTsvLy5wdXNoKHRoaXMuaWQpO1xuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLnRpdGxlXTsvLy5wdXNoKHRoaXMudGl0bGUpO1xuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLmJvZHldOy8vLnB1c2godGhpcy5ib2R5KTtcbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnNbdGhpcy50aWNrZXJdOy8vLnB1c2godGhpcy50aWNrZXIpO1xuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLmF0XTsvLy5wdXNoKHRoaXMuYXQpO1xuICAgIC8vIHRoaXMubm90aWZ5LnNjaGVkdWxlKFt0aGlzLmlkLCB0aGlzLnRpdGxlLHRoaXMuYm9keSwgdGhpcy50aWNrZXIsIHRoaXMuYXRdKTsvLy50aGVuKFxuICAgIC8vXG4gICAgLy8gICAgIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICk7XG4gICAgLy8gYWxlcnQoXCJUYWIgVmlldyBzZWxlY3RlZCBpbmRleDogXCIgKyB0aGlzLmNvdW50cmllc1thcmdzLmluZGV4XS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB0aGlzLnNlbENvdW50cnkgPSBhcmdzLmluZGV4O1xuICB9XG5cbiAgcHVibGljIG9uTWFpbEJ1dHRvblByZXNzKCl7XG4gICAgYWxlcnQoXCJZb3VyIGVtYWlsIGlzIFwiK3RoaXMuZW1haWwpO1xuICB9XG59XG4iXX0=