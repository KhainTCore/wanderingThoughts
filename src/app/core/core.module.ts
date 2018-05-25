import { NgModule } from "@angular/core";

import { FileFetcherService } from "./fileFetcher.service";
import { MatSnackBarModule, MatIconModule } from "@angular/material";
import { IconRegistryService } from "./iconRegistry.service";
import { CommonService } from "./common.service";
import { MessageService } from "./message.service";

@NgModule({
    declarations: [],
    exports: [],
    imports: [ MatIconModule, MatSnackBarModule ],
    providers: [
        CommonService, FileFetcherService, IconRegistryService, MessageService
    ]
})

export class CoreModule { }
