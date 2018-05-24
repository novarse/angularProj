import { Joke } from '../../domains/joke';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  
  myform: FormGroup;
  setup: FormControl;
  punchline: FormControl;
  
  @Output() jokeCreated = new EventEmitter<Joke>();

  ngOnInit(): void {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
    
    this.myform = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    });
  }

  createJoke(setup: string, punchline: string) {
    if (this.myform.valid) {
      this.jokeCreated.emit(new Joke(this.setup.value, this.punchline.value));
      this.myform.reset();
    }
  }

}
