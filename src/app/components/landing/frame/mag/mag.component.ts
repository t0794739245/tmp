import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';
import { Lang } from 'app/class/lang';
import { CurrentLangService } from 'app/services/current-lang.service';


@Component({
  selector: 'landing-frame-mag',
  templateUrl: './mag.component.html',
  styleUrls: ['./mag.component.sass']
})
export class MagComponent implements OnInit {
  tr:any;
  currLang: Lang;

  constructor( private _currentLangService: CurrentLangService) {
    this.tr=TR;
    this._currentLangService.get$().subscribe( lang => {
      this.currLang = lang;
    } );
  }

  ngOnInit() {
  }

}
