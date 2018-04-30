import { Component, OnInit, HostListener } from '@angular/core';
import { MenuStatusService } from "app/services/menu-status.service";
import { CurrentLangService } from "app/services/current-lang.service";
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';
import { LANGS } from 'app/mock/mock-langs';
import { Lang } from 'app/class/lang';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})

export class LayoutComponent implements OnInit {
  langs: Lang[] = LANGS;
  langs_obj: any = {};

  status: boolean = false;
  body: HTMLBodyElement = document.querySelector('body');
  is_preloader: boolean = false;

  constructor(
    private _menuStatusService: MenuStatusService,
    private _activatedRoute : ActivatedRoute,
    private _currentLangService: CurrentLangService,
    private _router: Router,
    private _location: Location,
    private _loaderService: LoaderService
  ) {
    this._loaderService.get$().subscribe( v => {
      this.is_preloader = v;

      if( v ) {
        this.body.classList.add("no-scroll-mobile")
      } else {
        this.body.classList.remove("no-scroll-mobile")
      }
    })
    /* Menu status */
    this._menuStatusService.get$().subscribe(v => {
      if( this.status == v ) return;

      this.status = v;
      if(v)
        return this.body.classList.add("no-scroll-mobile")
      this.body.classList.remove("no-scroll-mobile")
    });

    /* url-lang status */
    this.langs.forEach( lang => this.langs_obj[lang.name] = lang );
    this._activatedRoute.url.subscribe( (segments : UrlSegment[]) => {
      let lang = this.langs_obj[segments[0].path];
      this._currentLangService.set(lang);
    });

    this._currentLangService.get$().subscribe( lang => {
      let url: string[] = this._router.routerState.snapshot.url.split("/");
      url[1] = lang.name;
      this._location.replaceState( url.join("/") );
    });
  }

  ngOnInit(){
  }

  /* statusMenu - displayed/hidden for mobile view */
  statusMenu( status ) {
    if( this.status == status ) return;
    this.status = status;
    this._menuStatusService.set(this.status);
    if(status)
      return this.body.classList.add("no-scroll-mobile")
    this.body.classList.remove("no-scroll-mobile")
  }
  closeMenu() {
    if( this.status == false ) return;
    this.status = false;
    this._menuStatusService.set(this.status);
    this.body.classList.remove("no-scroll-mobile");
  }

  /* Swiper */
  swipeX: number;
  @HostListener('window:touchstart', ['$event'])
  onMouseStart(event) : void {
    this.swipeX = event.changedTouches[0].pageX;
  }

  @HostListener('window:touchmove', ['$event'])
  onMouseMove(event) : void {
    if(this.swipeX) {
      var diff = event.changedTouches[0].pageX - this.swipeX;
      var dist = Math.abs(diff);
      if( dist > 100 ) {
        if( diff > 0 ) {
          this.statusMenu( true );
          this.swipeX = null;
        } else {
          this.statusMenu( false );
          this.swipeX = null;
        }
      }

    }
  }

  @HostListener('window:touchstop', ['$event'])
  onMouseStop(event) : void {
    this.swipeX = null;
  }

}
