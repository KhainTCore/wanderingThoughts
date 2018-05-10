const express = require("express");
const fs = require("fs");
import { NextFunction, Request, Response } from "express";

const config = require("../../config/config");

import * as config from "../../config/config";

const router = express.Router();

router.use(function common(req: Request, res: Response, next: NextFunction) {
    console.log(`Time: ${Date.now()}`); //tslint:disable-line
    next();
});

router.get("/version", function (req: Request, res: Response, next: NextFunction) {
    if (config) {
        res.status(200).send(config.version);
    } else {
        res.status(404).send("x.x.x");
    }
});

// Can't mix import and module.exports
// Express requires module.exports, export will cause a typeError
module.exports = router;