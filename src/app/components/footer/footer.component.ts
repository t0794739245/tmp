import { Component, OnInit, HostListener } from '@angular/core';
import { LANGS } from "app/mock/mock-langs";
import { Lang } from "app/class/lang";
import { CurrentLangService } from 'app/services/current-lang.service'
import { TR } from 'app/services/loader.service';

import { MENUITEMS } from "app/mock/mock-menu";
import { MenuItem } from "app/class/menu-item";

import { environment } from 'environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  langs: Lang[] = LANGS;
  currentLang: Lang = LANGS[0];
  tr: any;
  menuItems: MenuItem[] = MENUITEMS;
  env: any = environment;

  constructor( private currentLangService: CurrentLangService ) {
    this.tr = TR;
    this.currentLangService.get$().subscribe(v => this.currentLang = v);
  }

  ngOnInit() {
  }
  selectLang(lang:Lang) {
    this.currentLangService.set(lang);
  }
}
