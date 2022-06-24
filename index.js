
const findClosest = (arr, arr2, target) => {
  let closest = [];
  let closestDiff = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let diff = Math.abs(arr[i] + arr2[j] - target);
      if (diff === closestDiff) {
        closest.push(`${arr[i]}+${arr2[j]}`);
      } else if (diff < closestDiff) {
        closest = [`${arr[i]}+${arr2[j]}`];
        closestDiff = diff;
      }
    }
  }
  
  return closest;
};

const array = [1, 7, 4, 11];
const array2 = [5, 3, 6, 9];
const findClosestTo = 11;
console.log(findClosest(array, array2, findClosestTo));
