
const getCount = (s) => {
  const onebyone = s
    .split("")
    .join(" ")
    .match(/[aeiou]+/g);

  if (onebyone === null) {
    console.log(0);
  } else {
    console.log(onebyone.length);
  }
};

getCount(" b c d");
