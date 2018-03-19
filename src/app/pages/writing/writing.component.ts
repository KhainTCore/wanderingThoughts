import { Component, OnInit } from "@angular/core";

import { FileFetcherService } from "../../core/fileFetcher.service";

@Component({
    selector: "writing",
    styleUrls: ["./writing.component.css"],
    templateUrl: "writing.component.html"
})

/**
 * 
 * 
 * @export
 * @class WritingComponent
 */
export class WritingComponent implements OnInit {

    private file: object = {};
    private storyList: string[] = ["No Stories"];

    constructor(private fileFetcherService: FileFetcherService) { }

    ngOnInit() {
        this.fileFetcherService.fetchStoryList().subscribe((list) => {
            this.storyList = list;
            console.log(list);
        });
        this.fileFetcherService.fetchStory("Behind Green Mists (Draft 5) Filtered.htm")
            .subscribe((file) => {
                this.file = file;
                console.log(this.file);
            });
    }
}