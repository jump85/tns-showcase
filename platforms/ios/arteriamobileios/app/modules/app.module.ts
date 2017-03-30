import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapExampleComponent } from './map-example.component';
import { SharedModule } from './shared';
import firebase = require("nativescript-plugin-firebase");

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MapExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    (instance) => {
      console.log("firebase.init done");
    },
    (error) => {
      console.log("firebase.init error: " + error);
    }
);

