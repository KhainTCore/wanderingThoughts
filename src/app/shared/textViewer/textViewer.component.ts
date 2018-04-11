import { Component, Output, Input } from "@angular/core";

import { Story } from "../";

@Component({
    selector: "text-viewer",
    styleUrls: ["../../app.component.css", "./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent {

    @Input() text: Story = new Story("");
    @Input() title: string = "Title";
    @Input() style: object;

    constructor() {}
}