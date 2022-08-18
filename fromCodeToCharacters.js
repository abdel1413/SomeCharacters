const SCRIPTS = require("../SCRIPTS");

/**
 *
 * @param {*} code
 * this function uses method "some" to output the
 *  corresponding names from the array
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

console.log(someCharacters(121));
//=> {name: 'Latin', ranges: Array(31), direction: 'ltr',... ]
