import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AutoCheckComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-check',
  templateUrl: 'auto-check.html'
})
export class AutoCheckComponent {

  public _ID:string;
  public _value:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_help:string;

  public _label:boolean;

  constructor() {

  }
  public getValue() {
    return {
      id:this._ID,
      value:this._value
    }
  }
}
