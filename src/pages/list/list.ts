import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import {DetailsPage} from "../details/details";
import QRCode from 'qrcode';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  url: string = '';
  items: Array<{date: string, text: string}>;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private storage: Storage,
      private datePipe: DatePipe,
      private qrCode: QrCodeProvider,
  )
  {}

  ionViewWillEnter() {
    this.items = [];
    this.storage.keys().then((keys) => {
      for (let key of keys) {
        this.storage.get(key).then((val) => {
          let date = this.datePipe.transform(new Date(key), 'yyyy-MM-dd HH:mm');
          this.items.push({
            date: date,
            text: val,
          });
        });
      }
    });
  }

  async itemTapped(event, item) {
    await this.qrCode.display(item.text, item.date).then(res => {
      this.url = res;
    });
    this.navCtrl.push(DetailsPage, {
      item: {
        date: item.date,
        text: item.text,
        url: this.url,
      }
    });
  }
}
