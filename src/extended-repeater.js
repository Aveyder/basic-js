const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const additions = [];
  for(let i = 0; i < additionRepeatTimes; i++) {
    additions.push(String(addition));
  }

  const finalAddition = additions.join(additionSeparator);

  const strs = [];
  for(let i = 0; i < repeatTimes; i++) {
    strs.push(String(str) + finalAddition);
  }

  return strs.join(separator);
}
