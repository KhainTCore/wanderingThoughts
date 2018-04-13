import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
    selector: "button-menu",
    styleUrls: ["./buttonMenu.component.css"],
    templateUrl: "./buttonMenu.component.html"
})

export class ButtonMenuComponent implements OnInit {

    @Input() buttonStyle: string = "b";
    @Input() color: string = "";
    @Input() menuItems: MenuItem[] = [];
    @Input() title: string = "Menu";

    @Output() onSelected = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    select(item: MenuItem) {
        if (item.clickValue)
            this.onSelected.emit(item.clickValue);
        else
            this.onSelected.emit(item);
    }
}

export class MenuItem {
    public colspan: number;
    public clickValue: string;
    public displayValue: string;
    public icon: string;
    public style: object;

    constructor(colspan: number, displayValue?: string, icon?: string, style?: object, clickValue?: string) {
        this.colspan = colspan;
        this.clickValue = clickValue;
        this.displayValue = displayValue;
        this.icon = icon;
        this.style = style;
    }
}