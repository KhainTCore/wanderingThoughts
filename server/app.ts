import helpers from "../config/helpers";
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import * as fetchWriting from "./routes/fetchWriting";

const app = express();

app.use(morgan("dev")); // Log HTTP Req and Res
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Set Express Global Variables
app.set("port", process.env.PORT || 8082);
app.set("app", helpers.root("dist"));
app.set("env", "development");

// Serve up webpacked content as "root" - achieved by .static
app.use(express.static(app.get("app")));

// Serve initial page
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html", {"root": app.get("app")});
});

// Routes
app.use("/fetchWriting", fetchWriting);

// Dev error handler
if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({message: err.message, error: err});
    });
}

// Catch 404 errors and forward them to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new Error("HTTP Response 404: Not Found"));
});

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