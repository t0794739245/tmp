import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';
import { SwiperService } from 'app/services/swiper.service';
import { Image } from 'app/class/image';
import { SwiperData } from 'app/class/swiper-data';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {
  tr:any;
  img:Image = new Image("/assets/about/me.jpg");
  env: any = environment;

  constructor( private _swiperService: SwiperService ) {
    this.tr=TR
  }

  ngOnInit() {
  }
  popup() {
    this._swiperService.set(
      new SwiperData([this.img], 0)
    );
  }
}
