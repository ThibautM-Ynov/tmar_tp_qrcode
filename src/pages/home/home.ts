import {Component, HostListener} from '@angular/core';
import { NavController } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrCodeToView: string = '';
  isDisabled: boolean = true;
  shareButton = '';
  constructor(public navCtrl: NavController, private qrCode: QrCodeProvider) {
  }

  checkInput(text) {
    if (text === '' || text === null) {
      console.log('Input empty');
      this.isDisabled = true;
    }
    else {
      this.isDisabled = false;
    }
  }

  generate(text: string) {
    console.log(this.qrCode.generate(text));
    this.qrCode.generate(text).then(res => {
      this.qrCodeToView = res;
      this.shareButton = '<>';
    });
  }
}
