import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the AutoGridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-grid',
  templateUrl: 'auto-grid.html'
})
export class AutoGridComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  public components = [];

  public _label_title:string;
  public _label_submit:string;
  public _label_cancel:string;

  public _action:string;

  public _titles = [];
  public _rows = [];

  public _width:number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private services:ServicesProvider) {

  }
  public startProcess() {

  }
}
