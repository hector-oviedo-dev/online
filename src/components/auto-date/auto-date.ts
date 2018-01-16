import { Component } from '@angular/core';

/**
 * Generated class for the AutoDateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-date',
  templateUrl: 'auto-date.html'
})
export class AutoDateComponent {
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
  constructor() {

  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
}
