import { Component } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AutoRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-radio',
  templateUrl: 'auto-radio.html'
})
export class AutoRadioComponent {

  public _ID:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;
  public _txt_help:string;

  public _label:string;

  public _options = [];

  public _valid:boolean;

  private events:Events;
  constructor(private services:ServicesProvider) {
    this.events = services.events;
  }
  public createForm() {
    this._valid = false;
    for (let i = 0; i < this._options.length; i++) if (this._options[i].check) this._valid = true;
  }
  public getValue() {
    return {
      id:this._ID,
      value:this._options
    }
  }
  public onChange(i) {
    for (let j = 0; j < this._options.length; j++) this._options[j].check = false;
    this._options[i].check = true;

    this._valid = false;
    for (let i = 0; i < this._options.length; i++) if (this._options[i].check) this._valid = true;

    let data = { id:this._ID, valid:this._valid };
    this.events.publish("onForm", JSON.stringify(data));
  }
}
