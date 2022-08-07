function highAndLow(str) {
  let arr1 = [];
  let result = "";
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr1.push(parseInt(arr[i]));
  }
  const sortedArr = arr1.sort((a, b) => a - b);
  const hiLo = new Array(sortedArr[sortedArr.length - 1], sortedArr[0]);
  result += hiLo[0];
  console.log(result.concat(" " + hiLo[1]));
}

highAndLow("1 2 3 4 5 42 -98 555");

/* 
console.log(arr);

console.log(arrNum.length); */

/* let text = "";
for(let member in list) {
  text += list[member];
} */
