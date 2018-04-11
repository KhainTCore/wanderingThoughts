import { NgModule } from "@angular/core";

import { TableOfContentsComponent } from "./tableOfContents.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TableOfContentsComponent
    ],
    exports: [
        TableOfContentsComponent
    ],
    imports: [
        CommonModule
    ]
})

export class TableOfContentsModule { }
