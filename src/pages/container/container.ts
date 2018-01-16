import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutoFormComponent } from '../../components/auto-form/auto-form';
import { ServicesProvider } from '../../providers/services/services';
import { ErrorPage } from '../../pages/error/error';

/**
 * Generated class for the ContainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  public components = [];

  public menus = [];

  public service:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private componentFactoryResolver: ComponentFactoryResolver,private services:ServicesProvider) {
    this.service = this.services.getContent();
  }
  public onServiceResult(data) {
    let res = data.json;
    console.log(JSON.stringify(res));
    if (res.sections.length) {
      for (var i = 0; res.sections.length > i; i++) {

        if (res.sections[i].type) {

          switch (res.sections[i].type) {
            case "form":
              this.addFormComponent(res.sections[i]);
              break;
          }
        } else {
          let data = { "MESSAGE":"Se esperaba en posicion" + i.toString() +" de 'sections' el objeto 'type'" }
          this.navCtrl.push(ErrorPage, data);
        }
      }
    } else {
      let data = { "MESSAGE":"Se esperaba array 'sections'" }
      this.navCtrl.push(ErrorPage, data);
    }
  }
  ngOnInit() {

  }

  ionViewDidLoad() {
    this.services.doGet(this.service,"/mnd").subscribe(res => { this.onServiceResult(res); });
    /*
    let form = {
     type:"form",
     controls: [
       {
        "id":"NAME",
        "type":"TEXT",
        "hidden":false,
        "enabled":true,
        "required":true,
        "txt_required":"Debe ingresar su nombre.",
        "txt_error":"",
        "txt_help":"Ingrese su Nombre",
        "max":15,
        "min":5,
        "mask":"nn-nnnnnnnn-n",
        "format":"ALL",
        "restrict":[],
        "label":"Nombre",
        "placeholder":"Ingrese su Nombre",
        "display":[]
      },
      {
        "id":"DESC",
        "type":"TEXTAREA",
        "hidden":false,
        "enabled":true,
        "required":true,
        "txt_required":"La descripcion es obligatoria",
        "txt_error":"Por favor verifique el formato",
        "txt_help":"Ingrese una descripcion",
        "max":500,
        "min":10,
        "mask":"",
        "format":"",
        "restrict":["A","B","C","$","1"],
        "label":"Descripcion",
        "placeholder":"Ingrese la descripcion",
        "display":[]
      },
      {
        "id":"CUIT_2",
        "type":"TEXT",
        "hidden":false,
        "enabled":true,
        "required":true,
        "txt_required":"Este campo es obligatorio",
        "txt_error":"Por favor verifique el formato",
        "txt_help":"Ingrese su cuit o cuil",
        "max":50,
        "min":10,
        "mask":"nn-nnnnnnnn-n",
        "format":"RESTRICT",
        "restrict":["A","B","C","$","1"],
        "label":"CUIL/CUIT",
        "placeholder":"Ingrese su CUIL/CUIT",
        "display":[]
      },
      {
        "id":"EMAIL_ALERT",
        "type":"CHECKBOX",
        "hidden":false,
        "enabled":true,
        "required":false,
        "txt_help":"Avisar por email una vez registrado.",
        "label":"Avisar por E-mail",
        "check":true
      },
      {
        "id":"PROVINCIA",
        "type":"CHECKBOXLIST",
        "hidden":false,
        "enabled":true,
        "required":false,
        "txt_required":"Este campo es obligatorio",
        "txt_help":"Seleccione las provincias",
        "label":"Seleccionar Provincias",
        "min":1,
        "max":2,
        "values":[
          {
            "label":"Formosa",
            "value":"formosa",
            "check":false
          },
          {
            "label":"Buenos Aires",
            "value":"bsas",
            "check":false
          },
          {
            "label":"Santa Fe",
            "value":"santafe",
            "check":false
          }
        ]
      },
      {
        "id":"PROVINCIA_2",
        "type":"RADIO",
        "hidden":false,
        "enabled":true,
        "required":false,
        "txt_required":"Este campo es obligatorio",
        "txt_help":"Seleccione UNA de las provincias",
        "label":"Seleccionar Provincia Actual",
        "values":[
          {
            "label":"Formosa",
            "value":"formosa",
            "check":false
          },
          {
            "label":"Buenos Aires",
            "value":"bsas",
            "check":false
          },
          {
            "label":"Santa Fe",
            "value":"santafe",
            "check":false
          }
        ]
      },
      {
        "id":"PROVINCIA_3",
        "type":"SELECT",
        "hidden":false,
        "enabled":true,
        "required":false,
        "txt_required":"Este campo es obligatorio",
        "txt_help":"Seleccione UNA de las provincias",
        "label":"Seleccionar Provincia",
        "values":[
          {
            "label":"Formosa",
            "value":"formosa",
            "check":false
          },
          {
            "label":"Buenos Aires",
            "value":"bsas",
            "check":false
          },
          {
            "label":"Santa Fe",
            "value":"santafe",
            "check":false
          }
        ]
      }
    ],
    display: {
      title:"Formulario de agregar",
      action:"postNewData",
      label_submit:"Agregar",
      label_cancel:"Cerrar"
    }
    };
    let sections = [];
    sections.push(form);
    let res = { json: { sections:sections}};

    this.onServiceResult(res);*/
  }
  ///Add Form View
  public addFormComponent(data:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AutoFormComponent);
    const component = this.container.createComponent(componentFactory);

    (<AutoFormComponent>component.instance)._action       = data.display.action;

    (<AutoFormComponent>component.instance)._label_title  = data.display.title;
    (<AutoFormComponent>component.instance)._label_submit = data.display.label_submit;
    (<AutoFormComponent>component.instance)._label_cancel = data.display.label_cancel;

    (<AutoFormComponent>component.instance).values        = data.controls;

    (<AutoFormComponent>component.instance).startProcess();

    this.components.push(component);
  }
}
