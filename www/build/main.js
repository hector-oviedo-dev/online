webpackJsonp([5],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_container_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DynamicPage = (function () {
    function DynamicPage(navCtrl, navParams, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.root = __WEBPACK_IMPORTED_MODULE_2__pages_container_container__["a" /* ContainerPage */];
        this.menus = [];
        this.title = "My Title";
        this.events = services.events;
    }
    DynamicPage.prototype.menuClick = function (i) {
        if (this.menus[i].action == "cascade") {
            if (this.menus[i].cascadeshowing)
                this.menus[i].cascadeshowing = false;
            else
                this.menus[i].cascadeshowing = true;
            this.menuProcess(this.menus[i].parent, this.menus[i].cascadeshowing);
        }
        else {
            //this.root = ContainerPage;
            console.log("sending change event:", this.menus[i].action);
            this.events.publish("onChange", this.menus[i].action);
            this.events.publish("onChangeError", this.menus[i].action);
        }
    };
    DynamicPage.prototype.menuProcess = function (parent, value) {
        for (var i = 0; i < this.menus.length; i++)
            if (this.menus[i].parentchild == parent)
                this.menus[i].show = value;
    };
    DynamicPage.prototype.ionViewDidLoad = function () {
        this.menus = [
            {
                label: "TEST Online",
                action: "cascade",
                parent: 1,
                cascadeshowing: false,
                show: true,
                parentchild: 0
            },
            {
                label: "Formulario",
                action: "obtenerControlesPantalla/mnd",
                show: false,
                parentchild: 1
            },
            {
                label: "Grilla",
                action: "obtenerGrillaPantalla/mnd",
                show: false,
                parentchild: 1
            },
            {
                label: "TEST Menu Cascade",
                action: "cascade",
                parent: 2,
                cascadeshowing: false,
                show: false,
                parentchild: 1
            },
            {
                label: "Sub Menu 1",
                action: "obtenerGrillaPantalla",
                show: false,
                parentchild: 2
            },
            {
                label: "Sub Menu 2",
                action: "obtenerGrillaPantalla",
                show: false,
                parentchild: 2
            },
            {
                label: "Otro Menu",
                action: "obtenerGrillaPantalla",
                show: true,
                parentchild: 0
            },
            {
                label: "Otro Menu 2",
                action: "obtenerGrillaPantalla",
                show: true,
                parentchild: 0
            }
        ];
    };
    DynamicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic',template:/*ion-inline-start:"D:\git\online\src\pages\dynamic\dynamic.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-split-pane>\n  <!--  our side menu  -->\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item *ngFor="let menu of menus;let i = index;" (click)="menuClick(i)" [hidden]="!menu.show" [style.background-color]="menu.bgcolor" [ngClass]="(menu.action==\'cascade\')?\'cascadeParent\':\'cascadeChild\'">{{menu.label}}</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <!-- the main content -->\n  <ion-nav [root]="root" main #content>\n\n  </ion-nav>\n</ion-split-pane>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\dynamic\dynamic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]])
    ], DynamicPage);
    return DynamicPage;
}());

//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainmenuPage = (function () {
    function MainmenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainmenuPage.prototype.ionViewDidLoad = function () {
    };
    MainmenuPage.prototype.onLogout = function () {
    };
    MainmenuPage.prototype.onOnline = function () {
    };
    MainmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainmenu',template:/*ion-inline-start:"D:\git\online\src\pages\mainmenu\mainmenu.html"*/'<ion-content>\n\n\n <!-- this fab is placed at bottom right -->\n <ion-fab center middle>\n   <button ion-fab>Menu Principal</button>\n\n   <ion-fab-list side="right">\n     <button ion-fab (click)="onOnline()">Online</button>\n   </ion-fab-list>\n\n   <ion-fab-list side="left">\n       <button ion-fab (click)="onOnline()">Usuarios</button>\n   </ion-fab-list>\n\n   <ion-fab-list side="top">\n     <button ion-fab>Player Tracking</button>\n   </ion-fab-list>\n\n   <ion-fab-list side="bottom">\n     <button ion-fab>Caja</button>\n   </ion-fab-list>\n\n\n </ion-fab>\n <ion-fab bottom right>\n   <button ion-fab side="left" (click)="onLogout()">Cerrar Sesion</button>\n</ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\mainmenu\mainmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainmenuPage);
    return MainmenuPage;
}());

