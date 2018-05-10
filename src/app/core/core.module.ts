import { NgModule } from "@angular/core";

import { FileFetcherService } from "./fileFetcher.service";
import { MatSnackBarModule, MatIconModule } from "@angular/material";
import { IconRegistryService } from "./iconRegistry.service";
import { CommonService } from "./common.service";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ MatIconModule, MatSnackBarModule ],
    providers: [
        CommonService, FileFetcherService, IconRegistryService
    ]
})

export class CoreModule { }
