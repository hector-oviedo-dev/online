import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AutoInputComponent } from '../../components/auto-input/auto-input';
import { AutoTextareaComponent } from '../../components/auto-textarea/auto-textarea';
import { AutoDateComponent } from '../../components/auto-date/auto-date';
import { AutoSelectComponent } from '../../components/auto-select/auto-select';
import { AutoCheckComponent } from '../../components/auto-check/auto-check';
import { AutoChecklistComponent } from '../../components/auto-checklist/auto-checklist';
import { AutoRadioComponent } from '../../components/auto-radio/auto-radio';
import { ServicesProvider } from '../../providers/services/services';

import { Events } from 'ionic-angular';
/**
 * Generated class for the AutoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-form',
  templateUrl: 'auto-form.html'
})
export class AutoFormComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  public components = [];

  public values = [];
  public _label_title:string;
  public _label_submit:string;
  public _label_cancel:string;

  public _action:string;

  public _valid:boolean = false;

  public _controls = [];

  private events:Events;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private services:ServicesProvider) {
    this.events = this.services.events;
    this.events.subscribe('onForm', (obj) => { this.onForm(obj); });
  }
  ionViewWillLeave() {
    this.events.unsubscribe('onForm');
  }
  ionViewDidLoad() {

  }
  public onForm(objSTR) {
    let obj = JSON.parse(objSTR);
    this._valid = true;
    for (let i = 0; i < this._controls.length;i++) {
      if (this._controls[i].id == obj.id) this._controls[i].valid = obj.valid;
      if (!this._controls[i].valid) this._valid = false;
    }

  }
  public submitClick() {

  }
  public cancelClick() {

  }
  public startProcess() {
    for (var i = 0; i < this.values.length; i++)
    {
      let control = { id:this.values[i].id , valid:false };


      switch (this.values[i].type) {
        case "TEXT":
          this.addInput(this.values[i]);
          break;
        case "PASSWORD":
          this.addInput(this.values[i]);
          break;
        case "TEXTAREA":
          this.addTextarea(this.values[i]);
          break;
        case "DATE":
          this.addDate(this.values[i]);
          break;
        case "CHECKBOX":
          control.valid = true;
          this.addCheckbox(this.values[i]);
          break;
        case "CHECKBOXLIST":
          this.addCheckboxlist(this.values[i]);
          break;
        case "RADIO":
          this.addRadio(this.values[i]);
          break;
        case "SELECT":
          this.addSelect(this.values[i]);
          break;
      }

      this._controls.push(control);
    }
  }
  public addInput(value:any) {
//    if (this.checkValues("id","value","hidden","enabled","required","min","max",""))
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoInputComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoInputComponent>component.instance)._ID          = value.id;
    (<AutoInputComponent>component.instance)._value       = value.value;

    (<AutoInputComponent>component.instance)._hidden      = value.hidden;
    (<AutoInputComponent>component.instance)._enabled     = value.enabled;
    (<AutoInputComponent>component.instance)._required    = value.required;

    (<AutoInputComponent>component.instance)._txt_required= value.txt_required;
    (<AutoInputComponent>component.instance)._txt_error   = value.txt_error;
    (<AutoInputComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoInputComponent>component.instance)._min         = value.min;
    (<AutoInputComponent>component.instance)._max         = value.max;

    (<AutoInputComponent>component.instance)._mask        = value.mask;
    (<AutoInputComponent>component.instance)._format      = value.format;

    //for (let i = 0; i < value.restrict.length; i++) (<AutoInputComponent>component.instance)._restrict.push(value.restrict[i]);

    (<AutoInputComponent>component.instance)._label       = value.label;
    (<AutoInputComponent>component.instance)._placeholder = value.placeholder;

    (<AutoInputComponent>component.instance).createForm();

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }
  public addTextarea(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoTextareaComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoTextareaComponent>component.instance)._ID          = value.id;
    (<AutoTextareaComponent>component.instance)._value       = value.value;

    (<AutoTextareaComponent>component.instance)._hidden      = value.hidden;
    (<AutoTextareaComponent>component.instance)._enabled     = value.enabled;
    (<AutoTextareaComponent>component.instance)._required    = value.required;

    (<AutoTextareaComponent>component.instance)._txt_required= value.txt_required;
    (<AutoTextareaComponent>component.instance)._txt_error   = value.txt_error;
    (<AutoTextareaComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoTextareaComponent>component.instance)._min         = value.min;
    (<AutoTextareaComponent>component.instance)._max         = value.max;

    (<AutoTextareaComponent>component.instance)._mask        = value.mask;
    (<AutoTextareaComponent>component.instance)._format      = value.format;

    //for (let i = 0; i < value.restrict.length; i++) (<AutoTextareaComponent>component.instance)._restrict.push(value.restrict[i]);

    (<AutoTextareaComponent>component.instance)._label       = value.label;
    (<AutoTextareaComponent>component.instance)._placeholder = value.placeholder;

    (<AutoTextareaComponent>component.instance).createForm();

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }
  public addDate(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoDateComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoDateComponent>component.instance)._ID          = value.id;
    (<AutoDateComponent>component.instance)._value       = value.value;

    (<AutoDateComponent>component.instance)._hidden      = value.hidden;
    (<AutoDateComponent>component.instance)._enabled     = value.enabled;
    (<AutoDateComponent>component.instance)._required    = value.required;

    (<AutoDateComponent>component.instance)._txt_required= value.txt_required;
    (<AutoDateComponent>component.instance)._txt_error   = value.txt_error;
    (<AutoDateComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoDateComponent>component.instance)._min         = value.min;
    (<AutoDateComponent>component.instance)._max         = value.max;

    (<AutoDateComponent>component.instance)._mask        = value.mask;
    (<AutoDateComponent>component.instance)._format      = value.format;

    for (let i = 0; i < value.restrict.length; i++) (<AutoDateComponent>component.instance)._restrict.push(value.restrict[i]);

    (<AutoDateComponent>component.instance)._label       = value.label;
    (<AutoDateComponent>component.instance)._placeholder = value.placeholder;

    //(<AutoDateComponent>component.instance).createForm();

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }
  public addCheckbox(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoCheckComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoCheckComponent>component.instance)._ID          = value.id;
    (<AutoCheckComponent>component.instance)._value       = value.value;

    (<AutoCheckComponent>component.instance)._hidden      = value.hidden;
    (<AutoCheckComponent>component.instance)._enabled     = value.enabled;
    (<AutoCheckComponent>component.instance)._required    = value.required;

    (<AutoCheckComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoCheckComponent>component.instance)._label       = value.label;

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }
  public addCheckboxlist(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoChecklistComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoChecklistComponent>component.instance)._ID          = value.id;

    (<AutoChecklistComponent>component.instance)._hidden      = value.hidden;
    (<AutoChecklistComponent>component.instance)._enabled     = value.enabled;
    (<AutoChecklistComponent>component.instance)._required    = value.required;

    (<AutoChecklistComponent>component.instance)._txt_required= value.txt_required;
    (<AutoChecklistComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoChecklistComponent>component.instance)._min         = value.min;
    (<AutoChecklistComponent>component.instance)._max         = value.max;

    (<AutoChecklistComponent>component.instance)._label       = value.label;

    for (let i = 0; i < value.values.length; i++) {
      let option = {
        label:value.values[i].label,
        value:value.values[i].value,
        check:value.values[i].check
      };

      (<AutoChecklistComponent>component.instance)._options.push(option);
    }

    (<AutoChecklistComponent>component.instance).createForm();

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    console.log("list agregada")
    return true;
  }
  public addRadio(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoRadioComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoRadioComponent>component.instance)._ID          = value.id;

    (<AutoRadioComponent>component.instance)._hidden      = value.hidden;
    (<AutoRadioComponent>component.instance)._enabled     = value.enabled;
    (<AutoRadioComponent>component.instance)._required    = value.required;

    (<AutoRadioComponent>component.instance)._txt_required= value.txt_required;
    (<AutoRadioComponent>component.instance)._txt_help    = value.txt_help;

    (<AutoRadioComponent>component.instance)._label       = value.label;

    for (let i = 0; i < value.values.length; i++) {
      let option = {
        label:value.values[i].label,
        value:value.values[i].value,
        check:value.values[i].check
      };

      (<AutoRadioComponent>component.instance)._options.push(option);
    }

    (<AutoRadioComponent>component.instance).createForm();

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }
  public addSelect(value:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoSelectComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoSelectComponent>component.instance)._ID          = value.id;
    (<AutoSelectComponent>component.instance)._value       = value.value;

    (<AutoSelectComponent>component.instance)._hidden      = value.hidden;
    (<AutoSelectComponent>component.instance)._enabled     = value.enabled;
    (<AutoSelectComponent>component.instance)._required    = value.required;

    (<AutoSelectComponent>component.instance)._label       = value.label;

    for (let i = 0; i < value.values.length; i++) {
      let option = {
        label:value.values[i].label,
        value:value.values[i].value
      };
      if (value.values[i].check) (<AutoSelectComponent>component.instance)._value = value.values[i].value;

      (<AutoSelectComponent>component.instance)._options.push(option);
    }

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    return true;
  }

}
