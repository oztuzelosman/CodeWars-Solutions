const flip = (d, a) => {
  if (d === "L") {
    return a.sort((x, y) => x - y).reverse();
  } else if (d === "R") {
    return a.sort((x, y) => x - y);
  }
};

flip("R", [3, 2, 2, 1]);

//Cleaner Vers.
/* 
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
 */
