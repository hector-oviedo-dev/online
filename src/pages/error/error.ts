import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ContainerPage } from '../../pages/container/container';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {
  public MESSAGE:string;

  private events:Events;
  constructor(public navCtrl: NavController, public navParams: NavParams,private services:ServicesProvider) {
    this.events = services.events;
    this.events.subscribe('onChangeError', (content) => { this.onChange(content); });

    this.MESSAGE = navParams.get("MESSAGE");
  }
  public onChange(content) {
    let data = { refresh:true, content:content };
    this.navCtrl.push(ContainerPage,data);
  }
  ionViewWillLeave() {
    this.events.unsubscribe('onChangeError');
  }
  ionViewDidLoad() {

  }
}
