import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SearchItem} from '../../domains/search-item';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';

class Body {
  constructor(vtacId: string, password: string) {};
}

@Injectable()
export class PersonService {

  // mainUrl = 'http://localhost:8080/gemsasTestSite/getPerson';
  // mainUrl = 'http://apply-gemsas-dev-1355370118.ap-southeast-2.elb.amazonaws.com/gemsasTestSite/getPerson';
  mainUrl = 'http://localhost:8080/gemsas/applicant/get.json';
  headers = new Headers({'Content-Type': 'application/json'});

  body: Body;

  constructor(private http: HttpClient) {}

  getPerson() {
    //    this.http.post(this.mainUrl, {'email': 'stephen@novarse.com', 'password': 'secret'}).subscribe(data => console.log(data));

    this.body = new Body('11000006R', 'password');

    this.http.post(this.mainUrl, this.body, { headers: {'Content-Type': 'application/json'} }).subscribe(
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
