import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContainerPage } from '../../pages/container/container';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private services:ServicesProvider) {

  }
  public menuClick(i):void {
    if (this.menus[i].action == "cascade") {
      if (this.menus[i].cascadeshowing) this.menus[i].cascadeshowing = false;
      else this.menus[i].cascadeshowing = true;

      this.menuProcess(this.menus[i].parent,this.menus[i].cascadeshowing)
    } else {
      this.services.setContent(this.menus[i].action)
      this.root = ContainerPage;
    }
  }
  public menuProcess(parent, value) {
    for (let i = 0; i < this.menus.length; i++) if (this.menus[i].parentchild == parent) this.menus[i].show = value;
  }

  ionViewDidLoad() {

    this.menus = [
      {
        label:"Usuarios",
        action:"cascade",
        parent:1,
        cascadeshowing:false,
        show:true,
        parentchild:0
      },
      {
        label:"Monedas",
        action:"obtenerControlesPantalla",
        show:false,
        parentchild:1
      },
      {
        label:"Eliminar",
        action:"removeuser",
        show:false,
        parentchild:1
      },


      {
        label:"SubUsuarios",
        action:"cascade",
        parent:2,
        cascadeshowing:false,
        show:false,
        parentchild:1
      },
      {
        label:"SubUsuarios 1",
        action:"obtenerControlesPantalla",
        show:false,
        parentchild:2
      },
      {
        label:"SubUsuarios 2",
        action:"removeuser",
        show:false,
        parentchild:2
      },


      {
        label:"Online",
        action:"online",
        show:true,
        parentchild:0
      },
      {
        label:"Player Tracking",
        action:"playertracking",
        show:true,
        parentchild:0
      }
    ]
  }
}
