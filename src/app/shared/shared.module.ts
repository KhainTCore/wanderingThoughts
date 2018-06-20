import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TableOfContentsModule } from "./tableOfContents/tableOfContents.module";
import { TextViewerModule } from "./textViewer/textViewer.module";
import { ButtonMenuModule } from "./buttonMenu/buttonMenu.module";
import { TabbedViewerModule } from "./tabbedViewer/tabbedViewer.module";
import { CardCarouselModule } from "./cardCarousel/cardCarousel.module";
import { EmailListDialogModule } from "./emailListDialog/emailListDialog.module";

@NgModule({
    declarations: [
        
    ],
    exports: [
        ButtonMenuModule, CardCarouselModule, EmailListDialogModule, TabbedViewerModule, TableOfContentsModule, TextViewerModule
    ],
    imports: [
        ButtonMenuModule, CommonModule, CardCarouselModule, EmailListDialogModule, TabbedViewerModule, TableOfContentsModule
    ]
})

export class SharedModule { }
