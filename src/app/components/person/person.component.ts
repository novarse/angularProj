import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person/person.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  doSearch(term: string) {
      this.personService.getPerson();
  }

}
