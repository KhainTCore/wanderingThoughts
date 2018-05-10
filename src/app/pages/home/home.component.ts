import { Component, OnInit } from "@angular/core";
import { FileFetcherService, CommonService } from "../../core";

@Component({
    selector: "home",
    styleUrls: ["../../app.component.css", "./home.component.css"],
    templateUrl: "./home.component.html"
})

/**
 * 
 * 
 * @export
 * @class HomeComponent
 */
export class HomeComponent implements OnInit {

    private content: string[] = [];
    private version: string;

    constructor(private fileFetcherService: FileFetcherService, private commonService: CommonService) { }

    ngOnInit() {
        this.fileFetcherService.fetchStaticPage("h").subscribe((file: any) => {
            if (file.file.body) {
                for (let line of file.file.body) {
                    if (line.match(/^<h[2-9]>/))
                        this.content.push("mat-divider");
                    this.content.push(line);
                }
            }
        });

        if (!this.commonService.version) {
            this.commonService.watchVersion.subscribe((version) => {
                this.version = version;
            });
        } else
            this.version = this.commonService.version;
    }

}