import { NgModule } from "@angular/core";

import { FileFetcherService } from "./fileFetcher.service";
import { MatSnackBarModule, MatIconModule } from "@angular/material";
import { IconRegistryService } from "./iconRegistry.service";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ MatIconModule, MatSnackBarModule ],
    providers: [
        FileFetcherService, IconRegistryService
    ]
})

export class CoreModule { }
