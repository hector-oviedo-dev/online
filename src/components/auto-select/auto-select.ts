import { Component } from '@angular/core';

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
  constructor() {

  }
  public createForm() {

  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
}
