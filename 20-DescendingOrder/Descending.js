function descendingOrder(n) {
    if (n.toString().length == 1) {
      return n;
    } else {
      return parseInt(n.toString().split("").sort((a, b) => {return b - a;}).join(""));
    }
  }