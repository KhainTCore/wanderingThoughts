import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { 
        MatCardModule, MatDividerModule, MatGridListModule, MatSidenavModule, MatToolbarModule 
    } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CodeComponent, HomeComponent, PageNotFoundComponent, WritingComponent } from ".";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        CodeComponent, HomeComponent, PageNotFoundComponent, WritingComponent
    ],
    exports: [
        CodeComponent, HomeComponent, PageNotFoundComponent, WritingComponent
    ],
    imports: [
        CommonModule, BrowserAnimationsModule, FormsModule, MatCardModule, MatDividerModule, 
        MatGridListModule, MatSidenavModule, MatToolbarModule, SharedModule
    ]
})

export class PagesModule { }
