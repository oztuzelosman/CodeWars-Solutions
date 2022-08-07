var till1 = [];
var till2 = [];
var checkout = {};

function queueTime(customers, n) {
  if (n <= 1) {
    return customers.reduce((a, b) => a + b, 0);
  } else if (n == 2) {
    for (let i = 0; i < customers.length; i++) {
      if ((i + 2) % 2 == 0) {
        till1.push(customers[i]);
       
      } else {
        till2.push(customers[i]);
       
      }
    }
    console.log(till1)
    console.log(till2)
    //compares the total time for checkout tills
    let timeTill1 = till1.reduce((a, b) => a + b, 0);
    let timeTill2 = till2.reduce((a, b) => a + b, 0);
    if (timeTill1 > timeTill2) {
      console.log(timeTill1, `till1 wins`);
    } else {
      console.log(timeTill2, `till2 wins`);
    }
  }

  /*   //generate arrays auto
  for (let j = 0; j < n; j++) {
    console.log();
  }
 */

  // main object

  // add 100 sub-object values
  for (i = 1; i < n + 1; ++i) {
    checkout["till-" + i] =
      /*property name or key of choice*/
      [customers[i]];
  }

  console.log(typeof checkout);
  console.log(checkout);
}

queueTime([3,2,10], 2);
