import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {

  private tracks: any[];

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
          console.log(params);
            this.http.jsonp(
                    `https://itunes.apple.com/lookup?id=${
                        params["artistId"]
                        }&entity=song`,
                    `JSONP_CALLBACK`
                ).subscribe(success => {
                  console.log(success);
                }, error => console.log(error)
                );
                // .toPromise()
                // .then(res => {
                //     console.log(res.json());
                //     this.tracks = res.json().results.slice(1);
                // });
        });
    }

  ngOnInit() {
  }

}
