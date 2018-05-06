import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { TabbedViewerComponent } from "./tabbedViewer.component";
import { MatTabsModule } from "@angular/material";

@NgModule({
    declarations: [
        TabbedViewerComponent
    ],
    exports: [
        TabbedViewerComponent
    ],
    imports: [
        CommonModule, MatTabsModule
    ]
})

export class TabbedViewerModule { }
