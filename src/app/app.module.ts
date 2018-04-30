import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
//import { DemoComponent } from './angular/material/demo/demo.component';
import { FrameDirective } from './components/landing/frame.directive';
import { MagComponent } from './components/landing/frame/mag/mag.component';
import { MasterclassComponent } from './components/landing/frame/masterclass/masterclass.component';
import { AquaComponent } from './components/landing/frame/gallery/aqua/aqua.component';
import { OilComponent } from './components/landing/frame/gallery/oil/oil.component';
import { DollsComponent } from './components/landing/frame/gallery/dolls/dolls.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import {StopPropagationModule, StopPropMouseleaveDirective} from 'ngx-stop-propagation';
import { MenuStatusService } from './services/menu-status.service';
import { CurrentLangService } from 'app/services/current-lang.service';
import { LoaderService } from 'app/services/loader.service';
import { SwiperService } from 'app/services/swiper.service';



import { AppRoutingModule } from './app-routing.module';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AquaPageComponent } from './components/pages/aqua-page/aqua-page.component';
import { DollsPageComponent } from './components/pages/dolls-page/dolls-page.component';
import { ExpoPageComponent } from './components/pages/expo-page/expo-page.component';
import { HpPageComponent } from './components/pages/hp-page/hp-page.component';
import { OilPageComponent } from './components/pages/oil-page/oil-page.component';
import { MobileMenuComponent } from './components/layout/mobile-menu/mobile-menu.component';
import { LangsComponent } from './components/menu/langs/langs.component';
//import { MockMenuComponent } from './mock/mock-menu.component';
//import { MenuItemComponent } from './class/menu-item.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslationDirective } from './directives/translation.directive';
import { LangsGuard } from 'app/guards/langs.guard';

//import * as jquery from 'jquery';
//import { SlickModule } from 'ngx-slick';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperPopupComponent } from './components/swiper/swiper-popup.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //DemoComponent,
    FrameDirective,
    MagComponent,
    MasterclassComponent,
    AquaComponent,
    OilComponent,
    DollsComponent,
    FooterComponent,
    LayoutComponent,
    StopPropMouseleaveDirective,
    AboutPageComponent,
    AquaPageComponent,
    DollsPageComponent,
    ExpoPageComponent,
    HpPageComponent,
    OilPageComponent,
    MobileMenuComponent,
    LangsComponent,
    TranslationDirective,
    SwiperPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
//    FormsModule, ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    StopPropagationModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
    MenuStatusService,
    CurrentLangService,
    LoaderService,
    HttpClientModule,
    LangsGuard,
    SwiperService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
