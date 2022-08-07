function sumPairs(ints, s) {
  console.log(ints, s);
  const secInts = [...ints];
  console.log(secInts);
  var x = 0;
  var y = x + 1;
  var result = [];
  const sum = (x, y) => {
    return ints[x] + secInts[y];
  };

  const save = () => {
    result.push(ints[x], secInts[y]);
    console.log(result);
  };

  for (let i = 1; i < ints.length; i++) {
    const answer = sum(x, y);
    console.log(answer)
    if (answer === s) {
      save();
    } else {
      y++;
    }
  }
}

sumPairs([1, 4, 3, 7, 8, 15], 12);
