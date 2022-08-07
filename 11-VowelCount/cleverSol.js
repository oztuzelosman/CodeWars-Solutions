// expression after regex ||[] is for null

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }