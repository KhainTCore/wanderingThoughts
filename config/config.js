const helpers = require("./helpers");
const env = process.env.NODE_ENV;

let config = {};

if (env === "production") {
    config = {
        env: "production",
        path: "/home/ubuntu/files",
        port: 80 // TODO: Change to 443 at some point to support https
    }
} else { // development/default
    config = { 
        env: "development",
        path: helpers.root("files"),
        port: 8082
    };
}

config.version = "1.1";

module.exports = config;