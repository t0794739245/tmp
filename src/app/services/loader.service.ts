import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { HttpClient } from '@angular/common/http';
import { CurrentLangService } from 'app/services/current-lang.service';

import { Observable } from 'rxjs/Observable';
//import { Lang } from 'app/calss/Lang';
//import { switchMap, tap, share, catchError, onErrorResumeNext, map, repeat } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';

import { Image } from 'app/class/image';
import { Expo } from 'app/class/expo';
import { HpData } from 'app/class/hp-data';

import { Lang } from "app/class/lang";

export const TR = {};

@Injectable()
export class LoaderService {
  private _counter: number = 0;
  private _target$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _translations$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private _http: HttpClient, private _currentLangService: CurrentLangService ) {

    this._currentLangService.get$()
      .subscribe( lang => {
        this._target$.next(!!++this._counter);
        this._http.get( this._urlTranslations( lang.name ) ).subscribe(
          result => {
            this._translations$.next(result);
            for (let key of Object.keys(result)) {
              TR[key] = result[key];
            }
          },
          e => this._target$.next(!!--this._counter),
          () => this._target$.next(!!--this._counter)
        )
      });
  }

  private _urlTranslations( lang: string ) {
    return `/assets/locale/${lang}.json`
  }

  get$() {
    return this._target$;
  }

  getTranslations$(): BehaviorSubject<any> {
    return this._translations$;
  }


  /* Expo */
  private _urlExpo( lang: string ) {
    return `/assets/json/expo.${lang}.json`
  }

  getExpo$(): Observable<Expo[]> {
    let request = this._http.get<Expo[]>( this._urlExpo( this._currentLangService.get().name ) );
    this._target$.next(!!++this._counter);
    request.subscribe(
      r => this._target$.next(!!--this._counter),
      e => this._target$.next(!!--this._counter)
    );
    return request;
  }

  /* Dolls */
  private _urlDolls( lang: string ) {
    return `/assets/json/dolls.${lang}.json`
  }

  getDolls$(): Observable<Expo[]> {
    let request = this._http.get<Expo[]>( this._urlDolls( this._currentLangService.get().name ) );
    this._target$.next(!!++this._counter);
    request.subscribe(
      r => this._target$.next(!!--this._counter),
      e => this._target$.next(!!--this._counter)
    );
    return request;
  }

  /* Aqua */
  private _urlAqua( lang: string ) {
    return `/assets/json/aqua.${lang}.json`
  }

  getAqua$(): Observable<Image[]> {
    let request = this._http.get<Image[]>( this._urlAqua( this._currentLangService.get().name ) );
    this._target$.next(!!++this._counter);
    request.subscribe(
      r => this._target$.next(!!--this._counter),
      e => this._target$.next(!!--this._counter)
    );
    return request;
  }

  /* Oil */
  private _urlOil( lang: string ) {
    return `/assets/json/oil.${lang}.json`
  }

  getOil$(): Observable<Image[]> {
    let request = this._http.get<Image[]>( this._urlOil( this._currentLangService.get().name ) );
    this._target$.next(!!++this._counter);
    request.subscribe(
      r => this._target$.next(!!--this._counter),
      e => this._target$.next(!!--this._counter)
    );
    return request;
  }

  /* Hp */
  private _urlHp( lang: string ) {
    return `/assets/json/hp.${lang}.json`
  }

  getHp$(): Observable<HpData> {
    let request = this._http.get<HpData>( this._urlHp( this._currentLangService.get().name ) );
    this._target$.next(!!++this._counter);
    request.subscribe(
      r => this._target$.next(!!--this._counter),
      e => this._target$.next(!!--this._counter)
    );
    return request;
  }
}
