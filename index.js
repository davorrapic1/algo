// find 2 numbers in arrays  where their sum is closes to target
const findClosest = (arr, arr2, target, difference) => {
  let closest = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let diff = Math.abs(arr[i] + arr2[j] - target);
      if (diff <= difference) {
        closest.push({
          proximity: diff,
          val: `${arr[i]}+${arr2[j]}`,
        });
      }
    }
  }
  console.log(closest);
  return closest;
};

const arr = [1, 7, 4, 11];
const arr2 = [5, 3, 6, 9];
const target = 11;
const biggestDiff = 1;

findClosest(arr, arr2, target, biggestDiff);
