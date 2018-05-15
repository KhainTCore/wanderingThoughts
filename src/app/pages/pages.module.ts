import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { 
        MatCardModule, MatDividerModule, MatGridListModule, MatSidenavModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatChipsModule, MatButtonModule 
    } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { 
    BlogComponent, CodeComponent, HomeComponent, PageNotFoundComponent, 
    PhotographyComponent, WritingComponent 
} from ".";

import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        BlogComponent, CodeComponent, HomeComponent, PageNotFoundComponent, 
        PhotographyComponent, WritingComponent
    ],
    exports: [
        BlogComponent, CodeComponent, HomeComponent, PageNotFoundComponent,
        PhotographyComponent, WritingComponent
    ],
    imports: [
        CommonModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, 
        MatExpansionModule, MatGridListModule, MatIconModule, MatSidenavModule, MatToolbarModule, SharedModule
    ]
})

export class PagesModule { }
