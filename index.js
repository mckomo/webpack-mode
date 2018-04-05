const argv = require('yargs').argv;

function webpackMode() {
  const mode = argv.mode || 'production';

  return {
    isProduction: mode === 'production',
    isDevelopment: mode === 'development',
    toString() {
      return mode;
    },
    [Symbol.toPrimitive]() {
      return mode;
    }
  }
}

module.exports = webpackMode();
