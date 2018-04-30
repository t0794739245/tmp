import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Lang } from "app/class/lang";
import { LANGS } from "app/mock/mock-langs";


@Injectable()
export class CurrentLangService {

  private target$: BehaviorSubject<Lang> = new BehaviorSubject<Lang>(LANGS[0]);

  constructor() {}

  get$(): Observable<Lang> {
    return this.target$
  }
  get(): Lang {
    return this.target$.getValue()
  }
  set(v:Lang) {
    this.target$.next(v)
  }

}
