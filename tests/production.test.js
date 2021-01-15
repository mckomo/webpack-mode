const { expect } = require("chai");
const webpackMode = require("../index");

expect(webpackMode.isProduction).to.equal(true);
expect(webpackMode.isDevelopment).to.equal(false);

expect(webpackMode == "production").to.equal(true);

expect(`${webpackMode}`).to.equal("production");
