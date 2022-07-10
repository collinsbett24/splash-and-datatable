import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, pairwise, filter, throttleTime } from 'rxjs';
import { User } from 'src/app/models/user';
import { SportsServiceService } from 'src/app/services/api/sports-service.service';
import { LikesService } from 'src/app/services/likes/likes.service';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';
import { DisplayLikedComponent } from './dialog/display-liked/display-liked.component';
import { SnackbarComponent } from './dialog/snackbar/snackbar.component';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit, AfterViewInit {
  Data: User[] = [];

  totalRows = 100;
  pageSize = 6;
  currentPage = 0;
  pageSizeOptions: number[] = [6, 18, 30, 48];

  csvUrl = `https://randomuser.me/api/?page=${this.currentPage}&results=${this.pageSize}&format=csv`;
  xmlUrl = `https://randomuser.me/api/?page=${this.currentPage}&results=${this.pageSize}&format=xml`;
  @ViewChild(CdkVirtualScrollViewport) scroller!: CdkVirtualScrollViewport;

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

  Loading = false;

  Likes: number = 0;
  message!: string;

  constructor(private sport_api: SportsServiceService,
    private splashScreenStateService: SplashScreenStateService,
    public likedService: LikesService, public dialog: MatDialog,
    private _snackBar: MatSnackBar, private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(): void {
    this.getLikedLenght();
  }

  ngAfterViewInit(): void {

    this.getNewsApi(this.currentPage, this.pageSize);
    // this.sport_api.newsApi.subscribe(res => console.log(res.status, res.response));

    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 500);

    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset("bottom")),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1) && (y2 < 140)),
      throttleTime(1200)
    ).subscribe(() => {
      this.Loading = true;
      this.ngZone.run(() => {
        this.getNewsApi(this.currentPage, this.pageSize);
        // this.scroller.scrollToOffset(0);
      });
      this.Loading = false;
    });
  }

  getNewsApi(page: number, page_size: number) {
    this.sport_api.UsersApi(page + 1, page_size + 12).subscribe(
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

  addToLikes(person: User) {
    this.likedService.addToLikeList(person);
    this.getLikedLenght();
    this.openSnackBar();
  }

  getLikedLenght() {
    this.Likes = this.likedService.likeListLength();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(DisplayLikedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5 * 1000, horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }


}
