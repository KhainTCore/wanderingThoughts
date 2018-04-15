import { NgModule } from "@angular/core";

import { FileFetcherService } from "./fileFetcher.service";
import { MatSnackBarModule } from "@angular/material";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ MatSnackBarModule ],
    providers: [
        FileFetcherService
    ]
})

export class CoreModule { }
