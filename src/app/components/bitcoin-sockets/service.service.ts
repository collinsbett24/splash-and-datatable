import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getCurencyList() {
    return this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false");
  }

  getTrendingCurrency() {
    return this.http.get<any>("https://api.coingecko.com/api/v3/search/trending");
  }

  getGraphicalChart(id: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=10`);
  }

  getCurrencyById(id: string) {
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/' + id);
  }

}
