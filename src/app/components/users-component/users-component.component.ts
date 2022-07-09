import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models/user';
import { SportsServiceService } from 'src/app/services/api/sports-service.service';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit, AfterViewInit {
  Data: User[] = [];

  Likes: number = 0;

  totalRows = 100;
  pageSize = 6;
  currentPage = 0;
  pageSizeOptions: number[] = [6, 18, 30, 48];

  Gender = ['All', 'Male', 'Female'];
  Nationality: Array<any> = [
    { 'value': 'AU', 'nationality': 'Australia' },
    { 'value': 'BR', 'nationality': 'Brazil' },
    { 'value': 'CA', 'nationality': 'Canada' },
    { 'value': 'CH', 'nationality': 'SwitzerLand' },
    { 'value': 'BR', 'nationality': 'Britain' },
    { 'value': 'DE', 'nationality': 'Germany' },
    { 'value': 'DK', 'nationality': 'Denmark' },
    { 'value': 'FI', 'nationality': 'Finland' },
    { 'value': 'FR', 'nationality': 'France' },
    { 'value': 'IN', 'nationality': 'India' },
    { 'value': 'IR', 'nationality': 'Iran' },
    { 'value': 'ES', 'nationality': 'Spain' },
    { 'value': 'MX', 'nationality': 'Mexico' },
    { 'value': 'NL', 'nationality': 'NetherLands' },
    { 'value': 'NO', 'nationality': 'Norway' },
    { 'value': 'GB', 'nationality': 'United Kingdom' },
    { 'value': 'IE', 'nationality': 'Ireland' },
    { 'value': 'NZ', 'nationality': 'New ZeaLand' },
    { 'value': 'RS', 'nationality': 'Serbia' },
    { 'value': 'TR', 'nationality': 'Turkey' },
    { 'value': 'UA', 'nationality': 'Ukraine' },
    { 'value': 'US', 'nationality': 'United States' }
  ];

  constructor(private sport_api: SportsServiceService, private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.getNewsApi(this.currentPage, this.pageSize);
    // this.sport_api.newsApi.subscribe(res => console.log(res.status, res.response));

    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 500);
  }

  getNewsApi(page: number, page_size: number) {
    this.sport_api.UsersApi(page, page_size).subscribe(
      (res: any) => {
        this.currentPage = res[1].page;
        this.pageSize = res[1].results;
        this.Data = res[0];
      }
    );
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getNewsApi(this.currentPage, this.pageSize);
  }

  filterData(gen: string, nation: any) {
    let page = this.currentPage;
    let page_size = this.pageSize;
    this.sport_api.filterUsersApi(page, page_size, gen, nation).subscribe(
      (res: any) => {
        console.log(res);
        this.Data.length = 0;
        this.currentPage = res.info.page;
        this.pageSize = res.info.results;
        this.Data = res.results;
      }
    );
  }

}
