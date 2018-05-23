import { Component, Input } from "@angular/core";

@Component({
    selector: "tabbed-viewer",
    styleUrls: ["tabbedViewer.component.css"],
    templateUrl: "tabbedViewer.component.html"
})

export class TabbedViewerComponent {

    @Input() tabBodyStyle: object = {};
    @Input() tabs: Tab[] = [];

    constructor() { }

}

export class Tab {
    public title: string;
    public content: string;
    public code: boolean;
    public css: string;

    constructor(title: string, content: string, css?: string, code?: boolean) {
        this.title = title;
        this.content = content;
        this.css = css || "";
        this.code = code;
    }
}