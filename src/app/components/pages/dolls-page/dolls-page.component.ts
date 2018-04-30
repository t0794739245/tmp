import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';
import { LoaderService } from 'app/services/loader.service';
import { CurrentLangService } from 'app/services/current-lang.service';
import { SwiperService } from 'app/services/swiper.service';
import { Expo } from 'app/class/expo';
import { Image } from 'app/class/image';
import { SwiperData } from 'app/class/swiper-data';

@Component({
  selector: 'app-dolls-page',
  templateUrl: './dolls-page.component.html',
  styleUrls: ['./dolls-page.component.sass']
})
export class DollsPageComponent implements OnInit {
  tr:any;
  list: Expo[] = [];

  constructor(
    private _loaderService: LoaderService,
    private _currentLangService: CurrentLangService,
    private _swiperService: SwiperService
  ) {
    this.tr=TR;
    this._currentLangService.get$().subscribe( lang => this.loadImages() );
  }

  ngOnInit() {

  }

  loadImages() {
    this._loaderService.getDolls$().subscribe(expos => this.list = expos);
  }

  popup( list: Image[], i: number ) {
    this._swiperService.set(
      new SwiperData(list, i)
    );
  }
}
