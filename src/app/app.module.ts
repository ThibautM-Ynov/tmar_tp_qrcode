import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { QRScanner } from "@ionic-native/qr-scanner";
import { SocialSharing } from "@ionic-native/social-sharing";
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import {DetailsPage} from "../pages/details/details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    QRScanner,
    SocialSharing,
    DatePipe,
  ]
})
export class AppModule {}
