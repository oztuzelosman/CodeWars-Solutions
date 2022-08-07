var result = "";

function accum(s) {
  const arrOfChar = s.split("");
  arrOfChar.map((val, e, arr) => {
    arr[e] = Array(e+1).fill(val).join('');
  });
  console.log(arrOfChar);
}

accum("ZpglnRxqenU");

/*    //result+= e
      let arbitrary = Array.from(individual, (x) => console.log(x+1));
      console.log(arbitrary); */

/* 
     
      const individual = s.split("");
      for (let i = 0; i < individual.length; i++) {
        for (let j = 0; j < individual[i]; j++) {
          console.log(individual);
        }
      } */
/* 
      for (let i = 0; i < arrOfChar.length; i++) {
          console.log(arrOfChar[i])
        let t = arrOfChar.indexOf(arrOfChar[i]);
        console.log(t);
           while (t>0) {
          console.log(arrOfChar[i])
          result += arrOfChar[i]
        }
      }
 */
