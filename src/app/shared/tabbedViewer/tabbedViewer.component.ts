import { Component, Input } from "@angular/core";

@Component({
    selector: "tabbed-viewer",
    styleUrls: ["tabbedViewer.component.css"],
    templateUrl: "tabbedViewer.component.html"
})

export class TabbedViewerComponent {

    @Input() tabs: Tab[] = [];

    constructor() { }

}

export class Tab {
    public title: string;
    public content: string;
}