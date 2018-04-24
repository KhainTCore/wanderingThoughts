import helpers from "../config/helpers";
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import * as fetchFiles from "./routes/fetchFiles";

const config = require("../../config/config")(process.env.NODE_ENV);

const app = express();

app.use(morgan("dev")); // Log HTTP Req and Res
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Set Express Global Variables
app.set("port", config.port || 8082);
app.set("app", helpers.root("dist"));
app.set("env", process.env.NODE_ENV || "development");
// Serve up webpacked content as "root" - achieved by .static
app.use(express.static(app.get("app")));

// Routes
app.use("/api/fetchFiles", fetchFiles);

// Keep the front-end router from killing itself
app.get('*', (req, res) => {
    res.sendFile(app.get("app") + "/index.html");
});

// Dev error handler
if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({message: err.message, error: err});
    });
} 

// Production Error Handler - no stacktrace provided to user
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({error: {}, message: err.message});
});


app.listen(app.get("port"), () => {
    if (app.get("env") === "development") {
        console.log(`=> App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`); // tslint:disable-line
        console.log("   Press CTRL-C to stop\n"); // tslint:disable-line
    }
});

export default app;