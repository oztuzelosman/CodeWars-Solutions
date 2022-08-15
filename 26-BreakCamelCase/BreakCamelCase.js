function solution(str) {
  
    // Function that find positions of upper cases 
        function getPositions(str) {
        var positions = [];
        for (var i = 0; i < str.length; i++) {
          if (str[i].match(/[A-Z]/) != null) {
            positions.push(i);
          }
        }
        return positions;
      }
    
    // Function that splits string from positions of Upper Cases
      function split() {
        const posofUpper = getPositions(str);
    
        let splitted = str.slice(0, posofUpper[0])+ " "
    
        for (var i = 0; i < posofUpper.length; i++) {
          var slices = str.slice(posofUpper[i], posofUpper[i + 1]);
          splitted +=slices + " ";
        }
        return splitted;
      }
    
      return split(str).trim();
    }