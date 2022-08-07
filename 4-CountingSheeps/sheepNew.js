var countSheep = function (num) {
  var s = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      let string = `${i} sheep...`;
      s += string + "";
    }
    console.log(s);
  } else {
    console.log("''")
  }
};

countSheep(85);


