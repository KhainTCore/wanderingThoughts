import { Component, OnInit } from '@angular/core';

import { MenuItem } from './shared/buttonMenu/buttonMenu.component';
import { FileFetcherService, IconRegistryService, CommonService } from './core/';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material';
import { EmailListDialog } from './shared/emailListDialog/emailListDialog.component';
import { UserInfoService } from './core/userInfo.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
    private selectedTheme: string = "forest-dark";

    private themeMenu: MenuItem[] = [
        new MenuItem(1, "Forest", "paintBrush", {color: "#8BC34A"}, null, "forest-dark"),
        new MenuItem(1, "Forest", "paintBrush", {color: "#F1F8E9"}, null, "forest-light"),
        new MenuItem(1, "Sea", "paintBrush", {color: "#00BCD4"}, null, "sea-dark"),
        new MenuItem(1, "Sea", "paintBrush", {color: "#E0F7FA"}, null, "sea-light")
    ];
    private themeMenuStyle: object = {'min-width.px': 145};
    private themeTitle: object = {icon: "colorLens", css: "primary-icon"};

    constructor(private fileFetcherService: FileFetcherService, private overlayContainer: OverlayContainer,
        private iconRegistryService: IconRegistryService, private commonService: CommonService,
        private userInfoService: UserInfoService, private dialog: MatDialog) { }

    ngOnInit() {
        this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
    }

    joinMailingList() {
        this.dialog.open(EmailListDialog, {
            width: '500px',
        }).afterClosed().subscribe((email) => {
            if (email)
                this.userInfoService.saveToMailingList(email);
        });
    }

    setTheme(theme: string): void {
        this.overlayContainer.getContainerElement().classList.remove(this.selectedTheme);
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.selectedTheme = theme;
    }
}
