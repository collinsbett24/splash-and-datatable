import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BitcoinServiceService } from 'src/app/services/bitcoin/bitcoin-service.service';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-bitcoin-sockets',
  templateUrl: './bitcoin-sockets.component.html',
  styleUrls: ['./bitcoin-sockets.component.css']
})
export class BitcoinSocketsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(public bitcoinapi: BitcoinServiceService, private splashScreenStateService: SplashScreenStateService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 500);
  }

  ngOnInit(): void {
    this.bitcoinapi.openWebSocket();
  }


  ngOnDestroy(): void {
    this.bitcoinapi.closeSocket();
  }

}
