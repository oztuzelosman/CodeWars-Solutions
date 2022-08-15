function positiveSum(arr) {
    return arr.filter(e => e > 0).reduce((prev, curr) => prev + curr, 0)
  }