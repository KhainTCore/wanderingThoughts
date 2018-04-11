import { NgModule } from "@angular/core";
import { MatCardModule, MatGridListModule } from "@angular/material";

import { CommonModule } from "@angular/common";
import { CardViewerComponent } from "./cardViewer.component";

@NgModule({
    declarations: [
        CardViewerComponent
    ],
    exports: [
        CardViewerComponent
    ],
    imports: [
        CommonModule, MatCardModule, MatGridListModule
    ]
})

export class CardViewerModule { }
