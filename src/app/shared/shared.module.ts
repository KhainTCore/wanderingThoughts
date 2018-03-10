import { NgModule } from "@angular/core";
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
        CommonModule
    ]
})

export class SharedModule { }
