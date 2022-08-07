const quarterOf = (month) => {
  const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const cond = integers[month - 1] == month;
  const indexFinder = integers.indexOf(month);
  if (cond) {
    if (indexFinder >= 0 && indexFinder <= 2) {
      return 1;
    } else if (indexFinder >= 3 && indexFinder <= 5) {
      return 2;
    } else if (indexFinder >= 6 && indexFinder <= 8) {
      return 3;
    } else {
      return 4;
    }
  } else {
    return "";
  }
};

quarterOf(12);
