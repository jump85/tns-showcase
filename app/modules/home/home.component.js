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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStFO0FBSS9FLElBQUksUUFBUSxHQUFRLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzVELElBQUksT0FBTyxHQUFRLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxJQUFJLFFBQVEsR0FBUSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsSUFBSSxLQUFLLEdBQVEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXhDO0lBQ0UsaUJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN0QyxjQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCO0lBQ2xHLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUM3RixRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7SUFDeEcsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU9uRCxJQUFhLGFBQWE7SUFtQnhCO1FBbEJPLFNBQUksR0FBVyxZQUFZLENBQUM7UUFRNUIsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBVSxVQUFVLENBQUM7UUFFMUIsV0FBTSxHQUFVLG9DQUFvQyxDQUFDO1FBQ3JELE9BQUUsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFB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QyxJQUFJLEdBQUcseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXhFLG1HQUFtRztRQUNuRyxzREFBc0Q7UUFDdEQsb0RBQW9EO1FBQ3BELHdEQUF3RDtRQUN4RCxnREFBZ0Q7UUFDaEQsdUZBQXVGO1FBQ3ZGLEVBQUU7UUFDRixtQkFBbUI7UUFDbkIsaURBQWlEO1FBQ2pELFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIscURBQXFEO1FBQ3JELFFBQVE7UUFDUixLQUFLO1FBQ0wsd0VBQXdFO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO0lBRUEsQ0FBQztJQXlCSCxvQkFBQztBQUFELENBQUMsQUF2SkQsSUF1SkM7QUF2SlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDOztHQUNXLGFBQWEsQ0F1SnpCO0FBdkpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xuaW1wb3J0ICogYXMgTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcblxubGV0IGZpcmViYXNlOiBhbnkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmxldCBkaWFsb2dzOiBhbnkgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmxldCBwbGF0Zm9ybTogYW55ID0gcmVxdWlyZShcInBsYXRmb3JtXCIpO1xubGV0IHV0aWxzOiBhbnkgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5cbmNsYXNzIENvdW50cnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxubGV0IGV1cm9waWFuQ291bnRyaWVzID0gW1wiXCIsIFwiQXVzdHJpYVwiLCBcIkJlbGdpdW1cIiwgXCJCdWxnYXJpYVwiLCBcIkNyb2F0aWFcIiwgXCJDeXBydXNcIiwgXCJDemVjaCBSZXB1YmxpY1wiLFxuICBcIkRlbm1hcmtcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXG4gIFwiTGF0dmlhXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hbHRhXCIsIFwiTmV0aGVybGFuZHNcIiwgXCJQb2xhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlJvbWFuaWFcIiwgXCJTbG92YWtpYVwiLFxuICBcIlNsb3ZlbmlhXCIsIFwiU3BhaW5cIiwgXCJTd2VkZW5cIiwgXCJVbml0ZWQgS2luZ2RvbVwiXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICdBYm91dCBQYWdlJztcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGNvdW50cmllczogQXJyYXk8Q291bnRyeT47XG4gIHB1YmxpYyBzZWxDb3VudHJ5OiBudW1iZXI7XG4gIHB1YmxpYyBub3RpZnk6IE5vdGlmaWNhdGlvbnMuTG9jYWxOb3RpZmljYXRpb25zO1xuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBwdWJsaWMgbm90aWZ5T3B0aW9uczogTm90aWZpY2F0aW9ucy5TY2hlZHVsZU9wdGlvbnNbXTtcbiAgcHVibGljIGlkOm51bWJlciA9IDE7XG4gIHB1YmxpYyB0aXRsZTpTdHJpbmcgPSBcIk5vdGlmaWNhXCI7XG4gIHB1YmxpYyBib2R5OlN0cmluZztcbiAgcHVibGljIHRpY2tlcjpTdHJpbmcgPSAnU3BlY2lhbCB0aWNrZXIgdGV4dCAoQW5kcm9pZCBvbmx5KSc7XG4gIHB1YmxpYyBhdDpEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoNSoxMDAwKSk7XG5cbiAgcHVibGljIGdseXBocyA9IG5ldyBBcnJheTx7IGljb246IHN0cmluZywgY29kZTogc3RyaW5nIH0+KCk7XG4gIHB1YmxpYyBBUFBfU1RPUkFHRSA9ICdnczovL3Rucy1maXJlYmFzZS0xM2VmMy5hcHBzcG90LmNvbSc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBGaXJlYmFzZSBpbml0aWFsaXphdGlvblxuICAgIGxldCB0aGF0OmFueSA9IHRoaXM7XG4gICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICBzdG9yYWdlQnVja2V0OiB0aGlzLkFQUF9TVE9SQUdFLFxuICAgICAgcGVyc2lzdDogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgZmFsc2VcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbFxuICAgICAgICBjb25zb2xlLmxvZygoZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKSArIFwiIChpbml0J3Mgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrKVwiKTtcbiAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICB0aGlzLmVtYWlsID0gIGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCI7XG4gICAgICAgICAgYWxlcnQoZGF0YS51c2VyLmVtYWlsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHRlc3RpbmcgcHVzaCB3aXJpbmcgaW4gaW5pdCBmb3IgaU9TOlxuICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAvLyB5b3UgY2FuIHVzZSB0aGlzIHRva2VuIHRvIHNlbmQgdG8geW91ciBvd24gYmFja2VuZCBzZXJ2ZXIsXG4gICAgICAgIC8vIHNvIHlvdSBjYW4gc2VuZCBub3RpZmljYXRpb25zIHRvIHRoaXMgc3BlY2lmaWMgZGV2aWNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcGx1Z2luIHJlY2VpdmVkIGEgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgIC8vIHRoaXMgaXMgZm9yIGlPUywgdG8gY29weSB0aGUgdG9rZW4gb250byB0aGUgY2xpcGJvYXJkXG4gICAgICAgIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgICAgIC8vdmFyIHBhc3RlYm9hcmQgPSB1dGlscy5pb3MuZ2V0dGVyKFVJUGFzdGVib2FyZCwgVUlQYXN0ZWJvYXJkLmdlbmVyYWxQYXN0ZWJvYXJkKTtcbiAgICAgICAgICAvL3Bhc3RlYm9hcmQuc2V0VmFsdWVGb3JQYXN0ZWJvYXJkVHlwZShcIltGaXJlYmFzZSBkZW1vIGFwcF0gTGFzdCBwdXNoIHRva2VuIHJlY2VpdmVkOiBcIiArIHRva2VuLCBrVVRUeXBlUGxhaW5UZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gbWVzc2FnZSByZWNlaXZlZDogXCIgKyBtZXNzYWdlKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlB1c2ggbWVzc2FnZSFcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IChtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLnRpdGxlIDogXCJcIiksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3czM3RcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGlzIHJlYWR5XCIpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XG4gICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXG4gICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB0aGlzLmNvdW50cmllcyA9IFtdO1xuICAgIHRoaXMuc2VsQ291bnRyeSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV1cm9waWFuQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNvdW50cmllcy5wdXNoKG5ldyBDb3VudHJ5KGV1cm9waWFuQ291bnRyaWVzW2ldKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY2hhckNvZGUgPSAweGU5MDM7IGNoYXJDb2RlIDw9IDB4ZWFlYTsgY2hhckNvZGUrKykge1xuICAgICAgdmFyIGdseXBoID0ge1xuICAgICAgICBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKSxcbiAgICAgICAgY29kZTogY2hhckNvZGUudG9TdHJpbmcoMTYpXG4gICAgICB9XG4gICAgICB0aGlzLmdseXBocy5wdXNoKGdseXBoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvU2Vjb25kVGFiKCl7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG5cbiAgICB0aGlzLmJvZHkgPSBcIjUgc2Vjb25kaSBmYSBoYWkgc2NlbHRvXCIgKyB0aGlzLmNvdW50cmllc1thcmdzLmluZGV4XS5uYW1lO1xuXG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zLnB1c2goW3RoaXMuaWQsIHRoaXMudGl0bGUsdGhpcy5ib2R5LCB0aGlzLnRpY2tlciwgdGhpcy5hdF0pOy8vLnB1c2godGhpcy5pZCk7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMudGl0bGVdOy8vLnB1c2godGhpcy50aXRsZSk7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMuYm9keV07Ly8ucHVzaCh0aGlzLmJvZHkpO1xuICAgIC8vIHRoaXMubm90aWZ5T3B0aW9uc1t0aGlzLnRpY2tlcl07Ly8ucHVzaCh0aGlzLnRpY2tlcik7XG4gICAgLy8gdGhpcy5ub3RpZnlPcHRpb25zW3RoaXMuYXRdOy8vLnB1c2godGhpcy5hdCk7XG4gICAgLy8gdGhpcy5ub3RpZnkuc2NoZWR1bGUoW3RoaXMuaWQsIHRoaXMudGl0bGUsdGhpcy5ib2R5LCB0aGlzLnRpY2tlciwgdGhpcy5hdF0pOy8vLnRoZW4oXG4gICAgLy9cbiAgICAvLyAgICAgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgIC8vICAgICB9XG4gICAgLy8gKTtcbiAgICAvLyBhbGVydChcIlRhYiBWaWV3IHNlbGVjdGVkIGluZGV4OiBcIiArIHRoaXMuY291bnRyaWVzW2FyZ3MuaW5kZXhdLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHRoaXMuc2VsQ291bnRyeSA9IGFyZ3MuaW5kZXg7XG4gIH1cblxuICBwdWJsaWMgb25NYWlsQnV0dG9uUHJlc3MoKXtcbiAgICBhbGVydChcIllvdXIgZW1haWwgaXMgXCIrdGhpcy5lbWFpbCk7XG4gIH1cblxuICBwdWJsaWMgb25NYXBzQnV0dG9uUHJlc3MoKXtcblxuICB9XG5cbiAgcHVibGljIGRvTG9naW5CeUdvb2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBsb2dpblwiKTtcbiAgICBmaXJlYmFzZS5sb2dpbih7XG5cbiAgICAgIC8vIG5vdGUgdGhhdCB5b3UgbmVlZCB0byBlbmFibGUgR29vZ2xlIGF1dGggaW4geW91ciBmaXJlYmFzZSBpbnN0YW5jZVxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxuICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIE9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk5pY2UhXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPSywgcGl0eVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=