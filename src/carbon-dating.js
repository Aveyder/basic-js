const isString = require("./utils");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivityStr) {
  if (isString(sampleActivityStr)) {
    try {
      const sampleActivity = parseFloat(sampleActivityStr);

      if (!Number.isNaN(sampleActivity) && sampleActivity > 0 && sampleActivity <= 15) {
        return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693/HALF_LIFE_PERIOD));
      }
    } catch (e) {}
  }
  return false;
};
