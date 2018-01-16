import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BridgeProvider {

  private SOCKET_PORT:number = 9700;
  private SOCKET_URL:string = "10.10.2.50";
  public socket:any;

  constructor(public http: HttpClient) {
    this.connectSocket();
  }
  public connectSocket() {
    /*
    this.socket = io('http://10.10.2.50:9700');

    this.socket.on('connect', function(){ console.log("conectado")});
    this.socket.on('event', function(data){console.log("event")});
    this.socket.on('disconnect', function(){console.log("DESCONECTADO")});

    this.socket.emit('message', "MyMessage");*/
  }
  public disconnectSocket() {

  }

  private onSocketCreate() {

  }
  private onSocketConnect() {

  }
  private onSocketSend() {

  }
  private onSocketError() {

  }
  private onSocketDisconnect() {

  }
  private onSocketClose() {

  }
  public sendMessage(data) {

  }
  public parseMessages(data) {
    console.log("socket" + data)
  }
}
