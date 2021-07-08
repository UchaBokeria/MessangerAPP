import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  readonly URI: string = 'ws://localhost:3000';

  constructor() {
    this.socket = io(this.URI);
  }
  
  listen(Event: string) {
    return new Observable((Subscriber)=> {
      this.socket.on(Event, (data: any) => {
        Subscriber.next(data);
      })
    });
  }

  emit(Event: string, data:any) {
    this.socket.emit(Event, data);
  }
}
