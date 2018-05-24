import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  @Input('appCardHover') config = {
    querySelector: '.card-text'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
