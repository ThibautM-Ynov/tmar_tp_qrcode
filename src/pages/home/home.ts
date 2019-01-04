import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { QrCodeProvider } from "../../providers/qr-code/qr-code";
import {SocialSharing} from "@ionic-native/social-sharing";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrCodeToView: string = '';
  isDisabled: boolean = true;
  isHidden: boolean = true;

  constructor(
      public navCtrl: NavController,
      private qrCode: QrCodeProvider,
      private socialSharing: SocialSharing,
      private datePipe: DatePipe,
  ) {}

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
    let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS');
    this.qrCode.generate(text, date).then(res => {
      this.qrCodeToView = res;
      this.isHidden = false;
    });
  }

  share(qrcode) {
    this.socialSharing.share('Look at this !', 'QRCode', qrcode);
  }

}
