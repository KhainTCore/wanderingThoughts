// Third-party Libraries
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule, MatGridListModule, MatIconModule, MatButtonModule } from "@angular/material";

// src files
import { ButtonMenuComponent } from "./buttonMenu.component";

@NgModule({
    declarations: [
        ButtonMenuComponent
    ],
    exports: [
        ButtonMenuComponent
    ],
    imports: [
        CommonModule, MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule
    ]
})

export class ButtonMenuModule { }
