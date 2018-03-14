import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material";

import { TableOfContentsComponent, TextViewerComponent } from ".";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TableOfContentsComponent, TextViewerComponent
    ],
    exports: [
        TableOfContentsComponent, TextViewerComponent
    ],
    imports: [
        CommonModule, MatDividerModule
    ]
})

export class SharedModule { }
