const range = (start, stop, step) => {
    return Array.from({ length: stop }, (_, i) => start + i * step);
  };
  
  function SeriesSum(n) {
    const arrofOne = Array.from({ length: n }).fill(1);
    const arrOfRange = range(1, n, 3);
    const arrOfDivide = arrofOne.map(function (x, i) {
      return x / arrOfRange[i];
    });
    const result = arrOfDivide.reduce((prev, curr) => prev + curr, 0);
    return result.toFixed(2);
  }