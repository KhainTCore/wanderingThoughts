class MarkdownFile {
    public body: string[];
    public style: object;
    public title: string;

    private markdownStyles: object = {
        "#": "h1",
        "##": "h2",
        "###": "h3",
    };

    constructor(body?: string[], style?: object, toHtml?: string) {
        if (toHtml) 
            this.toHtml(toHtml, style);
        else {
            this.body = body;
            this.style = style;
        }
    }

    /**
     * 
     * 
     * @param {string} body markdown to be parsed
     * @param {object} [style] css styles to be applied
     * @returns {string} 
     * @memberof htmlFile
     */
    toHtml(body: string, style?: object): void {
        let html = [];
        let lines = body.split(/\n\n|\r\n\r\n/);
        for (let line of lines) {
            let markdown: string[] = line.match(/^#{1,3}/);
            if (markdown){
                html.push(`<${this.markdownStyles[markdown[0]]}>${line.split(/^#{1,3}/)[1]}</${this.markdownStyles[markdown[0]]}>`);
            }
            else
                html.push(`<p>${line}</p>`);
        }

        this.body = html;
    }
}

module.exports = MarkdownFile;