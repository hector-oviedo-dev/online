import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AutoInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-input',
  templateUrl: 'auto-input.html'
})
export class AutoInputComponent {

  public _ID:string;
  public _value:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;
  public _txt_error:string;
  public _txt_help:string;

  public _min:number;
  public _max:number;

  public _mask:string;
  public _format:string;

  public _restrict = [];

  public _label:string;
  public _placeholder:string;

  public _display = [];

  public _form:FormGroup;

  private events:Events;
  constructor(private _fb:FormBuilder, private services:ServicesProvider) {

      this.events = services.events;
  }
  public createForm() {
    this._form = this._fb.group({data:[""]});

    let validators = [];
    if (this._required) validators.push(Validators.required);
    if (this._required) validators.push(Validators.minLength(this._min));
    if (this._required) validators.push(Validators.maxLength(this._max));
    this._form.controls["data"].setValidators(validators);

    if (!this._enabled) this._form.controls["data"].disable();
  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
  public onChange(event) {
    let data = { id:this._ID, valid:this._form.controls['data'].valid };
    this.events.publish("onForm", JSON.stringify(data));
  }
}
