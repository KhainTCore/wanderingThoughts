import { Component, Output, OnInit, Input } from "@angular/core";

@Component({
    selector: "text-viewer",
    styleUrls: ["./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent implements OnInit {

    private parsedText: string[] = [];
    
    @Input() text: string = "Annie are you ok?\n Are you ok?\n Are you ok, Annie?";

    constructor() {

    }

    ngOnInit() {
        this.parsedText = this.parseText();
    }

    parseText(): string[] {
        let chunks: string[] = this.text.split(/\n|\r\n/);
        return chunks;
    }

}