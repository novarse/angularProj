import { Joke } from '../../domains/joke';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input('joke') data: Joke;

  @Output() jokeDeleted = new EventEmitter<Joke>();
  
  deleteJoke() {
    this.jokeDeleted.emit(this.data);
  }
}