//# sourceMappingURL=mainmenu.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/container/container.module": [
		453,
		4
	],
	"../pages/dynamic/dynamic.module": [
		454,
		3
	],
	"../pages/error/error.module": [
		455,
		2
	],
	"../pages/mainmenu/mainmenu.module": [
		456,
		1
	],
	"../pages/online/online.module": [
		457,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auto_input_auto_input__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auto_textarea_auto_textarea__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auto_date_auto_date__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auto_check_auto_check__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auto_checklist_auto_checklist__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_auto_radio_auto_radio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_auto_select_auto_select__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_auto_duoselect_auto_duoselect__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_services_services__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_error_error__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the AutoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoFormComponent = (function () {
    function AutoFormComponent(navCtrl, componentFactoryResolver, services) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.componentFactoryResolver = componentFactoryResolver;
        this.services = services;
        this.components = [];
        this.values = [];
        this._valid = false;
        this._controls = [];
        this.events = this.services.events;
        this.events.subscribe('onForm', function (obj) { _this.onForm(obj); });
    }
    AutoFormComponent.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('onForm');
    };
    AutoFormComponent.prototype.ionViewDidLoad = function () {
    };
    AutoFormComponent.prototype.onForm = function (objSTR) {
        var obj = JSON.parse(objSTR);
        this._valid = true;
        for (var i = 0; i < this._controls.length; i++) {
            if (this._controls[i].id == obj.id)
                this._controls[i].valid = obj.valid;
            if (!this._controls[i].valid)
                this._valid = false;
        }
    };
    AutoFormComponent.prototype.submitClick = function () {
        var _this = this;
        var data = [];
        for (var i = 0; i < this.components.length; i++)
            data.push(this.components[i].instance.getValue());
        console.log(data);
        this.services.doPost(this._action, JSON.stringify(data)).subscribe(function (data) { _this.onServiceResult(data); }, function (err) {
            var data = { "MESSAGE": "404 Server Address" };
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
        });
    };
    AutoFormComponent.prototype.onServiceResult = function (result) {
        if (result.success == true)
            console.log("Success");
        else {
            var data = { "MESSAGE": result.error };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
            //this.navCtrl.push(MainmenuPage);
        }
    };
    AutoFormComponent.prototype.cancelClick = function () {
    };
    AutoFormComponent.prototype.startProcess = function () {
        for (var i = 0; i < this.values.length; i++) {
            var control = { id: this.values[i].id, valid: false };
            var arr = [];
            var result = void 0;
            switch (this.values[i].type) {
                case "TEXT":
                    arr = ["id", "value", "hidden", "enabled", "required", "txt_required", "txt_error", "txt_help", "min", "max", "mask", "format", "label", "placeholder"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addInput(this.values[i]);
                    break;
                case "TEXTAREA":
                    arr = ["id", "value", "hidden", "enabled", "required", "txt_required", "txt_error", "txt_help", "min", "max", "mask", "format", "label", "placeholder"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addInput(this.values[i]);
                    break;
                case "CHECKBOX":
                    control.valid = true;
                    arr = ["id", "value", "hidden", "enabled", "required", "txt_help", "label"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addCheckbox(this.values[i]);
                    break;
                case "CHECKBOXLIST":
                    arr = ["id", "hidden", "enabled", "required", "txt_required", "txt_help", "min", "max", "label", "values"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addCheckboxlist(this.values[i]);
                    break;
                case "RADIO":
                    arr = ["id", "hidden", "enabled", "required", "txt_required", "txt_help", "label", "values"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addRadio(this.values[i]);
                    break;
                case "SELECT":
                    arr = ["id", "hidden", "enabled", "required", "txt_required", "txt_help", "label", "values"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addSelect(this.values[i]);
                    break;
                case "DUOSELECT":
                    arr = ["id", "hidden", "enabled", "required", "txt_required", "txt_help", "label", "values"];
                    result = (this.validateComponent(this.values[i], arr));
                    if (!result.valid) {
                        var data = { "MESSAGE": "MalFormed: Missing at object of type: " + this.values[i].type + " objects: " + result.missing };
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_error_error__["a" /* ErrorPage */], data);
                        return;
                    }
                    else
                        this.addDuoSelect(this.values[i]);
                    break;
            }
            this._controls.push(control);
        }
    };
    AutoFormComponent.prototype.validateComponent = function (obj, arr) {
        var result = { valid: true, missing: [] };
        for (var i = 0; i < arr.length; i++)
            if (!obj.hasOwnProperty(arr[i]))
                result.missing.push(arr[i]);
        if (result.missing.length)
            result.valid = false;
        return result;
    };
    AutoFormComponent.prototype.addInput = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__components_auto_input_auto_input__["a" /* AutoInputComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_error = value.txt_error;
        component.instance._txt_help = value.txt_help;
        component.instance._min = value.min;
        component.instance._max = value.max;
        component.instance._mask = value.mask;
        component.instance._format = value.format;
        //for (let i = 0; i < value.restrict.length; i++) (<AutoInputComponent>component.instance)._restrict.push(value.restrict[i]);
        component.instance._label = value.label;
        component.instance._placeholder = value.placeholder;
        component.instance.createForm();
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addTextarea = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__components_auto_textarea_auto_textarea__["a" /* AutoTextareaComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_error = value.txt_error;
        component.instance._txt_help = value.txt_help;
        component.instance._min = value.min;
        component.instance._max = value.max;
        component.instance._mask = value.mask;
        component.instance._format = value.format;
        //for (let i = 0; i < value.restrict.length; i++) (<AutoTextareaComponent>component.instance)._restrict.push(value.restrict[i]);
        component.instance._label = value.label;
        component.instance._placeholder = value.placeholder;
        component.instance.createForm();
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addDate = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__components_auto_date_auto_date__["a" /* AutoDateComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_error = value.txt_error;
        component.instance._txt_help = value.txt_help;
        component.instance._min = value.min;
        component.instance._max = value.max;
        component.instance._mask = value.mask;
        component.instance._format = value.format;
        for (var i = 0; i < value.restrict.length; i++)
            component.instance._restrict.push(value.restrict[i]);
        component.instance._label = value.label;
        component.instance._placeholder = value.placeholder;
        //(<AutoDateComponent>component.instance).createForm();
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addCheckbox = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__components_auto_check_auto_check__["a" /* AutoCheckComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_help = value.txt_help;
        component.instance._label = value.label;
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addCheckboxlist = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__components_auto_checklist_auto_checklist__["a" /* AutoChecklistComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_help = value.txt_help;
        component.instance._min = value.min;
        component.instance._max = value.max;
        component.instance._label = value.label;
        for (var i = 0; i < value.values.length; i++) {
            var option = {
                label: value.values[i].label,
                value: value.values[i].value,
                check: value.values[i].check
            };
            component.instance._options.push(option);
        }
        component.instance.createForm();
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        console.log("list agregada");
        return true;
    };
    AutoFormComponent.prototype.addRadio = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__components_auto_radio_auto_radio__["a" /* AutoRadioComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_help = value.txt_help;
        component.instance._label = value.label;
        for (var i = 0; i < value.values.length; i++) {
            var option = {
                label: value.values[i].label,
                value: value.values[i].value,
                check: value.values[i].check
            };
            component.instance._options.push(option);
        }
        component.instance.createForm();
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addSelect = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__components_auto_select_auto_select__["a" /* AutoSelectComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_help = value.txt_help;
        component.instance._label = value.label;
        for (var i = 0; i < value.values.length; i++) {
            var option = {
                label: value.values[i].label,
                value: value.values[i].value
            };
            if (value.values[i].check)
                component.instance._value = value.values[i].value;
            component.instance._options.push(option);
        }
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    AutoFormComponent.prototype.addDuoSelect = function (value) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_8__components_auto_duoselect_auto_duoselect__["a" /* AutoDuoselectComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._ID = value.id;
        component.instance._value = value.value;
        component.instance._hidden = value.hidden;
        component.instance._enabled = value.enabled;
        component.instance._required = value.required;
        component.instance._txt_required = value.txt_required;
        component.instance._txt_help = value.txt_help;
        component.instance._label = value.label;
        for (var i = 0; i < value.values.length; i++) {
            var option = {
                label: value.values[i].label,
                value: value.values[i].value,
                values: []
            };
            for (var j = 0; j < value.values[i].values.length; j++)
                option.values.push(value.values[i].values[j]);
            if (value.values[i].check)
                component.instance._value = value.values[i].value;
            component.instance._options.push(option);
        }
        // Push the component so that we can keep track of which components are created
        this.components.push(component);
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */])
    ], AutoFormComponent.prototype, "container", void 0);
    AutoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-form',template:/*ion-inline-start:"D:\git\online\src\components\auto-form\auto-form.html"*/'<ion-grid>\n\n  <ion-row>\n  <ion-col>\n    <br>\n    <ion-header>\n\n        <ion-title>{{_label_title}}</ion-title>\n        <br>\n\n    </ion-header>\n    <br>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col>\n    <ng-template #container>\n    </ng-template>\n  </ion-col>\n  </ion-row>\n\n  <ion-row>\n  <ion-col>\n    <button ion-button [disabled]="!_valid" (click)="submitClick()">{{_label_submit}}</button>\n  </ion-col>\n  <ion-col>\n    <button ion-button>{{_label_cancel}}</button>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\git\online\src\components\auto-form\auto-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_9__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoFormComponent);
    return AutoFormComponent;
}());

//# sourceMappingURL=auto-form.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AutoInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoInputComponent = (function () {
    function AutoInputComponent(_fb, services) {
        this._fb = _fb;
        this.services = services;
        this._restrict = [];
        this._display = [];
        this.events = services.events;
    }
    AutoInputComponent.prototype.createForm = function () {
        this._form = this._fb.group({ data: [""] });
        var validators = [];
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required);
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(this._min));
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(this._max));
        this._form.controls["data"].setValidators(validators);
        if (!this._enabled)
            this._form.controls["data"].disable();
    };
    AutoInputComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoInputComponent.prototype.onChange = function (event) {
        var data = { id: this._ID, valid: this._form.controls['data'].valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-input',template:/*ion-inline-start:"D:\git\online\src\components\auto-input\auto-input.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<form [formGroup]="_form">\n<ion-grid [hidden]="_hidden" [ngClass]="(_enabled)?((_form.controls[\'data\'].valid)?\'formBoxValid\':\'formBoxInalid\'):\'formBoxDisabled\'">\n  <ion-row>\n    <ion-col *ngIf="_label != undefined" class="formTextLabel">\n      <ion-label>{{_label}}\n      </ion-label>\n    </ion-col>\n    <ion-col>\n      <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input formControlName="data" placeholder="{{_placeholder}}" min="{{_min}}" maxlength="{{_max}}" [(ngModel)]="_value" [ngClass]="(_enabled)?((_form.controls[\'data\'].valid)?\'formTextValid\':\'formTextInalid\'):\'formTextDisabled\'" (keyup)="onChange($event)"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_form.controls[\'data\'].valid && _txt_required != undefined)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n</form>\n'/*ion-inline-end:"D:\git\online\src\components\auto-input\auto-input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoInputComponent);
    return AutoInputComponent;
}());

//# sourceMappingURL=auto-input.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AutoTextareaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoTextareaComponent = (function () {
    function AutoTextareaComponent(_fb, services) {
        this._fb = _fb;
        this.services = services;
        this._min = 0;
        this._max = 50;
        this._restrict = [];
        this._label = "null";
        this._placeholder = "";
        this._display = [];
        this.events = services.events;
    }
    AutoTextareaComponent.prototype.createForm = function () {
        this._form = this._fb.group({ data: [""] });
        var validators = [];
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required);
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(this._min));
        if (this._required)
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(this._max));
        this._form.controls["data"].setValidators(validators);
        if (!this._enabled)
            this._form.controls["data"].disable();
    };
    AutoTextareaComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoTextareaComponent.prototype.onChange = function (event) {
        var data = { id: this._ID, valid: this._form.controls['data'].valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoTextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-textarea',template:/*ion-inline-start:"D:\git\online\src\components\auto-textarea\auto-textarea.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<form [formGroup]="_form">\n<ion-grid [hidden]="_hidden" [ngClass]="(_enabled)?((_form.controls[\'data\'].valid)?\'formBoxValid\':\'formBoxInalid\'):\'formBoxDisabled\'">\n  <ion-row>\n    <ion-col *ngIf="_label != undefined" class="formTextLabel">\n      <ion-label>{{_label}}\n      </ion-label>\n    </ion-col>\n    <ion-col>\n      <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-textarea formControlName="data" placeholder="{{_placeholder}}" min="{{_min}}"  maxlength="{{_max}}" [ngModel]="_value" [ngClass]="(_enabled)?((_form.controls[\'data\'].valid)?\'formTextValid\':\'formTextInalid\'):\'formTextDisabled\'" (keyup)="onChange($event)"></ion-textarea>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_form.controls[\'data\'].valid && _txt_required != undefined)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n</form>\n'/*ion-inline-end:"D:\git\online\src\components\auto-textarea\auto-textarea.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoTextareaComponent);
    return AutoTextareaComponent;
}());

//# sourceMappingURL=auto-textarea.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutoDateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoDateComponent = (function () {
    function AutoDateComponent() {
        this._min = 0;
        this._max = 50;
        this._restrict = [];
        this._label = "null";
        this._placeholder = "";
        this._display = [];
    }
    AutoDateComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoDateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-date',template:/*ion-inline-start:"D:\git\online\src\components\auto-date\auto-date.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<div [hidden]="_hidden">\n  <ion-item>\n      <ion-label color="primary" *ngIf="_label != \'null\'" stacked>{{_label}}</ion-label>\n      <<ion-datetime [(displayFormat)]="_mask" [ngModel]="value" [disabled]="!_enabled"></ion-datetime>\n    </ion-item>\n</div>\n'/*ion-inline-end:"D:\git\online\src\components\auto-date\auto-date.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AutoDateComponent);
    return AutoDateComponent;
}());

//# sourceMappingURL=auto-date.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCheckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutoCheckComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoCheckComponent = (function () {
    function AutoCheckComponent() {
    }
    AutoCheckComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoCheckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-check',template:/*ion-inline-start:"D:\git\online\src\components\auto-check\auto-check.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<ion-grid [hidden]="_hidden" class="formBoxValid">\n  <ion-row>\n    <ion-col class="formTextLabel"  width-100>\n      <ion-item>\n        <ion-label *ngIf="_label != undefined">{{_label}}</ion-label>\n        <ion-checkbox [(ngModel)]="_value" [disabled]="!_enabled"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n'/*ion-inline-end:"D:\git\online\src\components\auto-check\auto-check.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AutoCheckComponent);
    return AutoCheckComponent;
}());

//# sourceMappingURL=auto-check.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoChecklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoChecklistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoChecklistComponent = (function () {
    function AutoChecklistComponent(services) {
        this.services = services;
        this._options = [];
        this.events = services.events;
    }
    AutoChecklistComponent.prototype.createForm = function () {
        var tmp = 0;
        for (var i = 0; i < this._options.length; i++)
            if (this._options[i].check)
                tmp++;
        if (tmp >= this._min && tmp <= this._max)
            this._valid = true;
        else
            this._valid = false;
    };
    AutoChecklistComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._options
        };
    };
    AutoChecklistComponent.prototype.onChange = function (i) {
        if (this._options[i].check)
            this._options[i].check = false;
        else
            this._options[i].check = true;
        var tmp = 0;
        for (var i_1 = 0; i_1 < this._options.length; i_1++)
            if (this._options[i_1].check)
                tmp++;
        if (tmp >= this._min && tmp <= this._max)
            this._valid = true;
        else
            this._valid = false;
        var data = { id: this._ID, valid: this._valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoChecklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-checklist',template:/*ion-inline-start:"D:\git\online\src\components\auto-checklist\auto-checklist.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<ion-grid [hidden]="_hidden" [ngClass]="[(_valid)?\'formBoxValid\':\'formBoxInalid\']">\n  <ion-row>\n    <ion-col>\n    <ion-label>\n      {{_label}}\n    </ion-label>\n  </ion-col>\n  <ion-col>\n    <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="formTextLabel"  width-100>\n\n      <ion-item *ngFor="let option of _options;let i = index;">\n        <ion-label>{{option.label}}</ion-label>\n        <ion-checkbox [(checked)]="option.check" [disabled]="!_enabled" (click)="onChange(i)"></ion-checkbox>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_valid && _txt_required != undefined)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n'/*ion-inline-end:"D:\git\online\src\components\auto-checklist\auto-checklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoChecklistComponent);
    return AutoChecklistComponent;
}());

//# sourceMappingURL=auto-checklist.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoRadioComponent = (function () {
    function AutoRadioComponent(services) {
        this.services = services;
        this._options = [];
        this.events = services.events;
    }
    AutoRadioComponent.prototype.createForm = function () {
        this._valid = false;
        for (var i = 0; i < this._options.length; i++)
            if (this._options[i].check)
                this._valid = true;
    };
    AutoRadioComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._options
        };
    };
    AutoRadioComponent.prototype.onChange = function (i) {
        for (var j = 0; j < this._options.length; j++)
            this._options[j].check = false;
        this._options[i].check = true;
        this._valid = false;
        for (var i_1 = 0; i_1 < this._options.length; i_1++)
            if (this._options[i_1].check)
                this._valid = true;
        var data = { id: this._ID, valid: this._valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoRadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-radio',template:/*ion-inline-start:"D:\git\online\src\components\auto-radio\auto-radio.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<ion-grid [hidden]="_hidden" [ngClass]="[(_valid)?\'formBoxValid\':\'formBoxInalid\']">\n  <ion-row>\n    <ion-col>\n    <ion-label>\n      {{_label}}\n    </ion-label>\n  </ion-col>\n  <ion-col>\n    <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="formTextLabel"  width-100>\n\n      <ion-item *ngFor="let option of _options;let i = index;">\n        <ion-label>{{option.label}}</ion-label>\n        <ion-radio [(value)]="option.value" [(checked)]="option.check" [disabled]="!_enabled" (click)="onChange(i)"></ion-radio>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_valid && _txt_required != undefined)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n'/*ion-inline-end:"D:\git\online\src\components\auto-radio\auto-radio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoRadioComponent);
    return AutoRadioComponent;
}());

//# sourceMappingURL=auto-radio.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoSelectComponent = (function () {
    function AutoSelectComponent(services) {
        this.services = services;
        this._options = [];
        this.events = services.events;
    }
    AutoSelectComponent.prototype.createForm = function () {
    };
    AutoSelectComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoSelectComponent.prototype.onChange = function (event) {
        if (this._value)
            this._valid = true;
        else
            this._valid = false;
        var data = { id: this._ID, valid: this._valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-select',template:/*ion-inline-start:"D:\git\online\src\components\auto-select\auto-select.html"*/'<!-- Generated template for the AutoInputComponent component -->\n<ion-grid [hidden]="_hidden" [ngClass]="[(_value)?\'formBoxValid\':\'formBoxInalid\']">\n  <ion-row>\n    <ion-col *ngIf="_label != undefined" class="formTextLabel">\n      <ion-label>{{_label}}\n      </ion-label>\n    </ion-col>\n    <ion-col>\n      <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-select [(ngModel)]="_value" (ionChange)="onChange($event)">\n        <ion-option *ngFor="let option of _options" [value]="option.value" [disabled]="!_enabled">{{option.label}}</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_value)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n'/*ion-inline-end:"D:\git\online\src\components\auto-select\auto-select.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoSelectComponent);
    return AutoSelectComponent;
}());

//# sourceMappingURL=auto-select.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDuoselectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoDuoselectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoDuoselectComponent = (function () {
    function AutoDuoselectComponent(services) {
        this.services = services;
        this._options = [];
        this._values = [];
        this.events = services.events;
    }
    AutoDuoselectComponent.prototype.createForm = function () {
    };
    AutoDuoselectComponent.prototype.getValue = function () {
        return {
            id: this._ID,
            value: this._value
        };
    };
    AutoDuoselectComponent.prototype.onSelect = function (event) {
        this._value = "";
        for (var i = 0; i < this._options.length; i++) {
            if (this._options[i].value == this._actual) {
                this._values = [];
                for (var j = 0; j < this._options[i].values.length; j++) {
                    var obj = { label: this._options[i].values[j].label, value: this._options[i].values[j].value };
                    this._values.push(obj);
                }
            }
        }
    };
    AutoDuoselectComponent.prototype.onChange = function (event) {
        if (!this._actual2)
            this._value = "";
        else
            this._value = this._actual + "," + this._actual2;
        if (this._value)
            this._valid = true;
        else
            this._valid = false;
        var data = { id: this._ID, valid: this._valid };
        this.events.publish("onForm", JSON.stringify(data));
    };
    AutoDuoselectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-duoselect',template:/*ion-inline-start:"D:\git\online\src\components\auto-duoselect\auto-duoselect.html"*/'<!-- Generated template for the AutoDuoselectComponent component -->\n<ion-grid [hidden]="_hidden" [ngClass]="[(_value)?\'formBoxValid\':\'formBoxInalid\']">\n  <ion-row>\n    <ion-col *ngIf="_label != undefined" class="formTextLabel">\n      <ion-label>{{_label}}\n      </ion-label>\n    </ion-col>\n    <ion-col>\n      <button ion-fab [(tooltip)]="_txt_help" positionV="bottom" arrow class="formHelpButton" float-right>?</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-select [(ngModel)]="_actual" (ionChange)="onSelect($event)">\n        <ion-option *ngFor="let option of _options" [value]="option.value" [disabled]="!_enabled">{{option.label}}</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-select [(ngModel)]="_actual2" (ionChange)="onChange($event)">\n        <ion-option *ngFor="let value of _values" [value]="value.value" [disabled]="!_enabled">{{value.label}}</ion-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-label color="danger" *ngIf="(!_value)" stacked  class="formErrorText">* {{_txt_required}}</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n'/*ion-inline-end:"D:\git\online\src\components\auto-duoselect\auto-duoselect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */]])
    ], AutoDuoselectComponent);
    return AutoDuoselectComponent;
}());

