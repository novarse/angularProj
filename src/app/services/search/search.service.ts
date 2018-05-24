import { SearchItem } from '../../domains/search-item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

  interface MyObj {
    resultCount: number;
    results: SearchItem[];
  }

@Injectable()
export class SearchService {

  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

    search(term: string) {
        return new Promise((resolve, reject) => {

            this.results = [];
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;

            this.http.get<MyObj>(apiURL)
                .toPromise()
                .then(
                    res => { // Success


                        this.results = res.results.map(item => {
                            return new SearchItem(
                                item.trackName,
                                item.artistName,
                                item.trackViewUrl,
                                item.artworkUrl30,
                                item.artistId
                            );
                        });

                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });


        /*
        search(term: string): Observable<SearchItem[]> {
          const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
          return this.http.get<MyObj>(apiURL).pipe(map(res => {
            return res.results.map(item => {
              return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
            });
          }));
          */
//    this.http.get<myObj>(apiURL).subscribe(data => data.results.forEach(val => console.log(val.artistName)));

//      .subscribe((data) => {
//      console.log(data);
//    });

//    return this.http.get(apiURL)
//        .pipe(map(res => {
//          return res.json().results.map(item => {
//
//          });
//        }))

//    return null;

  }
//  search(term: string): Observable<SearchItem[]> {
//    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
//    return this.http.get(apiURL)
//        .pipe(map(res => {
//          return res.json().results.map(item => {
//            return new SearchItem(
//                item.trackName,
//                item.artistName,
//                item.trackViewUrl,
//                item.artworkUrl30,
//                item.artistId
//            );
//          });
//        }))
//
//  }
}
