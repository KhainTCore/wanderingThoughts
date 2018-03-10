import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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
        CommonModule, FormsModule, SharedModule
    ]
})

export class PagesModule { }