//# sourceMappingURL=auto-duoselect.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoGridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoGridComponent = (function () {
    function AutoGridComponent(componentFactoryResolver, services) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.services = services;
        this.components = [];
        this._titles = [];
        this._rows = [];
    }
    AutoGridComponent.prototype.startProcess = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]) === "function" && _a || Object)
    ], AutoGridComponent.prototype, "container", void 0);
    AutoGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-grid',template:/*ion-inline-start:"D:\git\online\src\components\auto-grid\auto-grid.html"*/'<!-- Generated template for the AutoGridComponent component -->\n\n  <ion-grid class="gridClass">\n    <ion-row class="gridHeaderRow">\n      <ion-col class="gridHeaderCol" *ngFor="let title of _titles;" text-center>{{title.label}}</ion-col>\n    </ion-row>\n    <ion-row class="gridRow" *ngFor="let row of _rows;let odd = odd;" [ngClass]="(odd)?\'gridRowOdd\':gridRowEven">\n      <ion-col *ngFor="let col of row.cols;" class="gridCol" text-center>\n        <label>{{col.label}}</label>\n        <button *ngIf="col.type==\'button\'" ion-button>{{_label_cancel}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="gridRow">\n      <ion-col text-center>\n        <button ion-button><</button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button>></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n'/*ion-inline-end:"D:\git\online\src\components\auto-grid\auto-grid.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_services_services__["a" /* ServicesProvider */]) === "function" && _c || Object])
    ], AutoGridComponent);
    return AutoGridComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=auto-grid.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BridgeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BridgeProvider = (function () {
    function BridgeProvider(http) {
        this.http = http;
        this.SOCKET_PORT = 9700;
        this.SOCKET_URL = "10.10.2.50";
        this.connectSocket();
    }
    BridgeProvider.prototype.connectSocket = function () {
        /*
        this.socket = io('http://10.10.2.50:9700');
    
        this.socket.on('connect', function(){ console.log("conectado")});
        this.socket.on('event', function(data){console.log("event")});
        this.socket.on('disconnect', function(){console.log("DESCONECTADO")});
    
        this.socket.emit('message', "MyMessage");*/
    };
    BridgeProvider.prototype.disconnectSocket = function () {
    };
    BridgeProvider.prototype.onSocketCreate = function () {
    };
    BridgeProvider.prototype.onSocketConnect = function () {
    };
    BridgeProvider.prototype.onSocketSend = function () {
    };
    BridgeProvider.prototype.onSocketError = function () {
    };
    BridgeProvider.prototype.onSocketDisconnect = function () {
    };
    BridgeProvider.prototype.onSocketClose = function () {
    };
    BridgeProvider.prototype.sendMessage = function (data) {
    };
    BridgeProvider.prototype.parseMessages = function (data) {
        console.log("socket" + data);
    };
    BridgeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BridgeProvider);
    return BridgeProvider;
}());

