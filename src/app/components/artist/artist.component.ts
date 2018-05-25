import { ITunesResult } from '../../domains/itunes-result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

    private artist: any;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.route.paramMap.subscribe(params => {
        
        this.http.jsonp<ITunesResult>(
          `https://itunes.apple.com/lookup?id=${params.get('artistId')}&callback=JSONP_CALLBACK`, 'JSONP_CALLBACK')
          .subscribe(res => {
            this.artist = res.results[0];
          });
    
        });
    }

}