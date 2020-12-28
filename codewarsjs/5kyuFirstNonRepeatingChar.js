
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


//my answer: took 12mins

function firstNonRepeatingLetter(s) {
    // Add your code here
    
    let lowercase = s.toLowerCase();
    let obj = {};
    let result = '';
    for(let i in lowercase){
      if(obj[lowercase[i]]){
        obj[lowercase[i]] = {dup : obj[lowercase[i]].dup + 1};
      } else {
        obj[lowercase[i]] = {dup : 1, index: Number(i)};
      }
    }
    for(key in obj){
     
      if(obj[key].dup === 1){
        console.log(obj[key])
        result = s[obj[key].index]
        break
      }
    }
      
  
    return result
  }


//this one was hard hence the answer counts uppercase and lowercase letters same.

//community answer

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

  // could be good but using regexp in code interview would be inappropriate.