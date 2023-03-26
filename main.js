function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6, 8];
const result1 = findCommonElements(arr1, arr2);
console.log(result1);


const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const result2 = findCommonElements(arr3, arr4);
console.log(result2)