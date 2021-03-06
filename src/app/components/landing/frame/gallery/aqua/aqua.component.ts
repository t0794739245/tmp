import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';

import { LoaderService } from 'app/services/loader.service';
import { CurrentLangService } from 'app/services/current-lang.service';
import { SwiperService } from 'app/services/swiper.service';

import { Image } from 'app/class/image';
import { HpData } from 'app/class/hp-data';
import { SwiperData } from 'app/class/swiper-data';

import { Lang } from 'app/class/lang'


@Component({
  selector: 'landing-frame-gallery-aqua',
  templateUrl: './aqua.component.html',
  styleUrls: ['./aqua.component.sass']
})
export class AquaComponent implements OnInit {
  tr:any;
  list: Image[] = [];
  currLang: Lang;

  constructor(
    private _loaderService: LoaderService,
    private _currentLangService: CurrentLangService,
    private _swiperService: SwiperService
  ) {
    this.tr=TR;
    this._currentLangService.get$().subscribe( lang => {
      this.currLang = lang;
      this.loadImages();
    } );
  }

  ngOnInit() {}

  loadImages() {
    this._loaderService.getHp$().subscribe((hpData:HpData) => this.list = hpData.aqua );
  }

  popup( i: number ) {
    this._swiperService.set(
      new SwiperData(this.list, i)
    );
  }

}
