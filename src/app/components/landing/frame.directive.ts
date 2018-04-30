import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[landing-frame]',
})
export class FrameDirective {
  type: String;
  background: String;
  el: any;

  constructor( private _el: ElementRef) {
    this.el = _el.nativeElement;
    this.type = this.el.getAttribute('landing-frame');
    this.background = this.el.getAttribute('background');

    /* Style prperties */
    // this.el.style.height='100vh'; /* TODO remove */
    this.el.style.backgroundImage = 'url(' + this.background + ')';
    this.el.style.backgroundRepeat = 'no-repeat'
    this.el.style.backgroundSize = 'cover'
    this.el.style.backgroundPosition = 'center'
  }

}
