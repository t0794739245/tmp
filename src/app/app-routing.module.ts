import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangsGuard } from 'app/guards/langs.guard';
//import { HomepageComponent } from "./pages/homepage/homepage.component";
//import { OilComponent } from "./pages/oil/oil.component";

import { LayoutComponent } from './components/layout/layout.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AquaPageComponent } from './components/pages/aqua-page/aqua-page.component';
import { DollsPageComponent } from './components/pages/dolls-page/dolls-page.component';
import { ExpoPageComponent } from './components/pages/expo-page/expo-page.component';
import { HpPageComponent } from './components/pages/hp-page/hp-page.component';
import { OilPageComponent } from './components/pages/oil-page/oil-page.component';

const routes: Routes = [
  {
    path: ':lang',
    component: LayoutComponent,
    canActivate: [LangsGuard],
    children: [
      {path: '', component: HpPageComponent },
      {path: 'aqua', component: AquaPageComponent },
      {path: 'oil', component: OilPageComponent },
      {path: 'dolls', component: DollsPageComponent },
      {path: 'expo', component: ExpoPageComponent },
      {path: 'about', component: AboutPageComponent }
    ],
  },
  { path: '**', redirectTo: '/en', pathMatch: 'full' }
];

//export const comp3Routing = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
