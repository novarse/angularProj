import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { Component, OnInit, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;

  @Input() delay: number = 2000;
  
  constructor() { }

  ngAfterContentInit() {
    let carouselItems = this.carouselItemsList.toArray();
    let count: number = 0;
    let max = carouselItems.length;
    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay)
  }

  ngOnInit() {
  }

}
