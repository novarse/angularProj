import { ITunesResult } from '../../domains/itunes-result';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artist-video-list',
  templateUrl: './artist-video-list.component.html',
  styleUrls: ['./artist-video-list.component.css']
})
export class ArtistVideoListComponent implements OnInit {

  private videos: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.route.parent.paramMap.subscribe(params => {
        const artistId = params.get('artistId');
      
        const url = `https://itunes.apple.com/lookup?id=${artistId}&entity=musicVideo&callback=JSONP_CALLBACK`;
        console.log('url = ' + url + '; ' + artistId);
        
        this.http.jsonp<ITunesResult>(
          url,
                    `JSONP_CALLBACK`)
          .subscribe(res => {
            this.videos = res.results.slice(1);
          },
                  (err: HttpErrorResponse) => {
                      console.log(err.error);
                      console.log(err.name);
                      console.log(err.message);
                      console.log(err.status)
    
        });
     });
  
  }
  
  ngOnInit() {
  }

}