//# sourceMappingURL=bridge.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesProvider = (function () {
    function ServicesProvider(http, events) {
        this.http = http;
        this.events = events;
        this.hardcoded = false;
        this._SERVICE_BASE = "http://10.10.2.63:8080/api/";
    }
    ServicesProvider.prototype.doPost = function (service, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var url = this._SERVICE_BASE + service;
        return this.http.post(url, data, { headers: headers });
    };
    ServicesProvider.prototype.doGet = function (service, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var url = this._SERVICE_BASE + service + data;
        return this.http.get(url, { headers: headers });
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]) === "function" && _b || Object])
    ], ServicesProvider);
    return ServicesProvider;
    var _a, _b;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bridge_bridge__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnlinePage = (function () {
    function OnlinePage(navCtrl, navParams, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
    }
    OnlinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnlinePage');
    };
    OnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-online',template:/*ion-inline-start:"D:\git\online\src\pages\online\online.html"*/'<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\online\online.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_bridge_bridge__["a" /* BridgeProvider */]])
    ], OnlinePage);
    return OnlinePage;
}());

//# sourceMappingURL=online.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auto_menu_auto_menu__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_auto_input_auto_input__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_auto_textarea_auto_textarea__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_auto_date_auto_date__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_auto_select_auto_select__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_auto_duoselect_auto_duoselect__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_auto_check_auto_check__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_auto_checklist_auto_checklist__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_auto_radio_auto_radio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_auto_form_auto_form__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_auto_grid_auto_grid__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_error_error__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mainmenu_mainmenu__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_online_online__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dynamic_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_container_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_bridge_bridge__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_tooltips__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__progress_kendo_angular_buttons__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_online_online__["a" /* OnlinePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dynamic_dynamic__["a" /* DynamicPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_container_container__["a" /* ContainerPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_auto_menu_auto_menu__["a" /* AutoMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_auto_input_auto_input__["a" /* AutoInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_auto_textarea_auto_textarea__["a" /* AutoTextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_auto_date_auto_date__["a" /* AutoDateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_auto_select_auto_select__["a" /* AutoSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_auto_duoselect_auto_duoselect__["a" /* AutoDuoselectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_auto_check_auto_check__["a" /* AutoCheckComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_auto_checklist_auto_checklist__["a" /* AutoChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_auto_radio_auto_radio__["a" /* AutoRadioComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auto_form_auto_form__["a" /* AutoFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_auto_grid_auto_grid__["a" /* AutoGridComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/container/container.module#ContainerPageModule', name: 'ContainerPage', segment: 'container', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dynamic/dynamic.module#DynamicPageModule', name: 'DynamicPage', segment: 'dynamic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/error/error.module#ErrorPageModule', name: 'ErrorPage', segment: 'error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainmenu/mainmenu.module#MainmenuPageModule', name: 'MainmenuPage', segment: 'mainmenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/online/online.module#OnlinePageModule', name: 'OnlinePage', segment: 'online', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_28__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material__["c" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material__["a" /* MatCardModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_online_online__["a" /* OnlinePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dynamic_dynamic__["a" /* DynamicPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_container_container__["a" /* ContainerPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_auto_menu_auto_menu__["a" /* AutoMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_auto_input_auto_input__["a" /* AutoInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_auto_textarea_auto_textarea__["a" /* AutoTextareaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_auto_date_auto_date__["a" /* AutoDateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_auto_select_auto_select__["a" /* AutoSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_auto_duoselect_auto_duoselect__["a" /* AutoDuoselectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_auto_check_auto_check__["a" /* AutoCheckComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_auto_checklist_auto_checklist__["a" /* AutoChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_auto_radio_auto_radio__["a" /* AutoRadioComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auto_form_auto_form__["a" /* AutoFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_auto_grid_auto_grid__["a" /* AutoGridComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_bridge_bridge__["a" /* BridgeProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_services_services__["a" /* ServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dynamic_dynamic__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_dynamic_dynamic__["a" /* DynamicPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\git\online\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\git\online\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutoMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AutoMenuComponent = (function () {
    function AutoMenuComponent() {
        console.log('Hello AutoMenuComponent Component');
        this.text = 'Hello World';
    }
    AutoMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auto-menu',template:/*ion-inline-start:"D:\git\online\src\components\auto-menu\auto-menu.html"*/'<!-- Generated template for the AutoMenuComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"D:\git\online\src\components\auto-menu\auto-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AutoMenuComponent);
    return AutoMenuComponent;
}());

