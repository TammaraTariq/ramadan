import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { IftarmapPage } from '../pages/iftarmap/iftarmap';
import { BasketmapPage } from '../pages/basketmap/basketmap';
import { IftarplacemodifyPage } from '../pages/iftarplacemodify/iftarplacemodify';
import { GiftplacemodifyPage } from '../pages/giftplacemodify/giftplacemodify';
import { GiftplacePage } from '../pages/Giftplace/Giftplace';
import { IftarplacePage } from '../pages/iftarplace/iftarplace';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
    BasketmapPage,
    IftarplacemodifyPage,
    GiftplacemodifyPage,
    GiftplacePage,
    IftarplacePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
    BasketmapPage,
    IftarplacemodifyPage,
    GiftplacemodifyPage,
    GiftplacePage,
    IftarplacePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
