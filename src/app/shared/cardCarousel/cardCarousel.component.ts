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
            })),
            state("viewing", style({
                "justify-content": "center",
                "margin-left": "8px",
                "margin-right": "8px",
            })),
            state("viewed", style({
                display: "none",
            })),
            // transition("unviewed => viewing", animate("1000ms ease-in", style({
            //     "justify-content": "flex-end",
            //     transform: "translatex(-50%) scale(1, 1)"                              
            // }))),
            transition("viewing => unviewed", animate("1000ms ease-out", style({
                transform: "translate(50%) scale(0, 1)"
            }))),
            // transition("viewed => viewing", animate("1000ms ease-in", style({
            //     "justify-content": "flex-start",
            //     transform: "translate(50%) scale(1, 1)"                
            // }))),
            transition("viewing => viewed", animate("1000ms ease-out", style({
                transform: "translate(-50%) scale(0, 1)"
            })))
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
    private numberOfViewed: number = 0;
    private previousItemIndex: number;
    private zoomed: Item;

    constructor() { }

    ngOnInit() {
        this.albumHeight = this.albumHeight || 300;
        this.albumWidth = this.albumWidth || 500;

        for (let item of this.items) {
            if (item.state === this.states[1] || item.state === this.states[2])
                this.numberOfViewed++;
        }
    }

    /**
     * An exercise in fuck you. To ocmplicated to actually maintain
     * 
     * @param {boolean} left 
     * @memberof CardCarouselComponent
     * @private
     */    
    private toggleStateDepricated(left: boolean) {
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

    /**
     * Switches the state of the currently viewed item with the next or previous item
     * within range.
     * 
     * @param {boolean} left from viewed to viewing (i.e. "going back" or "left arrow") 
     * @memberof CardCarouselComponent
     */
    toggleState(left: boolean) {
        let currentItem: number = this.items.findIndex((item) => {
            return item.state === this.states[1];
        });
        let moved: boolean = false;
        const isBeginning: boolean = currentItem === 0;
        const isLast: boolean = currentItem === this.items.length - 1;
        
        if (!isBeginning && !isLast) {
            this.items[currentItem].state = left ? this.states[0] : this.states[2];
            setTimeout(() => {
                this.items[left ? --currentItem : ++currentItem].state = this.states[1]; }, 1050);            
            moved = true;
        } else if (isBeginning && !left) {
            this.items[currentItem].state = this.states[2];
            setTimeout(() => {
                this.items[++currentItem].state = this.states[1];            
            }, 1050);
                moved = true;
        } else if (isLast && left) {
            this.items[currentItem].state = this.states[0];
            setTimeout(() => {
                this.items[++currentItem].state = this.states[1];            
            }, 1050);
            moved = true;
        }

        if (moved)
            this.numberOfViewed += left ? -1 : 1;        
    }

    /**
     * Mark an image as being in the "zoomed" state
     * 
     * @param {Item} img to be set in the "zoomed" state
     * @memberof CardCarouselComponent
     */
    zoomIn(img: Item) {
        this.zoomed = img;
    }

    /**
     * Clear out the "zoomed" state
     * 
     * @memberof CardCarouselComponent
     */
    zoomOut() {
        if (this.zoomed) {
            this.zoomed.active = false;
            this.zoomed = null;
        }
    }
}


export class Item {
    public active: boolean;
    public content: string;
    public image: string;
    public state: string;

    constructor(image: string, content?: string, state?: string) {
        this.content = content;
        this.image = image;
        this.state = state || "unviewed";
    }
}
