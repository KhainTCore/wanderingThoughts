import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable()
export class IconRegistryService {

    private assets: string = "../../assets";
    private icons: Icon[] = [
        {name: "paintBrush", url: "brush.svg"},
        {name: "colorLens", url: "colorLens.svg"},
        {name: "alignLeft", url: "alignLeft.svg"},
        {name: "alignRight", url: "alignRight.svg"},
        {name: "alignCenter", url: "alignCenter.svg"},
        {name: "textSize", url: "textSize.svg"},
        {name: "arrowForward", url: "arrowForward.svg"},
        {name: "arrowBack", url: "arrowBack.svg"},
        {name: "gitHub", url: "markGithub.svg"}
    ];

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        for (let icon of this.icons) {
            this.matIconRegistry.addSvgIcon(icon.name, 
                this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.assets}/${icon.url}`));
        }
    }
}

export class Icon {
    public name: string;
    public url: string;
}