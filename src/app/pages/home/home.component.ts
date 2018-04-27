import { Component, OnInit } from "@angular/core";
import { FileFetcherService } from "../../core";

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

    constructor(private fileFetcherService: FileFetcherService) { }

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
    }

}