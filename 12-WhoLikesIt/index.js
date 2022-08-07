/* function likes(names) {
  if (names === [ ]) {
    return "no one likes this";
  } else {
    return `${names[0]},${names[1]} likes this`;
  }
}

likes([]);
 */

function likes(names) {
  const others = names.length - 2;
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${others} others like this`;
  }
}

likes(["Peter", "Laex", "Osman", "Hans", "Mehmet"]);
