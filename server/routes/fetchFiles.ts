const express = require("express");
const fs = require("fs");
const helpers = require("../../config/helpers");
import { NextFunction, Request, Response } from "express";

const HtmlFile = require("../lib/htmlFile");

const router = express.Router();

router.use(function fetchWriting(req: Request, res: Response, next: NextFunction) {
    console.log(`Time: ${Date.now()}`); //tslint:disable-line
    next();
});

router.get("/file", function(req: Request, res: Response, next: NextFunction) {
    let typeDir: string = getType(req.query.type);
    
    if (req.query.title) {
        fs.readFile(helpers.root(`files/${typeDir}/${req.query.title}.htm`), "utf8", (err, data) => {
            if (err)
                next(new Error("No file by that name was found."));
            
            let html: HtmlFile = new HtmlFile(data, data, true);
            res.status(200).json({file: html});
        });
    } else {
        next(new Error("No file name was provided."));
    }
});

router.get("/fileList", function(req: Request, res: Response, next: NextFunction) {
    let typeDir: string = getType(req.query.type);

    fs.readdir(helpers.root(`files/${typeDir}`), "utf8", function(err, files) {
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

function getType(type) {
    switch (type) {
        case "p":
        case "poem":
        case "poetry":
            return "poetry";
        default:
            return "stories";
    }
}

// Can't mix import and module.exports
// Express requires module.exports, export will cause a typeError
module.exports = router;