var path = require("path");

var TerserPlugin = require("terser-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = (function ()
{
    var outputDirectoryName = "dist";

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
        optimization : {
            minimizer : [new TerserPlugin()]
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
