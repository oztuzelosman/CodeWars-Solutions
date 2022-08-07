function warnTheSheep(queue) {
  const reverseArr = queue.reverse();
  let sheepInDanger = reverseArr.indexOf("wolf") - 1;
  if (reverseArr.indexOf("wolf") === 0) {
    console.log("Pls go away and stop eating my sheep");
  } else {
    console.log(
      `Oi! Sheep number ${sheepInDanger+1}! You are about to be eaten by a wolf!`
    );
  }
}

warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep"]);
