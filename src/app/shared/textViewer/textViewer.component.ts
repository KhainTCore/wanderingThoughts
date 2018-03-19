import { Component, Output, OnInit, Input } from "@angular/core";

@Component({
    selector: "text-viewer",
    styleUrls: ["./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent implements OnInit {

    @Input() text: {_body: string, _style: string} = {_body: "", _style: ""};
    @Input() title: string = "Story Title";

    constructor() {

    }

    ngOnInit() {

    }
}