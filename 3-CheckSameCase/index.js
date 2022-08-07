function sameCase(a, b) {
  if (
    a.toUpperCase() != a.toLowerCase() &&
    b.toUpperCase() != b.toLowerCase()
  ) {
    /* checks if values are letters */
    if (
      (a.toUpperCase() === a && b.toUpperCase() === b) ||
      (a.toLowerCase() === a && b.toLowerCase() === b)
    ) {
      console.log("same case");
    } else {
      console.log("not same case");
    }
  } else {
    console.log("one of these is number");
  }
}

sameCase("a", 2);

/* 
typeof a === "string" && typeof b === "string" */

/* describe("Solution", function () {
  doTest("C", "B", 1);
  doTest("b", "a", 1);
  doTest("d", "d", 1);
  doTest("A", "s", 0);
  doTest("c", "B", 0);
  doTest("b", "Z", 0);
  doTest("\t", "Z", -1);
  doTest("H", ":", -1);
});
 */