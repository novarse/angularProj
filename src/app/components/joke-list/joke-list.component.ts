import { Joke } from '../../domains/joke';
import { JokesService } from '../../services/jokes/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  constructor(private jokesService: JokesService) {  }
  
}
