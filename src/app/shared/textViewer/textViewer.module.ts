import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material";

import { TextViewerComponent } from "./textViewer.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TextViewerComponent
    ],
    exports: [
        TextViewerComponent
    ],
    imports: [
        CommonModule, MatDividerModule
    ]
})

export class TextViewerModule { }
