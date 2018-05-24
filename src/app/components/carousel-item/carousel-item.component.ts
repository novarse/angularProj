import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  isActive: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
}
