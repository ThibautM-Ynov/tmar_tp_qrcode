import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocialSharing} from "@ionic-native/social-sharing";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing,) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem.url)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  share(url) {
    this.socialSharing.share('Look at this !', 'QRCode', url);
  }

}
