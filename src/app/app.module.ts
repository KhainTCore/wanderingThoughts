import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatGridListModule } from '@angular/material';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from './core';
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';
import { ButtonMenuModule } from "./shared/buttonMenu/buttonMenu.module";

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, CoreModule, ButtonMenuModule, HttpClientModule, MatButtonModule,
    MatGridListModule, MatIconModule, MatMenuModule, MatToolbarModule, PagesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }