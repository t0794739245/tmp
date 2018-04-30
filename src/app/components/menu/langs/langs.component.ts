
import { LANGS } from "app/mock/mock-langs";
import { Lang } from "app/class/lang";
import { CurrentLangService } from 'app/services/current-lang.service'
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.sass']
})
export class LangsComponent implements OnInit {

  langs: Lang[] = LANGS;
  currentLang: Lang = LANGS[0];
  display: boolean = false;
  constructor( private currentLangService: CurrentLangService ) {
    this.currentLangService.get$().subscribe(v => this.currentLang = v)
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.display = !this.display
  }
  hideMenu() {
    this.display = false;
  }
  selectLang(lang:Lang) {
    this.currentLangService.set(lang)
    this.hideMenu();
  }
  @HostListener('window:click', ['$event'])
  close() {
    this.display = false;
  }

}
