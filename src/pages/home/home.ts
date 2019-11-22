import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Device } from "@ionic-native/device";
import { Flashlight } from "@ionic-native/flashlight";
import { Vibration } from "@ionic-native/vibration";
import { BatteryStatus } from "@ionic-native/battery-status";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  modelo: string = "Xiomi";
  nivelBateria: number = 99;

  constructor(
    public navCtrl: NavController,
    public device: Device,
    private flashlight: Flashlight,
    private vibration: Vibration,
    private batteryStatus: BatteryStatus
  ) {}

  ionViewDidLoad() {
    this.modelo = this.device.model;

    this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
      this.nivelBateria = status.level;
    });
  }

  lanterna() {
    this.flashlight.toggle();
    this.vibration.vibrate(500);
  }

  lanterna02() {
    setInterval(() => {
      this.flashlight.toggle();
    }, 500);
  }

  lanterna03() {
    setInterval(() => {
      this.flashlight.toggle();
    }, 1000);
  }

  lanterna04() {
    setInterval(() => {
      this.flashlight.toggle();
    }, 1500);
  }

  vibrar() {
    this.vibration.vibrate([2000, 1000, 2000]);
  }
}
