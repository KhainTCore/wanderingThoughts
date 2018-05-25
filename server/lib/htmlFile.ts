class HtmlFile {
    public body: string;
    public meta: string;
    public style: string;
    public title: string;

    constructor(body?: string, meta?: string, style?: string, parse?: boolean) {
        if (parse) {
            this.body = this.parseTag(body, "body", "MsoTitle");
            this.style = this.parseTag(style, "style");
        } else {
            this.body = body;
            this.style = style;
        }
        this.meta = meta;
    }

    /**
     * Parses out all html except for the content of tag.  
     * Note: There is no validation of html. If the html is invalid, tags are unbalanced
     * it will parse, the results be what they may. 
     * 
     * @param {string} html the html to be parsed
     * @param {string} htmlTag tag name (ex. "body", "style", etc.)
     * @param {string} [title] css class to identify element and parse it out and store it
     * @param {boolean} [newline] if the returned value has newline characters or not
     * @returns {string} 
     * @memberof htmlFile
     */
    parseTag(html: string, htmlTag: string, title?: string, newline?: boolean): string {
        let result = [];
        let found = false;
        let tag = new RegExp(`<${htmlTag}`);
        let tagEnd = new RegExp(`</${htmlTag}>`);
        for (let line of html.split(/\n|\r\n/)) {
            if (tag.test(line) || tagEnd.test(line)) {
                found = !found;
                // continue; // Don't grab htmlTag
            } else if (found) {
                if (title && line.search(title) > -1) {
                    this.title = line.split(/>|<\//)[1];
                    title = undefined; // turn of search for title
                } else
                    result.push(line);
            }

        }

        return result.join(newline ? "\n" : "");
    }
}

module.exports = HtmlFile;