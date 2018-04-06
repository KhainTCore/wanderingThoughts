import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent { 
    private selectedTheme: string = "forest-dark";

    constructor() { }

    setTheme(theme: string): void {
        this.selectedTheme = theme;
    }
}
