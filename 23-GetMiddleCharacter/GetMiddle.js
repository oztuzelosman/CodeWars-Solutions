function getMiddle(s) {
    let indexA;
    let indexB;
    if (s.length % 2 === 1) {
      indexA = s.length / 2;
      indexB = indexA + 1;
      return s.substring(indexA, indexB);
    } else {
      indexA = s.length / 2 - 1;
      indexB = indexA + 2;
      return s.substring(indexA, indexB);
    }
  }