export class HtmlFile {
    public body;
    public style;
    public tableOfContents;
    public title;

    constructor(body: string, title?: string, tableOfContents?: any[], style?: string) {
        this.body = body;
        this.style = style;
        this.title = title;
        this.tableOfContents = tableOfContents;
     }
}