import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';


@Directive({
  selector: '[tr]'
})
export class TranslationDirective {

  private _key: string;
  private _value: string;
  constructor( private _el: ElementRef, _ls: LoaderService ) {
    this._key = _el.nativeElement.getAttribute('rt');
  }

  OnDestroy() {
  }
}
