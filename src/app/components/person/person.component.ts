import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person/person.service';
import {Applicant} from '../../domains/applicant';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private applicant: Applicant;
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  doSearch() {
       this.personService.getDetails('stephen@novarse.com', 'secret')
         .subscribe(res => {
           this.applicant = res;
            console.log(this.applicant.email);
         });
  }

}
