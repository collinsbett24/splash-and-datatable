import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsServiceService {

  public ServerUrl = 'https://randomuser.me/api/?gender=female&nat=gb';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.ServerUrl);
  }


}
