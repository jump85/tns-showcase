import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { SetupItemViewArgs } from "nativescript-angular/directives";
import * as Notifications from "nativescript-local-notifications";

class Country {
  constructor(public name: string) { }
}

let europianCountries = ["", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
  "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
  "Slovenia", "Spain", "Sweden", "United Kingdom"];

@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public text: string = 'About Page';
  public selectedIndex: number;
  public countries: Array<Country>;
  public selCountry: number;
  public notify: Notifications.LocalNotifications;
  public email: string;

  public notifyOptions: Notifications.ScheduleOptions[];
  public id:number = 1;
  public title:String = "Notifica";
  public body:String;
  public ticker:String = 'Special ticker text (Android only)';
  public at:Date = new Date(new Date().getTime() + (5*1000));

  public glyphs = new Array<{ icon: string, code: string }>();

  constructor() {

    this.selectedIndex = 0;
    this.countries = [];
    this.selCountry = 0;

    for (let i = 0; i < europianCountries.length; i++) {
      this.countries.push(new Country(europianCountries[i]));
    }

    for (var charCode = 0xe903; charCode <= 0xeaea; charCode++) {
      var glyph = {
        icon: String.fromCharCode(charCode),
        code: charCode.toString(16)
      }
      this.glyphs.push(glyph);
    }
  }

  private toSecondTab(){

    this.selectedIndex = 1;
  }

  public onItemTap(args) {

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
  }

  public onMailButtonPress(){
    alert("Your email is "+this.email);
  }

  public onMapsButtonPress(){

  }
}
