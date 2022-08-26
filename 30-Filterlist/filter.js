function filter_list(l) {
  return l.filter((num) =>{ if(typeof(num)==='number'){ return num>=0}})  
}


console.log(filter_list([1,2,'aasf','1','123',123]))
