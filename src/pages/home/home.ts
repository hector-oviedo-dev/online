import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { ErrorPage } from '../error/error';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm : FormGroup;

  public SPINNER = false;

  constructor(public navCtrl: NavController,fb:FormBuilder,public services:ServicesProvider) {
    this.loginForm = fb.group({
     'user':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
     'password':[null, Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }
  public onClick() {
    this.SPINNER = true;
    let data = {
      Usuario:this.loginForm.get('user').value,
      Password:this.loginForm.get('password').value,
      IP:"10.10.2.1",
      LogOut:0
    };

    this.services.doPost("login",data).subscribe(res => { this.onLoginResult(res); });
  }
  public onLoginResult(result) {
    this.SPINNER = false;
    if (result.success == true) this.navCtrl.push(MainmenuPage);
    else {
      let data = { "MESSAGE":result.error }
      this.navCtrl.push(ErrorPage, data);
      //this.navCtrl.push(MainmenuPage);
     }
  }
}
