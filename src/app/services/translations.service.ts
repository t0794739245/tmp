import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class TranslationsService {
  private target$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  data: any;
  constructor( private http: HttpClient) {
  }



  set( lang: string ) {
    this.target$.next(true);
  }

  get$(): BehaviorSubject<boolean> {
    return this.target$
  }

  get(): any {
    return this.data
  }

  t(k:string): string {
    if(this.data[k])
      return this.data[k];
    return k
  }
}
