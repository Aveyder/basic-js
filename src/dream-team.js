const isString = require('./utils');

if(typeof(String.prototype.trim) === "undefined")
{
  String.prototype.trim = function()
  {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const letters = [];
    for(const member of members) {
      if (isString(member)) {
        const normalizedName = member.trim();
        letters.push(normalizedName[0].toUpperCase());
      }
    }
    if (letters.length !== 0) {
      letters.sort();
      return letters.join('');
    }
  }

  return false;
};
