import { Component } from '@angular/core';

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

    public _ID:string;

    public _titles = [];
    public _data = [];

  constructor() {
    
  }

}
