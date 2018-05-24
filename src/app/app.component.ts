import { Joke } from './domains/joke';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: Joke = new Joke("Why did the chicken", "Because");
  joke2: Joke = new Joke("JOKE 2", "ANSWER 2");
}
