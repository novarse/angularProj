import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SearchItem} from '../../domains/search-item';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Applicant} from '../../domains/applicant';
import {Observable} from 'rxjs/Observable';

class Body {
  constructor(vtacId: string, password: string) {}
}

@Injectable()
export class PersonService {

  mainUrl = 'http://localhost:8080/gemsasTestSite/getPerson';
  // mainUrl = 'http://apply-gemsas-dev-1355370118.ap-southeast-2.elb.amazonaws.com/gemsasTestSite/getPerson';
  // mainUrl = 'http://localhost:8080/gemsas/applicant/get.json';
  headers = new Headers({'Content-Type': 'application/json'});

  body: Body;

  constructor(private http: HttpClient) {}

  getDetails(em, pass) {
    return this.http.post<Applicant>(this.mainUrl, {'email': em, 'password': pass});
  }

}
