function sumOfEvenSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i] ** 2;
    }
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfEvenSquares(arr));