//# sourceMappingURL=auto-menu.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainmenu_mainmenu__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, fb, services) {
        this.navCtrl = navCtrl;
        this.services = services;
        this.SPINNER = false;
        this.loginForm = fb.group({
            'user': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3)])]
        });
    }
    HomePage.prototype.onClick = function () {
        var _this = this;
        this.SPINNER = true;
        var data = {
            Usuario: this.loginForm.get('user').value,
            Password: this.loginForm.get('password').value,
            IP: "10.10.2.1",
            LogOut: 0
        };
        this.services.doPost("login", data).subscribe(function (res) { _this.onLoginResult(res); });
    };
    HomePage.prototype.onLoginResult = function (result) {
        this.SPINNER = false;
        if (result.success == true)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mainmenu_mainmenu__["a" /* MainmenuPage */]);
        else {
            var data = { "MESSAGE": result.error };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__error_error__["a" /* ErrorPage */], data);
            //this.navCtrl.push(MainmenuPage);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\git\online\src\pages\home\home.html"*/'<!-- Spinner -->\n<div class="spinContainer" [hidden]="!SPINNER">\n  <div class="spinBG"></div>\n  <div class="spin">\n    <ion-spinner name="bubbles" text-center></ion-spinner>\n  </div>\n</div>\n  <!-- Spinner -->\n<ion-content class="loginBox" padding>\n\n  <form [formGroup]="loginForm">\n   <ion-grid>\n\n     <ion-row>\n       <ion-col>\n       <ion-input placeholder="Usuario" type="text" id="user" formControlName="user"></ion-input>\n     </ion-col>\n     </ion-row>\n\n     <ion-row>\n       <ion-col>\n       <ion-input placeholder="Password" type="password" id="password" formControlName="password"></ion-input>\n     </ion-col>\n     </ion-row>\n\n     <ion-row>\n       <ion-col>\n       <button ion-button block (click)="onClick()" [disabled]="!loginForm.controls[\'user\'].valid || !loginForm.controls[\'password\'].valid">INGRESAR</button>\n     </ion-col>\n     </ion-row>\n\n     <ion-row>\n       <ion-col>\n       <button kendoButton (click)="onClick()" [primary]="true">My Kendo UI Button</button>\n\n     </ion-col>\n     </ion-row>\n\n   </ion-grid>\n   </form>\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_container_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErrorPage = (function () {
    function ErrorPage(navCtrl, navParams, services) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.events = services.events;
        this.events.subscribe('onChangeError', function (content) { _this.onChange(content); });
        this.MESSAGE = navParams.get("MESSAGE");
    }
    ErrorPage.prototype.onChange = function (content) {
        var data = { refresh: true, content: content };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_container_container__["a" /* ContainerPage */], data);
    };
    ErrorPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('onChangeError');
    };
    ErrorPage.prototype.ionViewDidLoad = function () {
    };
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-error',template:/*ion-inline-start:"D:\git\online\src\pages\error\error.html"*/'<!--\n  Generated template for the ErrorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <br>\n    <ion-title>Error</ion-title>\n  <br>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n  {{MESSAGE}}\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\error\error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auto_form_auto_form__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auto_grid_auto_grid__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_error_error__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ContainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContainerPage = (function () {
    function ContainerPage(navCtrl, navParams, componentFactoryResolver, services) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.componentFactoryResolver = componentFactoryResolver;
        this.services = services;
        this.components = [];
        this.menus = [];
        this.refresh = false;
        this.events = services.events;
        this.events.subscribe('onChange', function (content) { _this.onChange(content); });
        this.content = this.navParams.get('content');
        this.refresh = this.navParams.get('refresh');
    }
    ContainerPage.prototype.onChange = function (content) {
        this.service = content;
        this.container.clear();
        this.doStart();
    };
    ContainerPage.prototype.onServiceResult = function (data) {
        var res = data.json;
        if (res.sections.length) {
            for (var i = 0; res.sections.length > i; i++) {
                if (res.sections[i].type) {
                    switch (res.sections[i].type) {
                        case "form":
                            this.addFormComponent(res.sections[i]);
                            break;
                        case "grid":
                            this.addGridComponent(res.sections[i]);
                            break;
                    }
                }
                else {
                    var data_1 = { "MESSAGE": "Se esperaba en posicion" + i.toString() + " de 'sections' el objeto 'type'" };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_error_error__["a" /* ErrorPage */], data_1);
                }
            }
        }
        else {
            var data_2 = { "MESSAGE": "Se esperaba array 'sections'" };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_error_error__["a" /* ErrorPage */], data_2);
        }
    };
    ContainerPage.prototype.ngOnInit = function () {
    };
    ContainerPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('onChange');
    };
    ContainerPage.prototype.ionViewDidLoad = function () {
        if (this.refresh)
            this.service = this.content;
        if (this.service)
            this.doStart();
    };
    ContainerPage.prototype.doStart = function () {
        var _this = this;
        if (!this.services.hardcoded) {
            this.services.doGet(this.service, "").subscribe(function (data) { _this.onServiceResult(data); }, function (err) {
                var data = { "MESSAGE": "404 Server Address" };
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_error_error__["a" /* ErrorPage */], data);
            });
        }
        else {
            var form = {
                type: "form",
                controls: [
                    {
                        "id": "NAME",
                        "type": "TEXT",
                        "value": "",
                        "hidden": false,
                        "enabled": true,
                        "required": true,
                        "txt_required": "Debe ingresar su nombre.",
                        "txt_error": "",
                        "txt_help": "Ingrese su Nombre",
                        "max": 15,
                        "min": 5,
                        "mask": "nn-nnnnnnnn-n",
                        "format": "ALL",
                        "restrict": [],
                        "label": "Nombre",
                        "placeholder": "Ingrese su Nombre",
                        "display": []
                    },
                    {
                        "id": "DESC",
                        "type": "TEXTAREA",
                        "value": "",
                        "hidden": false,
                        "enabled": true,
                        "required": true,
                        "txt_required": "La descripcion es obligatoria",
                        "txt_error": "Por favor verifique el formato",
                        "txt_help": "Ingrese una descripcion",
                        "max": 500,
                        "min": 10,
                        "mask": "",
                        "format": "",
                        "restrict": ["A", "B", "C", "$", "1"],
                        "label": "Descripcion",
                        "placeholder": "Ingrese la descripcion",
                        "display": []
                    },
                    {
                        "id": "CUIT_2",
                        "type": "TEXT",
                        "value": "",
                        "hidden": false,
                        "enabled": true,
                        "required": true,
                        "txt_required": "Este campo es obligatorio",
                        "txt_error": "Por favor verifique el formato",
                        "txt_help": "Ingrese su cuit o cuil",
                        "max": 50,
                        "min": 10,
                        "mask": "nn-nnnnnnnn-n",
                        "format": "RESTRICT",
                        "restrict": ["A", "B", "C", "$", "1"],
                        "label": "CUIL/CUIT",
                        "placeholder": "Ingrese su CUIL/CUIT",
                        "display": []
                    },
                    {
                        "id": "EMAIL_ALERT",
                        "type": "CHECKBOX",
                        "value": true,
                        "hidden": false,
                        "enabled": true,
                        "required": false,
                        "txt_help": "Avisar por email una vez registrado.",
                        "label": "Avisar por E-mail",
                        "check": true
                    },
                    {
                        "id": "PROVINCIA",
                        "type": "CHECKBOXLIST",
                        "hidden": false,
                        "enabled": true,
                        "required": false,
                        "txt_required": "Este campo es obligatorio",
                        "txt_help": "Seleccione las provincias",
                        "label": "Seleccionar Provincias",
                        "min": 1,
                        "max": 2,
                        "values": [
                            {
                                "label": "Formosa",
                                "value": "formosa",
                                "check": false
                            },
                            {
                                "label": "Buenos Aires",
                                "value": "bsas",
                                "check": false
                            },
                            {
                                "label": "Santa Fe",
                                "value": "santafe",
                                "check": false
                            }
                        ]
                    },
                    {
                        "id": "PROVINCIA_2",
                        "type": "RADIO",
                        "hidden": false,
                        "enabled": true,
                        "required": false,
                        "txt_required": "Este campo es obligatorio",
                        "txt_help": "Seleccione UNA de las provincias",
                        "label": "Seleccionar Provincia Actual",
                        "values": [
                            {
                                "label": "Formosa",
                                "value": "formosa",
                                "check": false
                            },
                            {
                                "label": "Buenos Aires",
                                "value": "bsas",
                                "check": false
                            },
                            {
                                "label": "Santa Fe",
                                "value": "santafe",
                                "check": false
                            }
                        ]
                    },
                    {
                        "id": "PROVINCIA_3",
                        "type": "SELECT",
                        "hidden": false,
                        "enabled": true,
                        "required": false,
                        "txt_required": "Este campo es obligatorio",
                        "txt_help": "Seleccione UNA de las provincias",
                        "label": "Seleccionar Provincia",
                        "values": [
                            {
                                "label": "Formosa",
                                "value": "formosa",
                                "check": false
                            },
                            {
                                "label": "Buenos Aires",
                                "value": "bsas",
                                "check": false
                            },
                            {
                                "label": "Santa Fe",
                                "value": "santafe",
                                "check": false
                            }
                        ]
                    },
                    {
                        "id": "PAIS_PROVINCIA",
                        "type": "DUOSELECT",
                        "hidden": false,
                        "enabled": true,
                        "required": false,
                        "txt_required": "Este campo es obligatorio",
                        "txt_help": "Seleccione un pais, y luego una de las provincias",
                        "label": "Seleccionar Pais",
                        "values": [
                            {
                                "label": "Argentina",
                                "value": "argentina",
                                "values": [{ label: "formosa", value: "formosa", "check": false }, { label: "Chaco", value: "chaco", "check": false }],
                                "check": false
                            },
                            {
                                "label": "Chile",
                                "value": "chile",
                                "values": [{ label: "Santiago de Chile", value: "santiago", "check": false }, { label: "Valparaiso", value: "valparaiso", "check": false }],
                                "check": false
                            },
                            {
                                "label": "Japon",
                                "value": "japon",
                                "values": [{ label: "Tokio", value: "tokio", "check": false }, { label: "Seoul", value: "seoul", "check": false }],
                                "check": false
                            }
                        ]
                    }
                ],
                display: {
                    title: "Formulario de agregar",
                    action: "postNewData",
                    label_submit: "Agregar",
                    label_cancel: "Cerrar"
                }
            };
            var grid = {
                type: "grid",
                titles: [
                    {
                        label: "ROW 1 TITLE"
                    },
                    {
                        label: "ROW 2 TITLE"
                    },
                    {
                        label: "ROW 3 TITLE"
                    }
                ],
                rows: [
                    {
                        cols: [
                            {
                                type: "text",
                                label: "ROW 1 COL 1"
                            },
                            {
                                type: "text",
                                label: "ROW 1 COL 2"
                            },
                            {
                                type: "text",
                                label: "ROW 1 COL 3"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                type: "text",
                                label: "ROW 2 COL 1"
                            },
                            {
                                type: "text",
                                label: "ROW 2 COL 2"
                            },
                            {
                                type: "text",
                                label: "ROW 2 COL 3"
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                type: "text",
                                label: "ROW 3 COL 1"
                            },
                            {
                                type: "text",
                                label: "ROW 3 COL 2"
                            },
                            {
                                type: "text",
                                label: "ROW 3 COL 3"
                            }
                        ]
                    }
                ]
            };
            var sections = [];
            sections.push(form);
            sections.push(grid);
            var res = { json: { sections: sections } };
            this.onServiceResult(res);
        }
    };
    ///Add Form View
    ContainerPage.prototype.addFormComponent = function (data) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__components_auto_form_auto_form__["a" /* AutoFormComponent */]);
        var component = this.container.createComponent(componentFactory);
        component.instance._action = data.display.action;
        component.instance._label_title = data.display.title;
        component.instance._label_submit = data.display.label_submit;
        component.instance._label_cancel = data.display.label_cancel;
        component.instance.values = data.controls;
        component.instance.startProcess();
        this.components.push(component);
    };
    ContainerPage.prototype.addGridComponent = function (data) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__components_auto_grid_auto_grid__["a" /* AutoGridComponent */]);
        var component = this.container.createComponent(componentFactory);
        /*
        (<AutoGridComponent>component.instance)._action       = data.display.action;
    
        (<AutoGridComponent>component.instance)._label_title  = data.display.title;
        (<AutoGridComponent>component.instance)._label_submit = data.display.label_submit;
        (<AutoGridComponent>component.instance)._label_cancel = data.display.label_cancel;
        */
        for (var i = 0; i < data.titles.length; i++) {
            var option = {
                label: data.titles[i].label
            };
            component.instance._titles.push(option);
        }
        for (var i = 0; i < data.rows.length; i++) {
            var row = { cols: [] };
            for (var j = 0; j < data.rows[i].cols.length; j++) {
                var col = {
                    type: data.rows[i].cols[j].type,
                    label: data.rows[i].cols[j].label
                };
                row.cols.push(col);
            }
            component.instance._rows.push(row);
        }
        component.instance.startProcess();
        this.components.push(component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]) === "function" && _a || Object)
    ], ContainerPage.prototype, "container", void 0);
    ContainerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-container',template:/*ion-inline-start:"D:\git\online\src\pages\container\container.html"*/'<ion-content scrollX="true">\n  <ng-template #container>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"D:\git\online\src\pages\container\container.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */]) === "function" && _e || Object])
    ], ContainerPage);
    return ContainerPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=container.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.js.map