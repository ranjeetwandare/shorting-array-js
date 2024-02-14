let arr1 = [1, 3, 4, 5, 5],
  arr2 = [2, 4, 4, 6, 8];
let arr3 = [...arr1, ...arr2];

arr3.sort((a, b) => a - b);
arr3 = [...new Set(arr3)];

console.log(arr3);
