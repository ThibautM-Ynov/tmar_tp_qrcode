import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrCodeToView: string = '';
  constructor(public navCtrl: NavController, private qrCode: QrCodeProvider) {
  }

  generate(text: string) {
    console.log(this.qrCode.generate(text));
    this.qrCode.generate(text).then(res => {
      this.qrCodeToView = res;
    });
  }
}
