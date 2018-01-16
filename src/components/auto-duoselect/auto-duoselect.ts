import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello AutoDuoselectComponent Component');
    this.text = 'Hello World';
  }

}
