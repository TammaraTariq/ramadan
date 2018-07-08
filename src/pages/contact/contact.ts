import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GiftplacePage } from '../giftplace/giftplace';
import { IftarplacePage } from  '../iftarplace/iftarplace';
import { GiftplacemodifyPage } from  '../giftplacemodify/giftplacemodify';
import { IftarplacemodifyPage } from  '../iftarplacemodify/iftarplacemodify';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }


 goToAddGiftPage(){
  this.navCtrl.push(GiftplacePage);
  console.log(' goToAddGiftPage');
 }


 goToAddIftarPage(){
  this.navCtrl.push(IftarplacePage);
  console.log(' goToAddIftarPage');
}


goToShowGiftPage(){
  this.navCtrl.push(GiftplacemodifyPage);
  console.log('goToShowGiftPage');
}


goToShowIftarPage(){
  this.navCtrl.push(IftarplacemodifyPage);
  console.log('goToShowIftarPage');
}



}
