import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MenuStatusService } from "app/services/menu-status.service";
import { CurrentLangService } from 'app/services/current-lang.service';

import { MenuItem } from "app/class/menu-item";
import { MENUITEMS } from "app/mock/mock-menu";
import { LANGS } from "app/mock/mock-langs";
import { TR } from 'app/services/loader.service';
import { Lang } from 'app/class/lang'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  //@Output()
  //statusMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOnTop: boolean;
  isMobileMenu: boolean = false;
  subscription: Subscription;
  menuItems: MenuItem[] = MENUITEMS;
  langs: any[] = LANGS;
  tr=TR;
  currLang: Lang;

  constructor(private _statusService: MenuStatusService, private _currentLangService: CurrentLangService) {
    this._statusService.get$().subscribe(v => this.isMobileMenu = v);
    this._currentLangService.get$().subscribe( lang => {
      this.currLang = lang;
    } );
  }

  @HostListener('window:scroll', ['$event'])
  noScroll( $event ) {
    this.calcTop();
  }
  ngOnInit() {
    this.calcTop();
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  swapMobileMenu() {
    this.isMobileMenu = !this.isMobileMenu;
    this._statusService.set(this.isMobileMenu);
    return false;
  }

  private calcTop() {
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    if( top > 0 ) {
      this.isOnTop = false;
    } else {
      this.isOnTop = true;
    }
  }
}
