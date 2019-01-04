import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import QRCode from 'qrcode';
import { Storage } from '@ionic/storage';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello QrCodeProvider Provider');
  }

  async generate(text: string, date: string): Promise<string> {
    let qrCodeUrl = '';
    QRCode.toDataURL(text, function (err, url) {
      qrCodeUrl = url
    });
    await this.storage.set(date, text);
    return Promise.resolve(qrCodeUrl);
  }

  display(text: string, date: string): Promise<string> {
    let qrCodeUrl = '';
    QRCode.toDataURL(text, function (err, url) {
      qrCodeUrl = url
    });
    return Promise.resolve(qrCodeUrl);
  }

}
