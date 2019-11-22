import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Device } from "@ionic-native/device";
import { Flashlight } from "@ionic-native/flashlight";
import { Vibration } from "@ionic-native/vibration";
import { BatteryStatus } from "@ionic-native/battery-status";

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Device,
    Flashlight,
    Vibration,
    BatteryStatus
  ]
})
export class AppModule {}
