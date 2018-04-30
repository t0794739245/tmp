import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MenuStatusService {

  private target$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  on() { this.set(true) }
  off() { this.set(false) }

  toggle() {
    this.target$.next(!this.get())
  }

  get$(): Observable<boolean> {
    return this.target$
  }
  get(): boolean {
    return this.target$.getValue()
  }
  set(v:boolean) {
    this.target$.next(v)
  }

}
