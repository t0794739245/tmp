import { Component, OnInit, HostListener } from '@angular/core';

import { MENUITEMS } from "app/mock/mock-menu";
import { LANGS } from "app/mock/mock-langs";

import { MenuItem } from "app/class/menu-item";
import { Lang } from "app/class/lang";

import { CurrentLangService } from 'app/services/current-lang.service'
import { MenuStatusService } from "app/services/menu-status.service";
import { TR } from 'app/services/loader.service';

@Component({
  selector: 'app-layout-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass']
})
export class MobileMenuComponent implements OnInit {
  tr:any;
  menuItems: MenuItem[] = MENUITEMS;
  langs: Lang[] = LANGS;
  currentLang: Lang = LANGS[0];


  constructor(
    private currentLangService: CurrentLangService,
    private _statusService: MenuStatusService ) {
    this.tr=TR;
    this.currentLangService.get$().subscribe(v => this.currentLang = v);
  }

  ngOnInit() {
  }

  selectLang(lang:Lang) {
    this.currentLangService.set(lang);
    this._statusService.off();

  }
}
