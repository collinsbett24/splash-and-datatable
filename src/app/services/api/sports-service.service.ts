import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class SportsServiceService {

  public ServerUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.ServerUrl);
  }

  //getTiles from diamond Surfaces
  getTiles(): Observable<any> {
    return this.http.get<any>(`http://nitco.liftwave.co.ke/api/getTile/Kitchen Tiles`);
  }


  //get users from randommeUser Api
  UsersApi(page: number, page_size: number) {
    return ajax(`https://randomuser.me/api/?page=${page}&results=${page_size}&seed=abc`).pipe(
      map((res: any) => {
        if (res.response == null) {
          console.log('Error Occured');
          throw new Error('Value Expected');
        }
        let data = [];

        for (let results in res.response) {
          data.push(res.response[results])
        }
        return data;
      }),
      retry(1),
      catchError(() => of([])));
  }

  filterUsersApi(page: number, page_size: number, gender: string, nationality: string) {
    let nation = nationality.toLowerCase();
    let gen = gender.toLowerCase();
    return this.http.get<any>(`https://randomuser.me/api/?nat=${nation}&gender=${gen}&results=${page_size}`);
  }
}
