function even_or_odd(n) {
  const even = "^d*[02468]$";
  const narr = n.toString().split("");
  return narr[narr.length - 1].match(even) ? "Even" : "Odd";
}
even_or_odd(-43);