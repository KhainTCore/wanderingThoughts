import { Component, Output, OnInit, Input } from "@angular/core";

@Component({
    selector: "text-viewer",
    styleUrls: ["./textViewer.component.css"],
    templateUrl: "./textViewer.component.html"
})

export class TextViewerComponent implements OnInit {

    @Input() text: string = "SmoothCriminal<br>Annie are you ok?<br>Are you ok?<br>Are you ok, Annie?";
    @Input() title: string = "Story Title";

    constructor() {

    }

    ngOnInit() {

    }
}