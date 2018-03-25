import { Component, Output, Input } from "@angular/core";

import { Story } from "../";

@Component({
    selector: "text-viewer",
    styleUrls: ["./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent {

    @Input() text: Story = new Story("");
    @Input() title: string = "Title";

    constructor() {}
}