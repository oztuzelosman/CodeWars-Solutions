function openOrSenior(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] >= 55 && data[i][j + 1] > 7) {
        data.splice(data.indexOf(data[i]), 1, "senior");
      } else if (data[i] != "senior") {
        data.splice(data.indexOf(data[i]), 1, "open");
      }
    }
  }
  console.log(data);
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
