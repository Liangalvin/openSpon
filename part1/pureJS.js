function stringParser(input){
  this.string = input
}

stringParser.prototype.countChar = function(char){
  // var reg = new RegExp(/a-zA-Z/, "i");
  // var regex = reg.ignoreCase;
  var ary = [];
  for(var i = 0; i < this.string.length; i++){
    if(this.string.charAt(i) === char){
      ary.push(char);
      //console.log(char);
    }
  }
  //return ary
  //console.log(ary.length + " times");
  return ary.length;
}

stringParser.prototype.occurances = function(){
  var ary = this.string.toLowerCase().split(" ").join().split(""); //string into lowercase and first split remove space and rejoin w/o space
  var lettersObj = {}; //an object of the string's letters
  ary.forEach(function(letter){
    if(lettersObj[letter]){
      lettersObj[letter] += 1; //if letter exists
      //console.log(lettersObj[letter]);
    }
    else {
      lettersObj[letter] = 1; //if it dosent exists then make it
    }
  });
  //console.log(lettersObj);

    //console.log(obj)
    var objKeys = Object.keys(lettersObj); //the keys
    //console.log(objKeys);
    var objValues = Object.keys(lettersObj).map(function(objKey){ //the values
      return lettersObj[objKey];
    });
    //console.log(objValues);

    var maxArry = []; //empty for now, will hold the highest occuring characters
    var minArry = []; //empty for now, will hold the lowest occuring characters
    var maxOccur = Math.max.apply(null, objValues); //the highest frequency characters
    var minOccur = Math.min.apply(null, objValues); //lower frequency characters
    //console.log(maxOccur);
    //console.log(minOccur);

    objKeys.forEach(function(key){ //go through the array of key's IF it's value === the highest
      //console.log(obj[key]);
      if(lettersObj[key] === maxOccur){
        //console.log("The character " + key + " occurs " + obj[key] + " times");
        maxArry.push(key); // << push into max
      }
      else if(lettersObj[key] === minOccur){
        //console.log("The character " + key + " occurs " + obj[key] + " times");
        minArry.push(key); // << pushed into lowest
      }
    });
    //console.log(minArry.join("").replace(",", ""));
    //console.log(maxArry.join("").replace(",", " "));

    // console.log("The most recurring characters are " + maxArry.join("").replace(",", "") + " shown " + maxOccur + " times, " +
    //  " and least occuring are " + minArry.join(" ").replace(",", "") + " shown " + minOccur + " times.");

     var str = "The most recurring characters are " + maxArry.join("").replace(",", "") + " shown " + maxOccur + " times, " +
     " and least occuring are " + minArry.join(" ").replace(",", "") + " shown " + minOccur + " times.";
     return str;
  //}

}

var string1 = new stringParser("Hello world hi lol");
//console.log(string1);
//console.log(string1.countChar("l"));
//console.log(string1.occurances());

module.exports = stringParser;
