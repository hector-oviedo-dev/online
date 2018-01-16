import { Component } from '@angular/core';

/**
 * Generated class for the AutoMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-menu',
  templateUrl: 'auto-menu.html'
})
export class AutoMenuComponent {

  text: string;

  constructor() {
    console.log('Hello AutoMenuComponent Component');
    this.text = 'Hello World';
  }

}
