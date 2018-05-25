const express = require("express");
const fs = require("fs");
import { NextFunction, Request, Response } from "express";

const config = require("../../config/config");
const helpers = require("../../config/helpers");
// import helpers from "../../config/helpers";
import * as config from "../../config/config";
const HtmlFile = require("../lib/htmlFile");
const MarkdownFile = require("../lib/markdownFile");

const router = express.Router();

router.use(function fetchWriting(req: Request, res: Response, next: NextFunction) {
    console.log(`Time: ${Date.now()}`); //tslint:disable-line
    next();
});

router.get("/albums", function(req: Request, res: Response, next: NextFunction) {
    let path = `${config.path}/photography`;
    let albums = [];
    if (fs.existsSync(path)) {
        fs.readdir(path, (err, dirs) => {
            for (let dir of dirs) {
                let files =  fs.readdirSync(`${path}/${dir}`);
                let photos = [];
                for (let file of files) {
                    photos.push(`/api/photography/${dir}/${file}`);
                }
                let res = {};
                res[dir] = photos;
                albums.push(res);
            }

            res.status(200).send({albums});
        });
    } else next(new Error("No photography albums found"));
});

router.get("/code", function(req: Request, res: Response, next: NextFunction) {
    let component = req.query.component;
    let codeFiles = [];
    let path = helpers.root(`src/app/shared/${component}`);

    fs.readdir(path, (err, files) => {
        if (err) next(new Error(`Could not find the files for the ${component} component.`));
        for (let name of files) {
            let content = fs.readFileSync(`${path}/${name}`, "utf8");
            let type = name.split(".");
            type = type[type.length - 1];
            if (content.length > 0)
                codeFiles.push({name: name, type: type.toUpperCase(), language: getLanguage(type), content: `\n${content}`});
        }

        res.status(200).send(codeFiles);
    });
});

router.get("/codeList", function(req: Request, res: Response, next: NextFunction) {
    let path = helpers.root("src/app/shared");
    let codeList = [];

    fs.readdir(path, (err, components) => {
        if (err) next(new Error("Could not find any Components"));
        for (let component of components) {
            if (fs.statSync(`${path}/${component}`).isDirectory())
                codeList.push(component);
        }

        res.status(200).send(codeList);
    });
});

router.get("/file", function(req: Request, res: Response, next: NextFunction) {
    let typeDir: string = getType(req.query.type);
    // TODO: Handle error in helpers.root it doesn't seem to handle non-existing files well
    let path = `${config.path}/${typeDir}/${req.query.title}.html`;
    if (fs.existsSync(path)) {
        let meta = fs.readFileSync(`${config.path}/${typeDir}/${req.query.title}.md`, "utf8");
        fs.readFile(`${config.path}/${typeDir}/${req.query.title}.html`, "utf8", (err, data) => {
            if (err)
                next(new Error("No file by that name was found."));
            
            let html: HtmlFile = new HtmlFile(data, meta, null, false);
            res.status(200).json({file: html});
        });
    } else {
        next(new Error(`File "${req.query.title}" does not exist.`));
    }
});

router.get("/fileList", function(req: Request, res: Response, next: NextFunction) {
    let typeDir: string = getType(req.query.type);
    fs.readdir(`${config.path}/${typeDir}`, "utf8", function(err, files) {
        if (err)
            next(new Error("An error occurred when fetching the file list."));
    
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

router.get("/staticFiles", function(req: Request, res: Response, next: NextFunction) {
    let typeDir: string = getType(req.query.type);
    let page: string = getPage(req.query.page);

    if (page) {
        fs.readFile(`${config.path}/${typeDir}/${page}.md`, "utf8", function(err, data) {
            if (err)
                next(new Error("Some information on the page is missing. Please contact System Admin."));
            let markdown: MarkdownFile = new MarkdownFile(null, null, data);
            res.status(200).json({file: markdown});
        });
    } else
        next(new Error("No information was found for that page. Please contact the System Admin."));
});

function getPage(page): string {
    switch (page) {
        case "h":
        case "home":
            return "homePage";
    }

    return null;
}

function getType(type): string {
    switch (type) {
        case "dp":
        case "dailyPractice":
            return "dailyPractice";
        case "e":
        case "essay":
            return "essays";
        case "p":
        case "poem":
        case "poetry":
            return "poems";
        case "static":
        case "st":
            return "staticInfo";
        default:
            return "stories";
    }
}

function getLanguage(type): string {
    switch(type) {
        case "css":
        case "html":
            return type;
        case "md":
            return "markdown";
        case "js":
            return "javascript";
        case "ts":
            return "typescript";
    }
    return "";
}

// Can't mix import and module.exports
// Express requires module.exports, export will cause a typeError
module.exports = router;