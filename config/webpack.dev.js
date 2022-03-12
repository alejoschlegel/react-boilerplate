const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

/** @type {import("webpack").Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        static: {
            directory: "../dist",
        },
        port: 3000,
        open: true
    }
}

module.exports = merge(common, devConfig)