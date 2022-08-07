/* This the solution that I like the Most
 */
var countSheep = function (num) {
  const arr = Array.from(Array(num).keys());
  const arrAddedOne = arr.map((e) => e + 1);
  const countingArr = arrAddedOne.map((e) => e + " sheep...");
  const iterator = countingArr.values();
  if (num > 0) {
    for (const murmur of iterator) {
      console.log(murmur);
    }
  } else {
    return "";
  }
};

countSheep(42);
