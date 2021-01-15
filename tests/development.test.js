const { expect } = require("chai");
const webpackMode = require("../index");

expect(webpackMode.isProduction).to.equal(false);
expect(webpackMode.isDevelopment).to.equal(true);

expect(webpackMode == "development").to.equal(true);

expect(`${webpackMode}`).to.equal("development");
