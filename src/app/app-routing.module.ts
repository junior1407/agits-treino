import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {LandingPageComponent }  from '../landing-page/landing-page.component';
import {  CriacaoTutorComponent} from "../criacao-tutor/criacao-tutor.component";
import { MenuComponent } from "../menu/menu.component";
const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page',  component: LandingPageComponent },
  {path: 'menu', component: MenuComponent, children:[
    {path: 'criacao-tutor', component: CriacaoTutorComponent},
  ] },
 // { path: 'detail/:id', component: HeroDetailComponent },
 //// { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}