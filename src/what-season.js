const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      const month = date.getMonth();
      if (month < 2 || month > 10) {
        return 'winter'
      } else if (month < 5) {
        return 'spring'
      } else if (month < 8) {
        return 'summer'
      } else if (month < 11) {
        return 'autumn'
      }
    } else {
      throw new Error();
    }
  }

  return 'Unable to determine the time of year!';
};
