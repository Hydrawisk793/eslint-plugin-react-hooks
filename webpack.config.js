const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (function ()
{
    const outputDirectoryName = "dist";

    return {
        entry : path.resolve(__dirname, "src", "index.js"),
        target : "web",
        output : {
            filename : "index.js",
            path : path.resolve(__dirname, outputDirectoryName),
            library : "eslintPluginReactHooksCustom",
            libraryTarget : "umd",
            globalObject : "this"
        },
        plugins : [],
        module : {
            rules: [
                {
                    test : /\.tsx?$/,
                    exclude : ["/node_modules/"],
                    loaders : ["babel-loader"],
                },
                {
                    test : /\.jsx?$/,
                    exclude : ["/node_modules/"],
                    loaders : ["babel-loader"],
                },
            ],
        },
        externals : [
            nodeExternals()
        ],
        resolve : {
            modules : ["node_modules"],
            extensions : [".ts", ".tsx", ".js", ".jsx", ".json"]
        }
    };
})();
