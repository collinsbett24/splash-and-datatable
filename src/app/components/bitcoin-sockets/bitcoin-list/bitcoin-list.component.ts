import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bitcoin } from 'src/app/models/bitcoin';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bitcoin-list',
  templateUrl: './bitcoin-list.component.html',
  styleUrls: ['./bitcoin-list.component.css']
})
export class BitcoinListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ELEMENT_DATA!: Bitcoin[]
  dataSource = new MatTableDataSource<Bitcoin>(this.ELEMENT_DATA);
  // displayedColumns:string []= this.columns.map(c => c.columnDef);

  displayedColumns: string[] = ['rank', 'image', 'symbol', 'name', 'market_cap', 'current_price', 'last_updated'];

  List: any;
  coinMarket: Bitcoin[] = [];

  constructor(private api: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.api.getTrendingCurrency().subscribe((response: any) => {
      this.List = response['coins'];
    });

  }

  ngAfterViewInit(): void {
    this.api.getCurencyList().subscribe((response: any) => { console.log(response); this.dataSource.data = response as Bitcoin[] });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickedRows(row: any) {
    console.log(row.id);
    this.router.navigate(['bitcoin-details', row.id]);
  }

}