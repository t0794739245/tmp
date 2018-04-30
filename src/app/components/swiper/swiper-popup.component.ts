import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SwiperService } from 'app/services/swiper.service';
import { SwiperData } from 'app/class/swiper-data';
import { Image } from 'app/class/image';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'popup-swiper',
  templateUrl: './swiper-popup.component.html',
  styleUrls: ['./swiper-popup.component.sass']
})
export class SwiperPopupComponent implements OnInit {

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  body: HTMLBodyElement = document.querySelector('body');

  list: Image[]=[];
  constructor(
    private _swiperService: SwiperService
  ) {}

  ngOnInit() {
    this._swiperService.get$().subscribe(
      ( swiperData: SwiperData ) => this.on(swiperData)
    );
  }

  on( swiperData: SwiperData ) {
    this.body.classList.add("no-scroll-mobile");
    this.list = swiperData.images;
    this.componentRef.directiveRef.setIndex(swiperData.current);
  }
  off(){
    this.list=[];
    this.body.classList.remove("no-scroll-mobile");
  }
  next() {
    this.componentRef.directiveRef.nextSlide();
  }
  prev() {
    this.componentRef.directiveRef.prevSlide();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) { //ESCAPE_KEYCODE = 27
      this.off()
    }
    if (event.keyCode === 37) { //LEFT_KEYCODE = 37
      this.componentRef.directiveRef.prevSlide();
    }
    if (event.keyCode === 39) { //RIGHT_KEYCODE = 39
      this.componentRef.directiveRef.nextSlide();
    }
  }


}
