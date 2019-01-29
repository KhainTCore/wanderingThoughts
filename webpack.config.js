let backEnd = require("./config/webpack.server.js");
let node_env = process.env.NODE_ENV.trim();

let frontEnd;
if (node_env === "dev" || node_env === "development") {
    frontEnd = require("./config/webpack.dev.js");
} else {
    frontEnd = require("./config/webpack.prod.js");
}

module.exports = [ frontEnd, backEnd ];
