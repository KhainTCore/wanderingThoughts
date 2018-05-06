import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule, MatIconModule } from "@angular/material";

import { CardCarouselComponent } from "./cardCarousel.component";

@NgModule({
    declarations: [
        CardCarouselComponent
    ],
    exports: [
        CardCarouselComponent
    ],
    imports: [
        CommonModule, MatButtonModule, MatCardModule, MatIconModule
    ],

})

export class CardCarouselModule { }
