const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    if (mode === undefined) {
      this.mode = true;
    } else {
      this.mode = mode;
    }
  }
  encrypt(str, key) {
    return this.doStuff(str, key, (strCharCode, keyCharCode) => (strCharCode + keyCharCode - 2 * 65) % 26 + 65);
  }
  decrypt(str, key) {
    return this.doStuff(str, key, (strCharCode, keyCharCode) => (strCharCode + 26 - keyCharCode) % 26 + 65);
  }
  doStuff(str, key, func) {
    str = str.toUpperCase();
    key = key.toUpperCase();

    const result = [];
    let keyCursor = 0;
    for(let i = 0; i < str.length; i++) {
      const strCharCode = str.charCodeAt(i);

      if (strCharCode >= 65 && strCharCode <= 90) {
        const keyCharCode = key.charCodeAt(keyCursor % key.length);
        const decryptedCharCode = func(strCharCode, keyCharCode);
        result.push(String.fromCharCode(decryptedCharCode));
        keyCursor++;
      } else {
        result.push(String.fromCharCode(strCharCode));
      }
    }

    return (this.mode ? result : result.reverse()).join('');
  }
}

module.exports = VigenereCipheringMachine;
