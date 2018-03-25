export class Story {
    private _body;
    private _style;
    private _tableOfContents;
    private _title;

    constructor(body: string, title?: string, tableOfContents?: any[], style?: string) {
        this._body = body;
        this._style = style;
        this._title = title;
        this._tableOfContents = tableOfContents;
     }

     get body() {
         return this._body;
     }

     get style() {
         return this._style;
     }

     get tableOfContents() {
         return this._tableOfContents;
     }

     get title() {
         return this._title;
     }
}