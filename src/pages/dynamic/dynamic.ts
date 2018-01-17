import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events} from 'ionic-angular';
import { ContainerPage } from '../../pages/container/container';
import { ErrorPage } from '../../pages/error/error';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the DynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {
  public root;

  public menus = [];

  public title:string = "My Title";

  public actual:string;

  private events:Events;
  constructor(public navCtrl: NavController, public navParams: NavParams,private services:ServicesProvider) {
    this.events = services.events;
  }
  public menuClick(i):void {
    if (this.menus[i].action == "cascade") {
      if (this.menus[i].cascadeshowing) this.menus[i].cascadeshowing = false;
      else this.menus[i].cascadeshowing = true;

      this.menuProcess(this.menus[i].parent,this.menus[i].cascadeshowing)
    } else {
      this.root = ContainerPage;
      console.log("sending change event:" , this.menus[i].action)
      this.events.publish("onChange", this.menus[i].action);
      this.events.publish("onChangeError", this.menus[i].action);
    }
  }
  public menuProcess(parent, value) {
    for (let i = 0; i < this.menus.length; i++) if (this.menus[i].parentchild == parent) this.menus[i].show = value;
  }

  ionViewDidLoad() {

    this.menus = [
      {
        label:"TEST Online",
        action:"cascade",
        parent:1,
        cascadeshowing:false,
        show:true,
        parentchild:0
      },
      {
        label:"Formulario",
        action:"obtenerControlesPantalla/mnd",
        show:false,
        parentchild:1
      },
      {
        label:"Grilla",
        action:"obtenerGrillaPantalla/mnd",
        show:false,
        parentchild:1
      },


      {
        label:"TEST Menu Cascade",
        action:"cascade",
        parent:2,
        cascadeshowing:false,
        show:false,
        parentchild:1
      },
      {
        label:"Sub Menu 1",
        action:"obtenerGrillaPantalla",
        show:false,
        parentchild:2
      },
      {
        label:"Sub Menu 2",
        action:"obtenerGrillaPantalla",
        show:false,
        parentchild:2
      },


      {
        label:"Otro Menu",
        action:"obtenerGrillaPantalla",
        show:true,
        parentchild:0
      },
      {
        label:"Otro Menu 2",
        action:"obtenerGrillaPantalla",
        show:true,
        parentchild:0
      }
    ]
  }
}
