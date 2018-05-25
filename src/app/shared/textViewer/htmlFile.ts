export class HtmlFile {
    public body: string;
    public style: object;
    public tableOfContents: any[];
    public title: string;
    public misc: any;

    constructor(body: string, title?: string, tableOfContents?: any[], style?: object, misc?: any) {
        this.body = body;
        this.style = style;
        this.title = title;
        this.tableOfContents = tableOfContents;
        this.misc = misc;
    }
}