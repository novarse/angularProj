import { Directive, HostListener, ElementRef, Input, Renderer, HostBinding, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRollover]'
})
export class RolloverDirective {
  
  @Input('appRollover') config = {
    'initial': 'https://unsplash.it/200/300?image=201',
    'over': ''
  };

  @HostBinding('src') private imagePath: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('in ngOnChanges');
    if (this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }

  @HostListener('mouseover') onMouseOver() {
    console.log('on mouseover');
    this.imagePath = this.config.over;
//    this.config = {'fg':'kj', 'gf':''};
  }

  @HostListener('mouseout') onMouseOut() {
    console.log('on mouseout');
    this.imagePath = this.config.initial;
  }
}
