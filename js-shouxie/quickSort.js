/**
 * @param {number[]} arr 
 * @returns {number[]}
 * */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr[0];
  let left = arr.slice(1).filter(item => item <= mid);
  let right = arr.slice(1).filter(item => item > mid);
  return [...quickSort(left), mid, ...quickSort(right)]
}
let array = [-1, 0, 2, -3, 5, 100, 101, 99]
console.log(quickSort(array))