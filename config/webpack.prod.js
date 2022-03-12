const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

/** @type {import("webpack").Configuration} */
const prodConfig = {
    mode: "production"
}

module.exports = merge(common, prodConfig)