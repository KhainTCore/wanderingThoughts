import { Component, Input } from "@angular/core";

@Component({
    selector: "card-viewer",
    styleUrls: ["./cardViewer.component.css"],
    templateUrl: "./cardViewer.component.html"
})

export class CardViewerComponent {
    @Input() cards: Card[] = [new Card()];
    @Input() numberOfCols: number = 1;
    @Input() numberOfRows: number = 1;

    constructor() { }

}

export class Card {
    public colSpan: number;
    public content: string;
    public rowSpan: number;
    public subTitle: string;
    public title: string;
}