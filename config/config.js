const helpers = require("./helpers");

module.exports = function(env) {
    let config = {};
    console.log("Hello: " + env);
    if (env === "production") {
        config.path = "/home/bitnami/stack/var/data";
        config.port = 443;
    } else {
        config.path = helpers.root("files");
        config.port = 8082;
    }

    return config;
}