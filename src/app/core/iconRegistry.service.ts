import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable()
export class IconRegistryService {

    private icons: Icon[] = [
        {name: "paintBrush", url: "../../assets/brush.svg"},
        {name: "colorLens", url: "../../assets/colorLens.svg"},
        {name: "alignLeft", url: "../../assets/alignLeft.svg"},
        {name: "alignRight", url: "../../assets/alignRight.svg"},
        {name: "alignCenter", url: "../../assets/alignCenter.svg"}
    ];

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        for (let icon of this.icons) {
            this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
        }
    }
}

export class Icon {
    public name: string;
    public url: string;
}