import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatGridListModule } from '@angular/material';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from './core';
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, MatButtonModule,
    MatGridListModule, MatIconModule, MatMenuModule, MatToolbarModule, PagesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }