import { Component } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AutoSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-select',
  templateUrl: 'auto-select.html'
})
export class AutoSelectComponent {

  public _ID:string;
  public _value:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;
  public _txt_help:string;

  public _label:string;
  public _placeholder:string;

  public _options = [];

  public _valid:boolean;
  private events:Events;
  constructor(private services:ServicesProvider) {
    this.events = services.events;
  }
  public createForm() {

  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
  public onChange(event) {
    if (this._value) this._valid = true;
    else this._valid = false;
    let data = { id:this._ID, valid:this._valid };
    this.events.publish("onForm", JSON.stringify(data));
  }
}
