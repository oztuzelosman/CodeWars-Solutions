/**
  Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
  write a function elevator accepting 3 arguments (in order):

  left - The current floor of the left elevator
  right - The current floor of the right elevator
  call - The called floor, i.e. the floor you want to reach
  It should return the name of the elevator closest to the called floor ("left"/"right").

  In the case where both elevators are equally distant from the called floor,
  choose the elevator to the right.

  You can assume that the inputs will always be valid integers between 0-2.
*/

/* This is my solution */


function elevator(left, right, call) {
  left = Math.floor(Math.random() * 3);
  right = Math.floor(Math.random() * 3);
  call = Math.floor(Math.random() * 3);

  const diff1 = Math.abs(call - left);
  const diff2 = Math.abs(call - right);
  if (diff1 > diff2) {
    console.log(diff2);
    console.log("Right lift is closest to call")
    return right
  } else if (diff1===diff2){
    console.log(diff2)
    console.log("Right lift is closest to call")
    return right
  } else {
    console.log(diff1)
    console.log("Left lift is closest to call")
    return left
  }
}

elevator();

/* This is the one line solution via ternary operator */

/* const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right' */
