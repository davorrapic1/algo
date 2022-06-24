function printClosest(array1, array2, x) {
  let diff = Infinity;
  let res_l, res_r;

  let left = 0;
  let right = array2.length - 1;

  result = [];

  while (left < array1.length && right >= 0) {
    if (Math.abs(array1[left] + array2[right] - x) < diff) {
      res_l = left;
      res_r = right;
      diff = Math.abs(array1[left] + array2[right] - x);

      result = [`${array1[left]}+${array2[right]}`];
    } else if (Math.abs(array1[left] + array2[right] - x) === diff) {
      result.push(`${array1[left]}+${array2[right]}`);
    }

    if (array1[left] + array2[right] > x) right--;
    else left++;
  }

  return result;
}

// driver code

let ar1 = [1, 7, 4, 11];
let ar2 = [5, 3, 6, 9];
let x = 11;
console.log(printClosest(ar1, ar2, x));
