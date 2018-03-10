import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from './core';
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, MatButtonModule, MatToolbarModule, PagesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }