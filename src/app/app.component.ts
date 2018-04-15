import { Component, OnInit } from '@angular/core';

import { MenuItem } from './shared/buttonMenu/buttonMenu.component';
import { FileFetcherService } from './core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
    private selectedTheme: string = "forest-dark";

    private themeMenu: MenuItem[] = [
        new MenuItem(1, "Forest", null, {color: "#8BC34A"}, "forest-dark"),
        new MenuItem(1, "Forest", null, {color: "#F1F8E9"}, "forest-light"),
        new MenuItem(1, "Sea", null, {color: "#00BCD4"}, "sea-dark"),
        new MenuItem(1, "Sea", null, {color: "#E0F7FA"}, "sea-light")
    ];
    private themeMenuStyle: object = {'min-width.px': 145};

    constructor(private fileFetcherService: FileFetcherService, private overlayContainer: OverlayContainer) { }

    ngOnInit() {
        this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
    }

    setTheme(theme: string): void {
        this.overlayContainer.getContainerElement().classList.remove(this.selectedTheme);
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.selectedTheme = theme;
    }
}
