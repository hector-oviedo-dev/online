import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AutoTextareaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-textarea',
  templateUrl: 'auto-textarea.html'
})
export class AutoTextareaComponent {

  public _ID:string;
  public _value:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;
  public _txt_error:string;
  public _txt_help:string;

  public _min:number = 0;
  public _max:number = 50;

  public _mask:string;
  public _format:string;

  public _restrict = [];

  public _label:string = "null";
  public _placeholder:string = "";

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
