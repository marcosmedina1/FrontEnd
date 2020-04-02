import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = [];
  constructor() { }

  add(message: string) {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.message.push(`${time} - ${message}`);
  }

  clear(){
    this.message = [];
  }
}
