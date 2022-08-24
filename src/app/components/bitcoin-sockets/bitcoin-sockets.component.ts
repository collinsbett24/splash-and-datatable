import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { timeout, timestamp } from 'rxjs';
import { BitcoinServiceService } from 'src/app/services/bitcoin/bitcoin-service.service';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-bitcoin-sockets',
  templateUrl: './bitcoin-sockets.component.html',
  styleUrls: ['./bitcoin-sockets.component.css']
})
export class BitcoinSocketsComponent implements OnInit, AfterViewInit {

  constructor(public bitcoinapi: BitcoinServiceService, private splashScreenStateService: SplashScreenStateService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 3000);
  }

  ngOnInit(): void {

  }


}
