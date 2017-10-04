"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.APP_STORAGE = 'gs://tns-firebase-13ef3.appspot.com';
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
            storageBucket: this.APP_STORAGE,
            persist: true,
            onAuthStateChanged: function (data) {
                console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
                if (data.loggedIn) {
                    this.email = data.user.email ? data.user.email : "N/A";
                    alert(data.user.email);
                }
            },
            // testing push wiring in init for iOS:
            onPushTokenReceivedCallback: function (token) {
                // you can use this token to send to your own backend server,
                // so you can send notifications to this specific device
                console.log("Firebase plugin received a push token: " + token);
                // this is for iOS, to copy the token onto the clipboard
                if (platform.isIOS) {
                    //var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
                    //pasteboard.setValueForPasteboardType("[Firebase demo app] Last push token received: " + token, kUTTypePlainText);
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
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(function (token) {
            console.log("Auth token retrieved: " + token);
        }, function (errorMessage) {
            console.log("Auth token retrieval error: " + errorMessage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRTtBQUkvRSxJQUFJLFFBQVEsR0FBUSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUM1RCxJQUFJLE9BQU8sR0FBUSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsSUFBSSxRQUFRLEdBQVEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLElBQUksS0FBSyxHQUFRLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUV4QztJQUNFLGlCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDdEMsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQjtJQUNsRyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU87SUFDN0YsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVO0lBQ3hHLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFPbkQsSUFBYSxhQUFhO0lBbUJ4QjtRQWxCTyxTQUFJLEdBQVcsWUFBWSxDQUFDO1FBUTVCLE9BQUUsR0FBVSxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQVUsVUFBVSxDQUFDO1FBRTFCLFdBQU0sR0FBVSxvQ0FBb0MsQ0FBQztRQUNyRCxPQUFFLEdBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVB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QWhCLFVBQWlCLElBQUk7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFeEUsbUdBQW1HO1FBQ25HLHNEQUFzRDtRQUN0RCxvREFBb0Q7UUFDcEQsd0RBQXdEO1FBQ3hELGdEQUFnRDtRQUNoRCx1RkFBdUY7UUFDdkYsRUFBRTtRQUNGLG1CQUFtQjtRQUNuQixpREFBaUQ7UUFDakQsU0FBUztRQUNULHdCQUF3QjtRQUN4QixxREFBcUQ7UUFDckQsUUFBUTtRQUNSLEtBQUs7UUFDTCx3RUFBd0U7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7SUFFQSxDQUFDO0lBeUJILG9CQUFDO0FBQUQsQ0FBQyxBQXZKRCxJQXVKQztBQXZKWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7O0dBQ1csYUFBYSxDQXVKekI7QUF2Slksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHVwSXRlbVZpZXdBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXNcIjtcclxuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmxldCBmaXJlYmFzZTogYW55ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmxldCBkaWFsb2dzOiBhbnkgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxubGV0IHBsYXRmb3JtOiBhbnkgPSByZXF1aXJlKFwicGxhdGZvcm1cIik7XHJcbmxldCB1dGlsczogYW55ID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xyXG5cclxuY2xhc3MgQ291bnRyeSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbmxldCBldXJvcGlhbkNvdW50cmllcyA9IFtcIlwiLCBcIkF1c3RyaWFcIiwgXCJCZWxnaXVtXCIsIFwiQnVsZ2FyaWFcIiwgXCJDcm9hdGlhXCIsIFwiQ3lwcnVzXCIsIFwiQ3plY2ggUmVwdWJsaWNcIixcclxuICBcIkRlbm1hcmtcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXHJcbiAgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJMdXhlbWJvdXJnXCIsIFwiTWFsdGFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlBvbGFuZFwiLCBcIlBvcnR1Z2FsXCIsIFwiUm9tYW5pYVwiLCBcIlNsb3Zha2lhXCIsXHJcbiAgXCJTbG92ZW5pYVwiLCBcIlNwYWluXCIsIFwiU3dlZGVuXCIsIFwiVW5pdGVkIEtpbmdkb21cIl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICBwdWJsaWMgdGV4dDogc3RyaW5nID0gJ0Fib3V0IFBhZ2UnO1xyXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XHJcbiAgcHVibGljIHNlbENvdW50cnk6IG51bWJlcjtcclxuICBwdWJsaWMgbm90aWZ5OiBOb3RpZmljYXRpb25zLkxvY2FsTm90aWZpY2F0aW9ucztcclxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcclxuXHJcbiAgcHVibGljIG5vdGlmeU9wdGlvbnM6IE5vdGlmaWNhdGlvbnMuU2NoZWR1bGVPcHRpb25zW107XHJcbiAgcHVibGljIGlkOm51bWJlciA9IDE7XHJcbiAgcHVibGljIHRpdGxlOlN0cmluZyA9IFwiTm90aWZpY2FcIjtcclxuICBwdWJsaWMgYm9keTpTdHJpbmc7XHJcbiAgcHVibGljIHRpY2tlcjpTdHJpbmcgPSAnU3BlY2lhbCB0aWNrZXIgdGV4dCAoQW5kcm9pZCBvbmx5KSc7XHJcbiAgcHVibGljIGF0OkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg1KjEwMDApKTtcclxuXHJcbiAgcHVibGljIGdseXBocyA9IG5ldyBBcnJheTx7IGljb246IHN0cmluZywgY29kZTogc3RyaW5nIH0+KCk7XHJcbiAgcHVibGljIEFQUF9TVE9SQUdFID0gJ2dzOi8vdG5zLWZpcmViYXNlLTEzZWYzLmFwcHNwb3QuY29tJztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gRmlyZWJhc2UgaW5pdGlhbGl6YXRpb25cclxuICAgIGxldCB0aGF0OmFueSA9IHRoaXM7XHJcbiAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogdGhpcy5BUFBfU1RPUkFHRSxcclxuICAgICAgcGVyc2lzdDogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgZmFsc2VcclxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsXHJcbiAgICAgICAgY29uc29sZS5sb2coKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIikgKyBcIiAoaW5pdCdzIG9uQXV0aFN0YXRlQ2hhbmdlZCBjYWxsYmFjaylcIik7XHJcbiAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHRoaXMuZW1haWwgPSAgZGF0YS51c2VyLmVtYWlsID8gZGF0YS51c2VyLmVtYWlsIDogXCJOL0FcIjtcclxuICAgICAgICAgIGFsZXJ0KGRhdGEudXNlci5lbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyB0ZXN0aW5nIHB1c2ggd2lyaW5nIGluIGluaXQgZm9yIGlPUzpcclxuICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbikge1xyXG4gICAgICAgIC8vIHlvdSBjYW4gdXNlIHRoaXMgdG9rZW4gdG8gc2VuZCB0byB5b3VyIG93biBiYWNrZW5kIHNlcnZlcixcclxuICAgICAgICAvLyBzbyB5b3UgY2FuIHNlbmQgbm90aWZpY2F0aW9ucyB0byB0aGlzIHNwZWNpZmljIGRldmljZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcGx1Z2luIHJlY2VpdmVkIGEgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBmb3IgaU9TLCB0byBjb3B5IHRoZSB0b2tlbiBvbnRvIHRoZSBjbGlwYm9hcmRcclxuICAgICAgICBpZiAocGxhdGZvcm0uaXNJT1MpIHtcclxuICAgICAgICAgIC8vdmFyIHBhc3RlYm9hcmQgPSB1dGlscy5pb3MuZ2V0dGVyKFVJUGFzdGVib2FyZCwgVUlQYXN0ZWJvYXJkLmdlbmVyYWxQYXN0ZWJvYXJkKTtcclxuICAgICAgICAgIC8vcGFzdGVib2FyZC5zZXRWYWx1ZUZvclBhc3RlYm9hcmRUeXBlKFwiW0ZpcmViYXNlIGRlbW8gYXBwXSBMYXN0IHB1c2ggdG9rZW4gcmVjZWl2ZWQ6IFwiICsgdG9rZW4sIGtVVFR5cGVQbGFpblRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIG1lc3NhZ2UgcmVjZWl2ZWQ6IFwiICsgbWVzc2FnZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJQdXNoIG1lc3NhZ2UhXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IChtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLnRpdGxlIDogXCJcIiksXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTdzMzdFwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgaXMgcmVhZHlcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBmaXJlYmFzZS5nZXRBdXRoVG9rZW4oe1xyXG4gICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXHJcbiAgICAgIGZvcmNlUmVmcmVzaDogZmFsc2VcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB0aGlzLmNvdW50cmllcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxDb3VudHJ5ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV1cm9waWFuQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY291bnRyaWVzLnB1c2gobmV3IENvdW50cnkoZXVyb3BpYW5Db3VudHJpZXNbaV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBjaGFyQ29kZSA9IDB4ZTkwMzsgY2hhckNvZGUgPD0gMHhlYWVhOyBjaGFyQ29kZSsrKSB7XHJcbiAgICAgIHZhciBnbHlwaCA9IHtcclxuICAgICAgICBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKSxcclxuICAgICAgICBjb2RlOiBjaGFyQ29kZS50b1N0cmluZygxNilcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdseXBocy5wdXNoKGdseXBoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9TZWNvbmRUYWIoKXtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gXCI1IHNlY29uZGkgZmEgaGFpIHNjZWx0b1wiICsgdGhpcy5jb3VudHJpZXNbYXJncy5pbmRleF0ubmFtZTtcclxuXHJcbiAgICAvLyB0aGlzLm5vdGlmeU9wdGlvbnMucHVzaChbdGhpcy5pZCwgdGhpcy50aXRsZSx0aGlzLmJvZHksIHRoaXMudGlja2VyLCB0aGlzLmF0XSk7Ly8ucHVzaCh0aGlzLmlkKTtcclxuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLnRpdGxlXTsvLy5wdXNoKHRoaXMudGl0bGUpO1xyXG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMuYm9keV07Ly8ucHVzaCh0aGlzLmJvZHkpO1xyXG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMudGlja2VyXTsvLy5wdXNoKHRoaXMudGlja2VyKTtcclxuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLmF0XTsvLy5wdXNoKHRoaXMuYXQpO1xyXG4gICAgLy8gdGhpcy5ub3RpZnkuc2NoZWR1bGUoW3RoaXMuaWQsIHRoaXMudGl0bGUsdGhpcy5ib2R5LCB0aGlzLnRpY2tlciwgdGhpcy5hdF0pOy8vLnRoZW4oXHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICk7XHJcbiAgICAvLyBhbGVydChcIlRhYiBWaWV3IHNlbGVjdGVkIGluZGV4OiBcIiArIHRoaXMuY291bnRyaWVzW2FyZ3MuaW5kZXhdLm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIHRoaXMuc2VsQ291bnRyeSA9IGFyZ3MuaW5kZXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NYWlsQnV0dG9uUHJlc3MoKXtcclxuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBpcyBcIit0aGlzLmVtYWlsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1hcHNCdXR0b25QcmVzcygpe1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb0xvZ2luQnlHb29nbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBsb2dpblwiKTtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuXHJcbiAgICAgIC8vIG5vdGUgdGhhdCB5b3UgbmVlZCB0byBlbmFibGUgR29vZ2xlIGF1dGggaW4geW91ciBmaXJlYmFzZSBpbnN0YW5jZVxyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJMb2dpbiBPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTmljZSFcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gZXJyb3JcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIHBpdHlcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19