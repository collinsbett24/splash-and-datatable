import { Injectable } from '@angular/core';
import { timeInterval } from 'rxjs';
import { Bitcoin } from 'src/app/models/bitcoin';

@Injectable({
  providedIn: 'root'
})
export class BitcoinServiceService {

  Data: Array<string> = [];

  webSocket!: WebSocket;
  constructor() { }

  public openWebSocket() {

    // this.webSocket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

    // this.webSocket = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
    // this.webSocket = new WebSocket('wss://ws.coincap.io/trades/binance');

    this.webSocket = new WebSocket('wss://ws.coincap.io/trades/binance');


    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    }

    this.webSocket.onmessage = (event) => {
      let chatMessageDto = JSON.stringify(event.data);
      // this.Data.length = 0;
      setInterval(() => {
        this.Data = [chatMessageDto, ...this.Data];
      }, 5000);

      // this.Data.push(chatMessageDto);
      //  = [...chatMessageDto];
      // console.log(this.Data);
    }

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    }
  }

  public sendMessage(data: any) {
    this.webSocket.send(JSON.stringify(data));
  }

  /**
   * closeSocket
   
  */
  public closeSocket() {
    this.webSocket.close();
  }
}
