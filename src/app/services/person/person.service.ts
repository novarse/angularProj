import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SearchItem} from '../../domains/search-item';

@Injectable()
export class PersonService {

  mainUrl = 'http://localhost:8080/gemsasTestSite/getPerson';
  // mainUrl = 'http://apply-gemsas-dev-1355370118.ap-southeast-2.elb.amazonaws.com/gemsasTestSite/getPerson';
  body = `{'email': 'zzstephen@novarse.com', 'password': 'secret'}`;

  constructor(private http: HttpClient) { }

  getPerson() {
//    this.http.post(this.mainUrl, {'email': 'stephen@novarse.com', 'password': 'secret'}).subscribe(data => console.log(data));

      this.http.post(this.mainUrl, this.body).subscribe(
          res => {
              console.log(res);
          },
          (err: HttpErrorResponse) => {
              console.log(err.error);
              console.log(err.name);
              console.log(err.message);
              console.log(err.status);
          }
      );
  }

}
