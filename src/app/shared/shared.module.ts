import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardViewerModule } from "./cardViewer/cardViewer.module";
import { TableOfContentsModule } from "./tableOfContents/tableOfContents.module";
import { TextViewerModule } from "./textViewer/textViewer.module";
import { ButtonMenuModule } from "./buttonMenu/buttonMenu.module";

@NgModule({
    declarations: [
        
    ],
    exports: [
        ButtonMenuModule, CardViewerModule, TableOfContentsModule, TextViewerModule
    ],
    imports: [
        ButtonMenuModule, CommonModule, CardViewerModule, TableOfContentsModule
    ]
})

export class SharedModule { }
