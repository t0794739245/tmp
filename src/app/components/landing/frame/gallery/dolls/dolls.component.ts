import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';

import { LoaderService } from 'app/services/loader.service';
import { CurrentLangService } from 'app/services/current-lang.service';
import { SwiperService } from 'app/services/swiper.service';

import { Image } from 'app/class/image';
import { HpData } from 'app/class/hp-data';
import { SwiperData } from 'app/class/swiper-data';

@Component({
  selector: 'landing-frame-gallery-dolls',
  templateUrl: './dolls.component.html',
  styleUrls: ['./dolls.component.sass']
})
export class DollsComponent implements OnInit {
  tr:any;
  list: Image[][] = [];

  constructor(
    private _loaderService: LoaderService,
    private _currentLangService: CurrentLangService,
    private _swiperService: SwiperService
  ) {
    this.tr=TR;
    this._currentLangService.get$().subscribe( lang => this.loadImages() );
  }

  ngOnInit() {}

  loadImages() {
    this._loaderService.getHp$().subscribe((hpData:HpData) => this.list = hpData.dolls );
  }

  popup( list: Image[], i: number ) {
    this._swiperService.set(
      new SwiperData(list, i)
    );
  }

}
