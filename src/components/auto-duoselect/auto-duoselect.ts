import { Component } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AutoDuoselectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-duoselect',
  templateUrl: 'auto-duoselect.html'
})
export class AutoDuoselectComponent {

    public _ID:string;
    public _actual:string;
    public _actual2:string;
    public _value:string;

    public _hidden:boolean;
    public _enabled:boolean;
    public _required:boolean;

    public _txt_required:string;
    public _txt_help:string;

    public _label:string;
    public _placeholder:string;

    public _options = [];

    public _values = [];

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
  public onSelect(event) {
    this._value = "";
    for (let i = 0; i < this._options.length; i++) {
      if (this._options[i].value == this._actual) {
        this._values = [];
        for (let j = 0; j < this._options[i].values.length; j++) {
          let obj = {label:this._options[i].values[j].label, value:this._options[i].values[j].value}
          this._values.push(obj);
        }
      }
    }
  }
  public onChange(event) {
    if (!this._actual2) this._value = "";
    else this._value = this._actual + "," + this._actual2;
    if (this._value) this._valid = true;
    else this._valid = false;
    let data = { id:this._ID, valid:this._valid };
    this.events.publish("onForm", JSON.stringify(data));
  }
}
