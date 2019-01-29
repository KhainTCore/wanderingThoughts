var helpers = require("./helpers");
var fs = require("fs");
var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
    mode: "development",
    
    entry: {
        "server": "./server/app.ts"
    },
    output: {
        path: helpers.root("dist"), // Where the build file is saved
        publicPath: "/", // path relative to the index.html
        filename: "[name].js", // Name matches entry key
    },
    target: "node", // Compile for a NodeJS environment
    resolve: {
        extensions: [".ts", ".js"]    
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, // Handle TypeScript Files
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: { configFileName: helpers.root("tsconfig.server.json")}
                    }
                ],
            }
        ]
    },
    node: {
        __dirname: false // Allow __dirname to function normally instead of "mock" to root after build
    },
    externals: nodeModules // Suppress superfluous warnings/errors - excludes libs from bundle
};
