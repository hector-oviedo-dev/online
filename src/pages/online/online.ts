import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BridgeProvider } from '../../providers/bridge/bridge';

/**
 * Generated class for the OnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-online',
  templateUrl: 'online.html',
})
export class OnlinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public services:BridgeProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlinePage');
  }

}
