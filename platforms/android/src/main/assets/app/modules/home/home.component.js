"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var platform = require("platform");
var utils = require("utils/utils");
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
        this.doLoginByGoogle = function () {
            console.log("Google login");
            firebase.login({
                // note that you need to enable Google auth in your firebase instance
                type: firebase.LoginType.GOOGLE
            }).then(function (result) {
                dialogs.alert({
                    title: "Login OK",
                    message: JSON.stringify(result),
                    okButtonText: "Nice!"
                });
            }, function (errorMessage) {
                dialogs.alert({
                    title: "Login error",
                    message: errorMessage,
                    okButtonText: "OK, pity"
                });
            });
        };
        // Firebase initialization
        var that = this;
        firebase.init({
            storageBucket: 'gs://tns-firebase-13ef3.appspot.com',
            persist: true,
            onAuthStateChanged: function (data) {
                console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
                if (data.loggedIn) {
                    that.set("useremail", data.user.email ? data.user.email : "N/A");
                }
            },
            // testing push wiring in init for iOS:
            onPushTokenReceivedCallback: function (token) {
                // you can use this token to send to your own backend server,
                // so you can send notifications to this specific device
                console.log("Firebase plugin received a push token: " + token);
                // this is for iOS, to copy the token onto the clipboard
                if (platform.isIOS) {
                }
            },
            onMessageReceivedCallback: function (message) {
                console.log("--- message received: " + message);
                setTimeout(function () {
                    dialogs.alert({
                        title: "Push message!",
                        message: (message.title !== undefined ? message.title : ""),
                        okButtonText: "Sw33t"
                    });
                }, 500);
            }
        }).then(function (result) {
            console.log("Firebase is ready");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStFO0FBSS9FLElBQUksUUFBUSxHQUFRLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzVELElBQUksT0FBTyxHQUFRLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxJQUFJLFFBQVEsR0FBUSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsSUFBSSxLQUFLLEdBQVEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXhDO0lBQ0UsaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN0QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCO0lBQ2xHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUM3RixRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7SUFDeEcsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU9uRCxJQUFhLGFBQWE7SUFtQnhCO1FBbEJPLFNBQUksR0FBVyxZQUFZLENBQUM7UUFRNUIsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBVSxVQUFVLENBQUM7UUFFMUIsV0FBTSxHQUFVLG9DQUFvQyxDQUFDO1FBQ3JELE9BQUUsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFB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QUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO0lBRUEsQ0FBQztJQXlCSCxvQkFBQztBQUFELENBQUMsQUExSUQsSUEwSUM7QUExSVksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDOztHQUNXLGFBQWEsQ0EwSXpCO0FBMUlZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcblxubGV0IGZpcmViYXNlOiBhbnkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmxldCBkaWFsb2dzOiBhbnkgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmxldCBwbGF0Zm9ybTogYW55ID0gcmVxdWlyZShcInBsYXRmb3JtXCIpO1xubGV0IHV0aWxzOiBhbnkgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5cbmNsYXNzIENvdW50cnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxubGV0IGV1cm9waWFuQ291bnRyaWVzID0gW1wiXCIsIFwiQXVzdHJpYVwiLCBcIkJlbGdpdW1cIiwgXCJCdWxnYXJpYVwiLCBcIkNyb2F0aWFcIiwgXCJDeXBydXNcIiwgXCJDemVjaCBSZXB1YmxpY1wiLFxuICBcIkRlbm1hcmtcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXG4gIFwiTGF0dmlhXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hbHRhXCIsIFwiTmV0aGVybGFuZHNcIiwgXCJQb2xhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlJvbWFuaWFcIiwgXCJTbG92YWtpYVwiLFxuICBcIlNsb3ZlbmlhXCIsIFwiU3BhaW5cIiwgXCJTd2VkZW5cIiwgXCJVbml0ZWQgS2luZ2RvbVwiXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICdBYm91dCBQYWdlJztcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG4gIHB1YmxpYyBzZWxDb3VudHJ5OiBudW1iZXI7XG4gIHB1YmxpYyBub3RpZnk6IE5vdGlmaWNhdGlvbnMuTG9jYWxOb3RpZmljYXRpb25zO1xuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBwdWJsaWMgbm90aWZ5T3B0aW9uczogTm90aWZpY2F0aW9ucy5TY2hlZHVsZU9wdGlvbnNbXTtcbiAgcHVibGljIGlkOm51bWJlciA9IDE7XG4gIHB1YmxpYyB0aXRsZTpTdHJpbmcgPSBcIk5vdGlmaWNhXCI7XG4gIHB1YmxpYyBib2R5OlN0cmluZztcbiAgcHVibGljIHRpY2tlcjpTdHJpbmcgPSAnU3BlY2lhbCB0aWNrZXIgdGV4dCAoQW5kcm9pZCBvbmx5KSc7XG4gIHB1YmxpYyBhdDpEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoNSoxMDAwKSk7XG5cbiAgcHVibGljIGdseXBocyA9IG5ldyBBcnJheTx7IGljb246IHN0cmluZywgY29kZTogc3RyaW5nIH0+KCk7XG5cblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEZpcmViYXNlIGluaXRpYWxpemF0aW9uXG4gICAgbGV0IHRoYXQ6YW55ID0gdGhpcztcbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6ICdnczovL3Rucy1maXJlYmFzZS0xM2VmMy5hcHBzcG90LmNvbScsXG4gICAgICBwZXJzaXN0OiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBmYWxzZVxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsXG4gICAgICAgIGNvbnNvbGUubG9nKChkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpICsgXCIgKGluaXQncyBvbkF1dGhTdGF0ZUNoYW5nZWQgY2FsbGJhY2spXCIpO1xuICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAgIHRoYXQuc2V0KFwidXNlcmVtYWlsXCIsIGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gdGVzdGluZyBwdXNoIHdpcmluZyBpbiBpbml0IGZvciBpT1M6XG4gICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIC8vIHlvdSBjYW4gdXNlIHRoaXMgdG9rZW4gdG8gc2VuZCB0byB5b3VyIG93biBiYWNrZW5kIHNlcnZlcixcbiAgICAgICAgLy8gc28geW91IGNhbiBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gdGhpcyBzcGVjaWZpYyBkZXZpY2VcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBwbHVnaW4gcmVjZWl2ZWQgYSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgLy8gdGhpcyBpcyBmb3IgaU9TLCB0byBjb3B5IHRoZSB0b2tlbiBvbnRvIHRoZSBjbGlwYm9hcmRcbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzSU9TKSB7XG4gICAgICAgICAgLy92YXIgcGFzdGVib2FyZCA9IHV0aWxzLmlvcy5nZXR0ZXIoVUlQYXN0ZWJvYXJkLCBVSVBhc3RlYm9hcmQuZ2VuZXJhbFBhc3RlYm9hcmQpO1xuICAgICAgICAgIC8vcGFzdGVib2FyZC5zZXRWYWx1ZUZvclBhc3RlYm9hcmRUeXBlKFwiW0ZpcmViYXNlIGRlbW8gYXBwXSBMYXN0IHB1c2ggdG9rZW4gcmVjZWl2ZWQ6IFwiICsgdG9rZW4sIGtVVFR5cGVQbGFpblRleHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBtZXNzYWdlIHJlY2VpdmVkOiBcIiArIG1lc3NhZ2UpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiUHVzaCBtZXNzYWdlIVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogKG1lc3NhZ2UudGl0bGUgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UudGl0bGUgOiBcIlwiKSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTdzMzdFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaXMgcmVhZHlcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB0aGlzLmNvdW50cmllcyA9IFtdO1xuICAgIHRoaXMuc2VsQ291bnRyeSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV1cm9waWFuQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNvdW50cmllcy5wdXNoKG5ldyBDb3VudHJ5KGV1cm9waWFuQ291bnRyaWVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY2hhckNvZGUgPSAweGU5MDM7IGNoYXJDb2RlIDw9IDB4ZWFlYTsgY2hhckNvZGUrKykge1xuICAgICAgdmFyIGdseXBoID0ge1xuICAgICAgICBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKSxcbiAgICAgICAgY29kZTogY2hhckNvZGUudG9TdHJpbmcoMTYpXG4gICAgICB9XG4gICAgICB0aGlzLmdseXBocy5wdXNoKGdseXBoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvU2Vjb25kVGFiKCl7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG5cbiAgICB0aGlzLmJvZHkgPSBcIjUgc2Vjb25kaSBmYSBoYWkgc2NlbHRvXCIgKyB0aGlzLmNvdW50cmllc1thcmdzLmluZGV4XS5uYW1lO1xuXG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zLnB1c2goW3RoaXMuaWQsIHRoaXMudGl0bGUsdGhpcy5ib2R5LCB0aGlzLnRpY2tlciwgdGhpcy5hdF0pOy8vLnB1c2godGhpcy5pZCk7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMudGl0bGVdOy8vLnB1c2godGhpcy50aXRsZSk7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMuYm9keV07Ly8ucHVzaCh0aGlzLmJvZHkpO1xuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLnRpY2tlcl07Ly8ucHVzaCh0aGlzLnRpY2tlcik7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMuYXRdOy8vLnB1c2godGhpcy5hdCk7XG4gICAgLy8gdGhpcy5ub3RpZnkuc2NoZWR1bGUoW3RoaXMuaWQsIHRoaXMudGl0bGUsdGhpcy5ib2R5LCB0aGlzLnRpY2tlciwgdGhpcy5hdF0pOy8vLnRoZW4oXG4gICAgLy9cbiAgICAvLyAgICAgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgIC8vICAgICB9XG4gICAgLy8gKTtcbiAgICAvLyBhbGVydChcIlRhYiBWaWV3IHNlbGVjdGVkIGluZGV4OiBcIiArIHRoaXMuY291bnRyaWVzW2FyZ3MuaW5kZXhdLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHRoaXMuc2VsQ291bnRyeSA9IGFyZ3MuaW5kZXg7XG4gIH1cblxuICBwdWJsaWMgb25NYWlsQnV0dG9uUHJlc3MoKXtcbiAgICBhbGVydChcIllvdXIgZW1haWwgaXMgXCIrdGhpcy5lbWFpbCk7XG4gIH1cblxuICBwdWJsaWMgb25NYXBzQnV0dG9uUHJlc3MoKXtcblxuICB9XG5cbiAgcHVibGljIGRvTG9naW5CeUdvb2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBsb2dpblwiKTtcbiAgICBmaXJlYmFzZS5sb2dpbih7XG5cbiAgICAgIC8vIG5vdGUgdGhhdCB5b3UgbmVlZCB0byBlbmFibGUgR29vZ2xlIGF1dGggaW4geW91ciBmaXJlYmFzZSBpbnN0YW5jZVxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxuICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIE9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk5pY2UhXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgcGl0eVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=