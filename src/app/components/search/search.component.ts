import { SearchItem } from '../../domains/search-item';
import { SearchService } from '../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, switchMap, map, tap, distinctUntilChanged} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private loading = false;
  private results: SearchItem[];
  searchField: FormControl;

  canDeactivate() {
    return this.itunes.results.length > 0;
  }

  constructor(private itunes: SearchService,
              private route: ActivatedRoute,
              private router: Router) {
      this.route.params.subscribe(params => {
          if (params['term']) {
              this.doSearch(params['term'])
          }
      });
  }

  ngOnInit() {
    /*
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
     .pipe(debounceTime(400),
        distinctUntilChanged(),
        tap( () => this.loading = true),
        switchMap( term => this.itunes.search(term)),
        tap( () => this.loading = false));
      */
  }

  doSearch(term: string) {
    /*
    this.loading = true;
//    this.itunes.search(term);
    this.itunes.search(term).subscribe( data => {
      this.loading = false;
      this.results = data;
    });
    */
      this.loading = true;
      this.itunes.search(term).then(_ => this.loading = false);

  }

    onSearch(term: string) {
        this.router.navigate(['search', {term: term}]);
    }
}
