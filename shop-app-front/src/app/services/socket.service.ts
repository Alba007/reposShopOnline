import {Injectable} from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {AuthServiceService} from './auth-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UpdateNotifyService} from "./update-notify.service";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private serverUrl = 'http://localhost:8080/socket';
  public stompClient;


  constructor(private updateService: UpdateNotifyService) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    //   const username = 'test';
    //   const password = 'test';
    //   const headers1 = new HttpHeaders();
    //   headers1.append('Authorization:', 'Bearer ' + this.auth.getToken());
    //   return this.http.get('http://localhost:8080/socket', {headers: headers1}).subscribe(res => console.log('sdfvsz'));
    // const ws = this.httpClientModule.get(`${this.serverUrl} ` + `?access_token= ` + this.auth.getToken())
    //  const headers = {};
    //  headers['X-CSRF-TOKEN'] = this.auth.getToken()
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe('/send/category', (message) => {
        const mess = JSON.parse(message.body);
        this.updateService.notyfyForCategory.next(mess);
      });
      this.stompClient.subscribe('/send/product', (message) => {
        const mess = JSON.parse(message.body);
        this.updateService.notifyForProduct.next(mess);
      });
    });
  }
}
