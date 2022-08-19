let horse_emoji = "🐴👟";

console.log(horse_emoji.length);
// => 4  Bcz It is using two unit code

console.log(horse_emoji[0]); // => 0  invalid character

console.log(horse_emoji.charPointAt(0));
//=> 55357 (gives a code unit not the full char
// (the half - character)

console.log(horse_emoji.codePointAt(0));
//=>128052 (Actual code for horse emoji)
//give the full character

//NOTE for/of came into existence when people were
//facing UTF-16 unit problems as it doesn't print
//characters but rather the code. So with for/of
//we can get the char
for (let c of horse_emoji) {
  console.log(c);
}

//🐴
// 👟
