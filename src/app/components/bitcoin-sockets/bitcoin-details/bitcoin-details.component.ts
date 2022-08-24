import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';
import { ServiceService } from '../service.service';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.css']
})
export class BitcoinDetailsComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;


  bitcoinInfo: any;

  constructor(private route: ActivatedRoute, private api: ServiceService, private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    this.getBitcoin();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 3000);
  }

  getBitcoin(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.api.getCurrencyById(id).subscribe((response: any) => {
      console.log(id, response);
      this.bitcoinInfo = response
    });
  }

}
