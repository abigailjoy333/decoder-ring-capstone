// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    //library of symbols
    const library1 = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ]
    const library2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]
    console.log(library1.length)
    console.log(library2.length)
    
    //encoding message
    if (encode) {
      let result = ""
      let message = input.toLowerCase()
      for (let text = 0; text < message.length; text++) {
        let letter = message[text]
        console.log(`letter is ${letter}`)
        if (letter.match(/[a-z]/)) {
          if (letter === "i" || letter === "j") {
            result += "42"
          } else {
            let num = library2.indexOf(letter)
            result += library1[num]
          }
        } else {
          result += letter
        }
      }
      return result
    //decoding the message
    } else {
      let messageArray = input.split(" ") //split message into array/word
      console.log(messageArray)
      let lettersArray = []
      for (word of messageArray) {
        lettersArray.push(word.match(/.{2}/g))
        //new array where each index is an array
        //of number pairs representing each letter.
        //each index of lettersArray is one word of the message
      }
      let isEven = messageArray.every((word) => word.length % 2 === 0)
      //check if every word is made of even number of characters
      if (!isEven) {
        return false
      }
      let finalArray = []
      for (word of lettersArray) {
        let tempArray = []
        for (letter of word) {
          if (letter === "42") {
            tempArray.push("(i/j)")
          } else {
            let num = library1.indexOf(letter)
            let something = library2[num]
            tempArray.push(something)
          }
        }
        finalArray.push(tempArray)
      }
      let decodedArray = []
      for (word of finalArray) {
        let val = word.join("")
        decodedArray.push(val)
      }
      console.log(decodedArray)
      let final = decodedArray.join(" ")
      return final
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
