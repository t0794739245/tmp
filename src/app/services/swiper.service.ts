import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SwiperData } from 'app/class/swiper-data';

@Injectable()
export class SwiperService {

  target$: BehaviorSubject<SwiperData> = new BehaviorSubject<SwiperData>(new SwiperData([],0));
  constructor() { }

  get$(): Observable<SwiperData> {
    return this.target$
  }
  get(): SwiperData {
    return this.target$.getValue()
  }
  set(v:SwiperData) {
    this.target$.next(v)
  }

}
