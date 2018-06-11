/**
 * Contains the content of a File and relevant data for it to be easily and styled
 * in HTML
 *
 * @class HtmlDisplayFile
 */
class HtmlDisplayFile {
    public body: string;
    public ext: string;
    public meta: string;
    public styles: string;
    public title: string;

    /**
     *Creates an instance of HtmlDisplayFile.

     * @param {string} body HTML compliant string (with or w/o elements/tags)
     * @param {string} [meta] HTML compliant string of metaData associated with body
     * @param {string} [styles] CSS styles or classes associated with body/meta
     * @param {string} [title] Title of the file/body
     * @param {string} [ext] the file extension if from a file
     * @memberof HtmlDisplayFile
     */
    constructor(body: string, meta?: string, styles?: string, title?: string, ext?: string) {
        this.body = body;
        this.ext = ext;
        this.meta = meta;
        this.styles = styles;
        this.title = title;
     }

     /**
      * Read through a string and parse it out, converting it into a simple HTML compliant string
      *
      * @param {string} content to be parsed
      * @param {RegExp} [title] title is in content and should be parsed out
      * @param {boolean} [newline] respect newline characters
      * @returns {string}
      * @memberof HtmlDisplayFile
      */
     parseBody(content: string, title?: RegExp, newline?: boolean): string {
         let result = [];
         let lines = content.split(/\n|\r\n/);

         for (let line of lines) {
            if (line.match(title)) {}
            else result.push(line);                             
         }

         return result.join("\n");
     }

     /**
      * Read through a string and parse it out, converting it into a simple HTML compliant string, and
      * save the result to the body of this HtmlDisplayFile instance
      *
      * @param {string} content to be parsed
      * @param {RegExp} [title] title is in content and should be parsed out
      * @param {boolean} [newline] respect newline characters
      * @returns {string}
      * @memberof HtmlDisplayFile
      */
     parseBodyAndSave(title?: RegExp, newline?: boolean): void {
        this.body = this.parseBody(this.body, title, newline);
     }
}

module.exports = HtmlDisplayFile;
