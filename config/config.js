const helpers = require("./helpers");

module.exports = function(env) {
    let config = {};
    if (env === "production") {
        config.path = "/home/bitnami/stack/resources/files";
        config.port = 80; // TODO: Change to 443 at some point to support https
    } else {
        config.path = helpers.root("files");
        config.port = 8082;
    }

    return config;
}