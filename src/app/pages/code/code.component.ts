import { Component, OnInit } from "@angular/core";
import { Tab } from "../../shared/tabbedViewer/tabbedViewer.component";
import { FileFetcherService } from "../../core";

@Component({
    selector: "code",
    styleUrls: ["../../app.component.css", "./code.component.css"],
    templateUrl: "./code.component.html"
})

export class CodeComponent implements OnInit {

    private files: object = {};
    private fileList: object[] = [];
    private tabs: Tab[] = [
        {title: "HTML", content: "This section will be dedicated to the componentss HTML"},
        {title: "TS", content: "This section will be dedicated to the component's TypeScript"},
        {title: "CSS", content: "This section will be dedicated to the component's CSS"},
        {title: "SPECS", content: "This section will be dedicated to the test specs of the component"}
    ];
    private activeToggle: {name: string, selected: boolean};

    constructor(private fileFetcherService: FileFetcherService) { }
    
    ngOnInit() {
        this.fileFetcherService.fetchCodeList().subscribe((fileList) => {
            let res = [];
            for (let file of fileList) {
                res.push({name: file, selected: false});
            }
            this.fileList = res;
        });
    }

    toggleComponent(component) {
        if (!component.selected) {
            this.fileFetcherService.fetchCode(component.name).subscribe((files) => {
                this.tabs = [];
                for (let file of files) {
                    this.tabs.push({title: file.type, content: file.content});
                }
            });


        } else {
            this.tabs = [];
        }

        if (this.activeToggle && this.activeToggle !== component)
            this.activeToggle.selected = false;
        this.activeToggle = component;
        this.activeToggle.selected = !component.selected;
    }
}
