const { default: countBy } = require("./CountingCharacters");
import someCharacters from "./fromCodeToCharacters";

function textScript(text) {
  let scripts = countBy(text, (char) => {
    let script = someCharacters(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ n }) => n.name != "none");

  //find the total
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) {
    return "no script found";
  } else {
    return scripts
      .map(({ name, count }) => {
        return `${Math.round((count * 100) / total)} % ${name}`;
      })
      .join(" , ");
  }
}

console.log(textScript('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
