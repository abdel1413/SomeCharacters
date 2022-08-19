const SCRIPTS = require("../SCRIPTS");

/**
 *
 * @param {*} code
 * this function uses method "some"
 * It takes a test function and return true for any of the
 * element in the array
 *
 *
 */
function someCharacters(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

export default someCharacters;
console.log(someCharacters(121));
//=> {name: 'Latin', ranges: Array(31), direction: 'ltr',... ]
