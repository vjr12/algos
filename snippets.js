// Top 5  scores of students array, LC 1086
//{"s1": ["1,2,3,5"]}
function topFive(scores) {
  const scoreMap = {},
    result = [];
  for ([key, value] of scores) {
    if (!scoreMap[key]) {
      scoreMap[key] = [value];
    } else {
      scoreMap[key].push(value);
    }
  }
  Object.entries(scoreMap).forEach((item) => {
    let [key, value] = item;
    value = value.sort((a, b) => b - a);
    let sum = 0,
      avg = 0;
    for (let i = 0; i < value.length; i++) {
      sum = sum + value[i];
    }
    avg = Math.floor(sum / 5);
    result.push([key, avg]);
  });
  return result;
}
console.log(
  topFive([
    [1, 91],
    [1, 92],
    [1, 93],
    [1, 94],
    [1, 95],
    [2, 100],
    [2, 76],
    [2, 97],
    [2, 56],
    [2, 67],
  ])
);

// Remove adjacent duplicates with 'k' length
// [[a: 1], [b:2]]
function removeDupsEqualsk(str, k) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (!stack.length || stack[stack.length - 1][0] !== curr) {
      stack.push([curr, 1]);
    } else {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) stack.pop();
    }
  }
  let finalStr = "";
  for (let [key, value] of stack) {
     finalStr = finalStr + key.repeat(value)
  }
  return finalStr;
}
console.log(removeDupsEqualsk("deeedbbcccbdaa", 3));
