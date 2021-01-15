const argv = require("yargs").argv;

function webpackMode() {
  let mode = {
    production: "production",
    development: "development",
  }[process.env.NODE_ENV || argv.mode];

  mode = mode || "production";

  return {
    isProduction: mode === "production",
    isDevelopment: mode === "development",
    toString() {
      return mode;
    },
    [Symbol.toPrimitive]() {
      return mode;
    },
  };
}

module.exports = webpackMode();
