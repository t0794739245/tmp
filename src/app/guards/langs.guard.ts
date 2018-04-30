import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LANGS } from 'app/mock/mock-langs';
import { Lang } from 'app/class/lang';

@Injectable()
export class LangsGuard implements CanActivate {
  langs: Lang[] = LANGS;
  langs_obj: any = {};
  
  constructor( private _router: Router ) {
    this.langs.forEach( lang => this.langs_obj[lang.name] = lang );
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if( route.url[0].path in this.langs_obj) {
      return true;
    }
    this._router.navigate(['/'+this.langs[0].name]);
    return false;
  }
}
