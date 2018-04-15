import { Component, Output, Input } from "@angular/core";

import { HtmlFile } from "../";

@Component({
    selector: "text-viewer",
    styleUrls: ["../../app.component.css", "./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent {

    @Input() noTitle: boolean = false;
    @Input() text: HtmlFile = new HtmlFile("");
    @Input() title: string = "Title";
    @Input() style: object;

    constructor() {}
}