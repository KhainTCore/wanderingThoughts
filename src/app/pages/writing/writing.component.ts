import { Component, OnInit } from "@angular/core";

import { FileFetcherService } from "../../core/fileFetcher.service";
import { Content, HtmlFile } from "../../shared";
import { MenuItem } from "../../shared/buttonMenu/buttonMenu.component";
import { isNullOrUndefined } from "util";

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
        new MenuItem(1, null, "alignLeft", null, ["accent-icon"], "l"),
        new MenuItem(1, null, "alignCenter", null, ["accent-icon"], "c"),
        new MenuItem(1, null, "alignRight", null, ["accent-icon"], "r")
    ];
    private alignmentTitle: object = {displayValue: "Align", style: {"font-weight": "bolder"}};
    private dailyPracticeList: Content[] = [];
    private file: HtmlFile = new HtmlFile("");
    private fileTitle: string = "No Story Selected";
    private listIndent: number = 10;
    private textViewerStyle: any = {margin: "auto 30% auto 24px", "text-align": "left"};
    private marginMenu: MenuItem[] = [
        new MenuItem(1, "Small", null , null, null, "s"),
        new MenuItem(1, "Medium", null, null, null, "m"),
        new MenuItem(1, "Large", null, null, null, "l")
    ];
    private marginTitle: object = {displayValue: "Margin", style: {"font-weight": "bolder"}};
    private poetryList: Content[] = [];
    private storyList: Content[] = [];
    private tableOfContents: Content[] = [];
    private textSizeMenu: MenuItem[] = [
        new MenuItem(1, "Small", null, null, null, "s"),
        new MenuItem(1, "Medium", null, null, null, "m"),
        new MenuItem(1, "Large", null, null, null, "l")
    ];
    private textSizeTitle: object = {icon: "textSize", css: "accent-icon"};

    constructor(private fileFetcherService: FileFetcherService) { }

    ngOnInit() {
        this.fileFetcherService.fetchList("s").subscribe((list) => {
            for (let name of list) {
                this.storyList.push(new Content(name, 0));
            }            
            this.storyList.push(new Content("Doesn't Exist", 0));
        });

        this.fileFetcherService.fetchList("p").subscribe((list) => {
            for (let name of list) {
                this.poetryList.push(new Content(name, 0));
            }
        });

        this.fileFetcherService.fetchList("dp").subscribe((list) => {
            for (let name of list) {
                this.dailyPracticeList.push(new Content(name, 0));
            }
        });
    }

    onSelected(content: Content, type: string) {
        this.fileFetcherService.fetchFile(type, content.title)
            .subscribe((file: {file: HtmlFile}) => {
                this.file = file.file;
                this.fileTitle = file.file.title || content.title;
            });
    }

    setMargins(margin: string) {
        switch (margin) {
            case "s":
                this.textViewerStyle.margin = "auto 20% auto 24px";
                break;
            case "m":
                this.textViewerStyle.margin = "auto 30% auto 24px";
                break;
            case "l":
            default:
                this.textViewerStyle.margin = "auto 45% auto 24px";
        }
    }

    setAlignment(align: string) {
        let textAlign;
        switch (align) {
            case "c":
                textAlign = "center";
                break;
            case "r":
                textAlign = "right";
                break;
            case "l":
            default:
                textAlign = "left";
        }

        this.textViewerStyle["text-align"] = textAlign;
    }

    setTextSize(size: string) {
        let textSize;
        switch(size) {
            case "s":
                textSize = "12";
                break;
            case "l":
                textSize = "24";
                break;
            case "m":
            default:
                textSize = "16";
        }

        this.textViewerStyle["font-size.px"] = textSize;
    }
}