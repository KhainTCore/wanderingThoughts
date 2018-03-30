import { Component, OnInit } from "@angular/core";

import { FileFetcherService } from "../../core/fileFetcher.service";
import { Content, Story } from "../../shared";

@Component({
    selector: "writing",
    styleUrls: ["./writing.component.css"],
    templateUrl: "writing.component.html"
})

/**
 * Creates the layout and maintains the state of the Writing page of the website.
 * Has the Left hand Side Nav, the Central content, and a floating Table of Content.
 * 
 * @export
 * @class WritingComponent
 */
export class WritingComponent implements OnInit {

    private file: Story = new Story("");
    private listHeaderCSS: object = {'font-weight': "bold", 'font-size.px': 24};
    private listIndent: number = 10;
    private poetryList: Content[] = [new Content("Daily Practice Collection", 1)];
    private storyList: Content[] = [];
    private storyTitle: string = "No Story Selected";
    private storyTOC: Content[] = [];

    constructor(private fileFetcherService: FileFetcherService) { }

    ngOnInit() {
        this.fileFetcherService.fetchList("s").subscribe((list) => {
            for (let name of list) {
                this.storyList.push(new Content(name, 1));
            }            
        });

        this.fileFetcherService.fetchList("p").subscribe((list) => {
            for (let name of list) {
                this.poetryList.push(new Content(name, 1));
            }
        });
    }

    onSelected(content: Content, type: string) {
        this.fileFetcherService.fetchFile(type, content.title)
            .subscribe((file: {file: Story}) => {
                this.file = file.file;
                this.storyTitle = file.file.title || content.title;
            });
    }
}