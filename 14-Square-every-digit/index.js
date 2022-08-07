function squareDigits(num) {
  var digits = num.toString().split("");
  console.log(digits)
  var nums = "";
  for (let i = 0; i < digits.length; i++) {
    const int = digits[i];
    var result = parseInt(int * int);
    nums += result;
  }
  console.log(nums);
}

squareDigits(2358);
