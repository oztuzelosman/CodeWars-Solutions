function reverseWords(str) {
  var s = "";
  const sep = str.split(" ");
  for (let i = 0; i < sep.length; i++) {
    const rev = [...sep[i]].reverse().join(" ").replace(/\s+/g, "");
    s += rev + " ";
  }
  console.log(s.trim());
}

reverseWords("konyaakşehirmuğlaadıyaman");

/* function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
} */