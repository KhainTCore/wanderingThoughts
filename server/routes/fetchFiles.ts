const express = require("express");
const fs = require("fs");
const helpers = require("../../config/helpers");
import { NextFunction, Request, Response } from "express";

const router = express.Router();

router.use(function fetchWriting(req: Request, res: Response, next: NextFunction) {
    console.log(`Time: ${Date.now()}`); //tslint:disable-line
    next();
});

router.get("/story", function(req: Request, res: Response, next: NextFunction) {
    if (req.query.storyName) {
        fs.readFile(helpers.root(`stories/${req.query.storyName}.htm`), "utf8", (err, data) => {
            if (err)
                next(new Error("No file by that name was found."));
            
            let html: htmlFile = new htmlFile(data, data, true);
            res.status(200).json({story: html});
        });
    } else {
        next(new Error("No story name was provided."));
    }
});

router.get("/storyList", function(req: Request, res: Response, next: NextFunction) {
    fs.readdir(helpers.root("stories"), "utf8", function(err, files) {
        if (err)
            next(new Error("An error occured tyring to fetch available stories"));
    
        // Remove extensions and send only .htm(l) files
        let tmp: string[];
        let filteredList: string[] = [];
        let ext: RegExp = new RegExp("htm(l{0,1})");
        for (let i = 0; i < files.length; i++) {
            tmp = files[i].split(".");
            if (ext.test(tmp[1]))
                filteredList.push(tmp[0]);
        }
        res.status(200).send(filteredList);
    });
});

router.get("/poem", function(req: Request, res: Response, next: NextFunction) {
    next(new Error("Not Implemented Yet"));
});

router.get("/poemList", function(req: Request, res: Response, next: NextFunction) {
    next(new Error("Not Implemented Yet"));
});

class htmlFile {
    private _body: string;
    private _style: string;

    constructor(body?: string, style?: string, parse?: boolean) {
        if (parse) {
            this.body = this.parseTag(body, "body");
            this.style = this.parseTag(style, "style");
        } else {
            this.body = body;
            this.style = style;
        }
    }

    get body() {
        return this._body;
    }

    get style() {
        return this._style;
    }

    set body(html: string) {
        this._body = html;
    }

    set style(css: string) {
        this._style = css;
    }

    /**
     * Parses out all html except for the content of tag.  
     * Note: There is no validation of html. If the html is invalid, tags are unbalanced
     * it will parse, the results be what they may. 
     * 
     * @param {string} html the html to be parsed
     * @param {string} htmlTag tag name (ex. "body", "style", etc.)
     * @param {boolean} [newline] if the returned value has newline characters or not
     * @returns {string} 
     * @memberof htmlFile
     */
    parseTag(html: string, htmlTag: string, newline?: boolean): string {
        let result = [];
        let found = false;
        let tag = new RegExp(`<${htmlTag}`);
        let tagEnd = new RegExp(`</${htmlTag}>`);
        for (let line of html.split(/\n|\r\n/)) {
            if (tag.test(line) || tagEnd.test(line)) {
                found = !found;
                continue; // Don't grab htmlTag
            }

            if (found)
                result.push(line);

        }

        return result.join(newline ? "\n" : "");
    }
}


// Can't mix import and module.exports
// Express requires module.exports, export will cause a typeError
module.exports = router;