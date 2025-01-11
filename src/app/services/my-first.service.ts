import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Tiziano',
      email: 'a',
      message: 'Hello World'
    });
    this.insert({
      name: 'Pippo',
      email: 'b',
      message: 'World'
    });
    this.insert({
      name: 'Gino',
      email: 'c',
      message: 'Hello'
    });
  }

  insert(message: {name: string, email: string, message: string}) {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }
}
