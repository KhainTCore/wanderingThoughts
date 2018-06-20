const express = require("express");
const fs = require("fs");
import { NextFunction, Request, Response } from "express";

const config = require("../../config/config");

const router = express.Router();

router.use(function fetchWriting(req: Request, res: Response, next: NextFunction) {
    console.log(`Time: ${Date.now()}`); //tslint:disable-line
    next();
});

router.post("/saveToMailingList", (req: Request, res: Response, next: NextFunction) => {
    let email = req.body.email;
    const emailList = `${config.path}/.userInfo/emailList.txt`;
    const errMsg: string = "Sorry, something went wrong on my end and your email was not added.";
    // The return object sent by .send has to be an object. Is this a requirement of Angular, Express, or rxjs?
    // Needs research
    const successMsg = {msg: "Your email, was successfully added to the list. Thank you, I'm glad you like my work enough to actually want more of it."};

    if (email.length > 254 && !/.*@.*/.test(email))
        next(new Error(errMsg));

    fs.readFile(emailList, "utf8", (err, data) => {
        if (err) next(new Error(errMsg));
        data = data || "";

        data += `\n${email}`;

        fs.writeFile(emailList, data, (err) => {
            if (err) next(new Error(errMsg));
            else res.status(200).send(successMsg);
        });
    });
});

// Can't mix import and module.exports
// Express requires module.exports, export will cause a typeError
module.exports = router;