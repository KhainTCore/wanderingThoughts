import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "table-of-contents",
    styleUrls: ["./tableOfContents.component.css"],
    templateUrl: "./tableOfContents.component.html"
})

export class TableOfContentsComponent { 
    @Input() border: boolean = true;
    @Input() borderColour: string = "#294F6D";
    @Input() content: Content[] = [];
    @Input() disableLinks: boolean = false;
    @Input() indentSize: number = 5;
    @Input() textColour: string = "white";
    @Input() title: string;

    @Output() onSelected = new EventEmitter<Content>();

    constructor() { }

    /**
     * Emits the selected content to the wired receiver
     * 
     * @param {Content} content selected value 
     * @memberof TableOfContentsComponent
     */
    select(content: Content) {
        this.onSelected.emit(content);
    }
}
/**
 * A pseudo-interface that creates an exposed API for a Link's strucutre in the TableOfContents 
 * Component
 * 
 * @export
 * @class Content
 */
export class Content {
    public level: number;
    public target: string;
    public title: string;

    /**
     * Creates an instance of Content.
     * 
     * @param {string} title Display value for the Link, default: null
     * @param {number} [level] Indentation/nesting level, default: 0
     * @param {string} [target] Points to location on the DOM, default: null
     * @memberof Content
     */
    constructor(title: string, level?: number, target?: string) {
        this.level = level || 0;
        this.target = target;
        this.title = title;
    }
}