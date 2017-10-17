/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {LandingPageComponent} from '../landing-page/landing-page.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    AppRoutingModule,
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl}    from '@angular/forms';
import {HttpModule} from "@angular/http";
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  CriacaoTutorComponent} from "../criacao-tutor/criacao-tutor.component";
import { MenuComponent } from "../menu/menu.component";
import { LoginDialogComponent } from "../landing-page/login-dialog/login.component";
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule,
} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule

  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    CriacaoTutorComponent,
    MenuComponent,
    LoginDialogComponent,
  ],
  entryComponents: [LoginDialogComponent],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }