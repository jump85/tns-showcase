import { Component, ChangeDetectionStrategy } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'contact',
    templateUrl: 'modules/contact/contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = 'Contact Page';


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

