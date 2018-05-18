import { Component, Input, OnInit } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
    selector: "card-carousel",
    styleUrls: ["./cardCarousel.component.css"],
    templateUrl: "./cardCarousel.component.html",
    animations: [
        trigger("viewState", [
            state("unviewed", style({
                display: "none",
                transform: "scale(.1, 1)"
            })),
            state("viewing", style({
                "margin-left": "8px",
                "margin-right": "8px"
                // transform: "scale(2, .5)"
            })),
            state("viewed", style({
                display: "none",
                transform: "scale(.1, 1)"
            })),
            transition("unviewed => viewing", animate("700ms ease-in")),
            transition("viewing => viewed", animate("700ms ease-out")),
            transition("viewed => viewing", animate("700ms ease-in")),
            transition("viewing => unviewed", animate("700ms ease-out"))
        ])
    ]
})

export class CardCarouselComponent implements OnInit {

    @Input() albumHeight: number = 300;
    @Input() albumWidth: number = 500;
    @Input() items: Item[] = [
        new Item(null), new Item(null), new Item(null)
    ];
    @Input() navButtonIcons: {left: string, right: string};
    @Input() navButtonStyle: string = "overlay-sides";
    @Input() title: string = "Album";
    @Input() zoomIcon: object | string;

    private states: string[] = ["unviewed", "viewing", "viewed"];
    private imgWidthLimit: number = this.albumWidth - 80;
    private zoomed: Item;

    constructor() { }

    ngOnInit() {
        this.albumHeight = this.albumHeight || 300;
        this.albumWidth = this.albumWidth || 500;
        }

    toggleState(left: boolean) {
        let currentItem: number = this.items.findIndex((item) => {
            return item.state === this.states[1];
        });
        let isBeginning: boolean = this.items.findIndex((item) => {
            return item.state === this.states[0];
        }) > -1;
        let nextItem: number;

        if (currentItem <= -1) {
            if (isBeginning && left)
                this.items[0].state = this.states[1];
            else if (!isBeginning && !left)
                this.items[this.items.length - 1].state = this.states[1];
        } else {
            this.items[currentItem].state = left ? this.states[2] : this.states[0];
            nextItem = left ? ++currentItem : --currentItem;
            if (nextItem < this.items.length && nextItem > -1)
                this.items[nextItem].state = this.states[1];
        }
    }

    zoomIn(img: Item) {
        this.zoomed = img;
    }

    zoomOut() {
        if (this.zoomed) {
            this.zoomed = null;
        }
    }
}


export class Item {
    public content: string;
    public image: string;
    public state: string;

    constructor(image: string, content?: string, state?: string) {
        this.content = content;
        this.image = image;
        this.state = state || "unviewed";
    }
}
