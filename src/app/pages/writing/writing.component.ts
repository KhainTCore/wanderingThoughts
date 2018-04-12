import { Component, OnInit } from "@angular/core";

import { FileFetcherService } from "../../core/fileFetcher.service";
import { Content, Story } from "../../shared";
import { MenuItem } from "../../shared/buttonMenu/buttonMenu.component";

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

    private alignmentMenu: MenuItem[] = [
        new MenuItem(1, "Left", null, null, "l"),
        new MenuItem(1, "Center", null, null, "c"),
        new MenuItem(1, "Right", null, null, "r")
    ];
    private file: Story = new Story("");
    private fileTitle: string = "No Story Selected";
    private listHeaderCSS: object = {'font-weight': "bold", 'font-size.px': 24};
    private listIndent: number = 10;
    private textViewerStyle: any = {margin: "auto 20% auto 20%", "text-align": "left"};
    private marginMenu: MenuItem[] = [
        new MenuItem(1, "Small", null, null, "s"),
        new MenuItem(1, "Medium", null, null, "m"),
        new MenuItem(1, "Large", null, null, "l")
    ];
    private poetryList: Content[] = [new Content("Daily Practice Collection", 1)];
    private storyList: Content[] = [];
    private tableOfContents: Content[] = [];

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
                this.fileTitle = file.file.title || content.title;
            });
    }

    setMargins(margin: string) {
        switch (margin) {
            case "s":
                this.textViewerStyle.margin = "auto 10% auto 10%";
                break;
            case "m":
                this.textViewerStyle.margin = "auto 20% auto 20%";
                break;
            case "l":
            default:
                this.textViewerStyle.margin = "auto 30% auto 30%";
        }
    }

    setAlignment(align: string) {
        switch (align) {
            case "c":
                this.textViewerStyle["text-align"] = "center";
                break;
            case "r":
                this.textViewerStyle["text-align"] = "right";
                break;
            case "l":
            default:
                this.textViewerStyle["text-align"] = "left";
        }
    }
}