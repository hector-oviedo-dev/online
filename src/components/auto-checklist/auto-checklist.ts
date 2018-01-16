import { Component } from '@angular/core';

/**
 * Generated class for the AutoChecklistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-checklist',
  templateUrl: 'auto-checklist.html'
})
export class AutoChecklistComponent {

  public _ID:string;

  public _hidden:boolean;
  public _enabled:boolean;
  public _required:boolean;

  public _txt_required:string;
  public _txt_help:string;

  public _min:number;
  public _max:number;

  public _label:string;

  public _options = [];

  public _valid:boolean;
  constructor() {

  }
  public createForm() {
    let tmp = 0;
    for (let i = 0; i < this._options.length; i++) if (this._options[i].check) tmp++;

    if (tmp >= this._min && tmp <= this._max) this._valid = true;
    else this._valid = false;
  }
  public getValue() {
    return {
      id:this._ID,
      value:this._options
    }
  }
  public onChange(i) {

      if (this._options[i].check) this._options[i].check = false;
      else this._options[i].check = true;

      let tmp = 0;
      for (let i = 0; i < this._options.length; i++) if (this._options[i].check) tmp++;

      if (tmp >= this._min && tmp <= this._max) this._valid = true;
      else this._valid = false;
  }
}
