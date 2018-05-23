import { Component, OnInit } from "@angular/core";
import { Tab } from "../../shared/tabbedViewer/tabbedViewer.component";
import { FileFetcherService } from "../../core";
import * as Prism from "prismjs";

@Component({
    selector: "code",
    styleUrls: ["../../app.component.css", "./code.component.css"],
    templateUrl: "./code.component.html"
})

export class CodeComponent implements OnInit {

    private files: object = {};
    private fileList: object[] = [];
    private tabs: Tab[] = [
        new Tab("Select Component", "Select a content from the section above to load this section with that code"),
    ];
    private tabBodyStyle: object = {"margin-left": "8px"};
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
                    let syntaxHilitedCode = Prism.highlight(file.content, Prism.languages[file.language]);
                    this.tabs.push(new Tab(file.name, syntaxHilitedCode, `language-${file.language}`, true));
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
