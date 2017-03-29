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
    HomeComponent.prototype.onMapsButtonPress = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStFO0FBSS9FO0lBQ0UsaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN0QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCO0lBQ2xHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUM3RixRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7SUFDeEcsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU9uRCxJQUFhLGFBQWE7SUFpQnhCO1FBaEJPLFNBQUksR0FBVyxZQUFZLENBQUM7UUFRNUIsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBVSxVQUFVLENBQUM7UUFFMUIsV0FBTSxHQUFVLG9DQUFvQyxDQUFDO1FBQ3JELE9BQUUsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFcEQsV0FBTSxHQUFHLElBQUksS0FBSyxFQUFrQyxDQUFDO1FBSTFELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsR0FBRyxNQUFNLEVBQUUsUUFBUSxJQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFHO2dCQUNWLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQzVCLENBQUE7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVPLG1DQUFXLEdBQW5CO1FBRUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFeEUsbUdBQW1HO1FBQ25HLHNEQUFzRDtRQUN0RCxvREFBb0Q7UUFDcEQsd0RBQXdEO1FBQ3hELGdEQUFnRDtRQUNoRCx1RkFBdUY7UUFDdkYsRUFBRTtRQUNGLG1CQUFtQjtRQUNuQixpREFBaUQ7UUFDakQsU0FBUztRQUNULHdCQUF3QjtRQUN4QixxREFBcUQ7UUFDckQsUUFBUTtRQUNSLEtBQUs7UUFDTCx3RUFBd0U7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7SUFFQSxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDO0FBeEVZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQzs7R0FDVyxhQUFhLENBd0V6QjtBQXhFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldHVwSXRlbVZpZXdBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXNcIjtcbmltcG9ydCAqIGFzIE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5cbmNsYXNzIENvdW50cnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxubGV0IGV1cm9waWFuQ291bnRyaWVzID0gW1wiXCIsIFwiQXVzdHJpYVwiLCBcIkJlbGdpdW1cIiwgXCJCdWxnYXJpYVwiLCBcIkNyb2F0aWFcIiwgXCJDeXBydXNcIiwgXCJDemVjaCBSZXB1YmxpY1wiLFxuICBcIkRlbm1hcmtcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXG4gIFwiTGF0dmlhXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hbHRhXCIsIFwiTmV0aGVybGFuZHNcIiwgXCJQb2xhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlJvbWFuaWFcIiwgXCJTbG92YWtpYVwiLFxuICBcIlNsb3ZlbmlhXCIsIFwiU3BhaW5cIiwgXCJTd2VkZW5cIiwgXCJVbml0ZWQgS2luZ2RvbVwiXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICdBYm91dCBQYWdlJztcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG4gIHB1YmxpYyBzZWxDb3VudHJ5OiBudW1iZXI7XG4gIHB1YmxpYyBub3RpZnk6IE5vdGlmaWNhdGlvbnMuTG9jYWxOb3RpZmljYXRpb25zO1xuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBwdWJsaWMgbm90aWZ5T3B0aW9uczogTm90aWZpY2F0aW9ucy5TY2hlZHVsZU9wdGlvbnNbXTtcbiAgcHVibGljIGlkOm51bWJlciA9IDE7XG4gIHB1YmxpYyB0aXRsZTpTdHJpbmcgPSBcIk5vdGlmaWNhXCI7XG4gIHB1YmxpYyBib2R5OlN0cmluZztcbiAgcHVibGljIHRpY2tlcjpTdHJpbmcgPSAnU3BlY2lhbCB0aWNrZXIgdGV4dCAoQW5kcm9pZCBvbmx5KSc7XG4gIHB1YmxpYyBhdDpEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoNSoxMDAwKSk7XG5cbiAgcHVibGljIGdseXBocyA9IG5ldyBBcnJheTx7IGljb246IHN0cmluZywgY29kZTogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHRoaXMuY291bnRyaWVzID0gW107XG4gICAgdGhpcy5zZWxDb3VudHJ5ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXVyb3BpYW5Db3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY291bnRyaWVzLnB1c2gobmV3IENvdW50cnkoZXVyb3BpYW5Db3VudHJpZXNbaV0pKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBjaGFyQ29kZSA9IDB4ZTkwMzsgY2hhckNvZGUgPD0gMHhlYWVhOyBjaGFyQ29kZSsrKSB7XG4gICAgICB2YXIgZ2x5cGggPSB7XG4gICAgICAgIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpLFxuICAgICAgICBjb2RlOiBjaGFyQ29kZS50b1N0cmluZygxNilcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2x5cGhzLnB1c2goZ2x5cGgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9TZWNvbmRUYWIoKXtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDE7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcblxuICAgIHRoaXMuYm9keSA9IFwiNSBzZWNvbmRpIGZhIGhhaSBzY2VsdG9cIiArIHRoaXMuY291bnRyaWVzW2FyZ3MuaW5kZXhdLm5hbWU7XG5cbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnMucHVzaChbdGhpcy5pZCwgdGhpcy50aXRsZSx0aGlzLmJvZHksIHRoaXMudGlja2VyLCB0aGlzLmF0XSk7Ly8ucHVzaCh0aGlzLmlkKTtcbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnNbdGhpcy50aXRsZV07Ly8ucHVzaCh0aGlzLnRpdGxlKTtcbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnNbdGhpcy5ib2R5XTsvLy5wdXNoKHRoaXMuYm9keSk7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMudGlja2VyXTsvLy5wdXNoKHRoaXMudGlja2VyKTtcbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnNbdGhpcy5hdF07Ly8ucHVzaCh0aGlzLmF0KTtcbiAgICAvLyB0aGlzLm5vdGlmeS5zY2hlZHVsZShbdGhpcy5pZCwgdGhpcy50aXRsZSx0aGlzLmJvZHksIHRoaXMudGlja2VyLCB0aGlzLmF0XSk7Ly8udGhlbihcbiAgICAvL1xuICAgIC8vICAgICBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNjaGVkdWxlZFwiKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyApO1xuICAgIC8vIGFsZXJ0KFwiVGFiIFZpZXcgc2VsZWN0ZWQgaW5kZXg6IFwiICsgdGhpcy5jb3VudHJpZXNbYXJncy5pbmRleF0ubmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgdGhpcy5zZWxDb3VudHJ5ID0gYXJncy5pbmRleDtcbiAgfVxuXG4gIHB1YmxpYyBvbk1haWxCdXR0b25QcmVzcygpe1xuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBpcyBcIit0aGlzLmVtYWlsKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1hcHNCdXR0b25QcmVzcygpe1xuXG4gIH1cbn1cbiJdfQ==