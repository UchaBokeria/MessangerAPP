import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit{
  title = 'messanger';
  constructor(private websocket: WebsocketService) { }

  ngOnInit() {
    this.websocket.listen('test event').subscribe(data => {
      console.log(data);
    });
  }
  
}
