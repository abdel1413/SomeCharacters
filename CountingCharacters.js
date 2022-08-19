/**
 *
 * @param {*} collection
 * @param {*} groupName
 * @returns
 * findIndex() return the first found value that is true
 * or -1  otherwise contrary to indexOf()
 */

function countBy(collection, groupName) {
  let counts = [];
  for (let item of collection) {
    let name = groupName(item); //fcn taking each element of collection
    let found = counts.findIndex((c) => c.name === name); //check if any element matches name
    if (found === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[found].count++; //go to count and increment by 1
    }
  }
  return counts;
}
export default countBy;

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// {name: false, count: 2}
// {name: true, count: 3}
