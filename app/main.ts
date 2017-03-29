// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./modules/app.module";

import * as platform from "platform";
declare var GMSServices: any;


platformNativeScriptDynamic().bootstrapModule(AppModule);

if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyCUW_nlU1udAixgyyzt80sF1ZUrDc1_N38");
}