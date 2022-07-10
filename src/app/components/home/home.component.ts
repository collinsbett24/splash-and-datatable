import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SportsServiceService } from 'src/app/services/api/sports-service.service';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';
import { FilterComponent } from './dialogs/filter/filter.component';
import { SortComponent } from './dialogs/sort/sort.component';
import { Tiles } from 'src/app/models/tiles';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EditComponent } from './dialogs/edit/edit.component';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  ELEMENT_DATA!: Tiles[]
  displayedColumns: string[] = ["id", "tile_name", "material", "tile_size", "color", "color_variation", "finish",
    "looks_like", "quantity_per_box", "space", "picture", "actions"
  ];
  dataSource = new MatTableDataSource<Tiles>(this.ELEMENT_DATA);
  clickedRows = new Set<any>();

  hide = false;

  hiddenColumns: Array<string> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    public dialog: MatDialog, private splashScreenStateService: SplashScreenStateService,
    private api: SportsServiceService
  ) { }

  ngOnInit(): void {
    this.getAllTiles();
  }

  getAllTiles() {
    this.api.getTiles().subscribe((response: any) => this.dataSource.data = response.data as Tiles[]);

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 3000);
  }

  hideColumn(column_name: string, show: string) {
    // console.log(column_name);
    console.log(column_name)

    if (show === 'hide') {
      let index = this.displayedColumns.findIndex(d => d == column_name);
      console.log(index)
      this.displayedColumns.splice(index, 1);
      this.hiddenColumns.push(column_name);
    }
    else {
      let index = this.hiddenColumns.findIndex(d => d == column_name);
      console.log(index)
      this.hiddenColumns.splice(index, 1)
      this.displayedColumns.push(column_name);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  hideAllColumns() {
    this.displayedColumns.length = 0;
    this.hiddenColumns.push("id", "tile_name", "material", "tile_size", "color", "color_variation", "finish",
      "looks_like", "quantity_per_box", "space", "picture", "actions");
  }

  showAllColumns() {
    this.hiddenColumns.length = 0;
    this.displayedColumns.push("id", "tile_name", "material", "tile_size", "color", "color_variation", "finish",
      "looks_like", "quantity_per_box", "space", "picture", "actions");

  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
