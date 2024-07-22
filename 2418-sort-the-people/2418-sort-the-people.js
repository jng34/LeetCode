/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const people = [];
  for (let i = 0; i < names.length; i++) {
    const n = names[i];
    const h = heights[i];
    people.push([n, h]);
  }
  
  people.sort((a,b) => b[1]-a[1]);

  const ans = [];
  for (let p of people) {
    const name = p[0];
    ans.push(name);
  }
  
  return ans;
};