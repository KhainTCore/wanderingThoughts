import { Component, Input } from "@angular/core";

@Component({
    selector: "table-of-contents",
    styleUrls: ["./tableOfContents.component.css"],
    templateUrl: "./tableOfContents.component.html"
})

export class TableOfContentsComponent { 
    @Input() border: boolean = true;
    @Input() borderColour: string = "#294F6D";
    @Input() content: Content[] = [
        {title: "Ch. 1", target: "#", level: 0},
        {title: "Sec. 1", target: "sec", level: 1},
        {title: "Ch. 2", target: "", level: 0}
    ];
    @Input() indentSize: number = 5;
    @Input() textColour: string = "white";

    constructor() { }
}

export class Content {
    public title: string;
    public target: string;
    public level: number;

    constructor(title: string, target: string, level: number) {
        this.title = title;
        this.target = target;
        this.level = level;
    }
}