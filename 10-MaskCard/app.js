// return masked string
function maskify(cc) {
  const creditCard = [...cc];
  const cut = creditCard.splice(-4).join("");
  var s = " ";
  for (let i = 0; i < creditCard.length; i++) {
    var char = creditCard[i];
    var change = char.replace(char, "*");
    var hashTags = [...change];
    s += hashTags;
  }
  return s.concat(cut);
}

maskify("benbirbabanneyim");
