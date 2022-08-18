/* const fibonacci = (num) => {
  const fibarr = (num, arr = [1, 1]) => {
    if (num <= 2) return arr;
    const [prevToLast, last] = arr.slice(-2);
    return fibarr(num - 1, [...arr, prevToLast + last]);
  };

  const fibnum = fibarr(num);
  console.log(fibnum);
  return fibnum[fibnum.length-1] ;
};

console.log(fibonacci(4));
 */

const fibonacci = (n) => {
  for (let i = 0; i < n; n--) {
  
    var arr = [1, 1];
    const [prevToLast, last] = arr.slice(-2);
    const sum = prevToLast + last;
    /* console.log(sum) */
    const sumArr = [...arr, arr.push(sum)];
     console.log(sumArr)
     return fibonacci(n - 1)
  }
 return n
};

console.log(fibonacci(7));
