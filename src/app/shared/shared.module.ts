import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TableOfContentsModule } from "./tableOfContents/tableOfContents.module";
import { TextViewerModule } from "./textViewer/textViewer.module";
import { ButtonMenuModule } from "./buttonMenu/buttonMenu.module";
import { TabbedViewerModule } from "./tabbedViewer/tabbedViewer.module";
import { CardCarouselModule } from "./cardCarousel/cardCarousel.module";

@NgModule({
    declarations: [
        
    ],
    exports: [
        ButtonMenuModule, CardCarouselModule, TabbedViewerModule, TableOfContentsModule, TextViewerModule
    ],
    imports: [
        ButtonMenuModule, CommonModule, CardCarouselModule, TabbedViewerModule, TableOfContentsModule
    ]
})

export class SharedModule { }
