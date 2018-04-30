import { Component, OnInit } from '@angular/core';
import { TR } from 'app/services/loader.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-hp-page',
  templateUrl: './hp-page.component.html',
  styleUrls: ['./hp-page.component.sass']
})

export class HpPageComponent implements OnInit {
  tr: any;
  constructor( private _activatedRoute : ActivatedRoute ) {
    this.tr=TR;
    this._activatedRoute.params.subscribe( (params : Params) => {
      //this.set(params);
    });

  }
  ngOnInit() {}
}
