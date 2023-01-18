let theSentence = "Hello, Please Tell me the time...";

function cypher(string) {
  let arrayOfSentence = theSentence.split("");
  // array where i can push the ascii values from the loop

  let additionOf15 = [];

  /*   using the last value pushed in the array above, i use this empty array to push in the
  converted value, the letter from the ascii value */

  let theConversion = [];

  for (let i = 0; i < theSentence.length; i++) {
    // retrieve the ascii value of each letter of the sentence
    let theAscii = arrayOfSentence.join("").charCodeAt(i);
    /* this first if statement excludes all symbols and letters with a ascii value lower than what would trigger the new cycle
    so these can have 15 added to them without any trouble */
    if (
      (theSentence[i] >= "A " && theSentence[i] <= "Z" && theAscii < "76") ||
      (theSentence[i] >= "a" && theSentence[i] <= "z" && theAscii < "108")
    ) {
      additionOf15.push(theAscii + 15);
      // this converts each value back from the ascii value to a recognisable letter
      let converted = String.fromCharCode(additionOf15[i]);
      theConversion.push(converted);
    } else if (
      (theSentence[i] >= "A" && theSentence[i] <= "Z" && theAscii >= "76") ||
      (theSentence[i] >= "a" && theSentence[i] <= "z" && theAscii >= "108")
    ) {
      /*    if the ascii value is more than or equal to 76 or 108 then it will need to start the cycle again.
       as it progresses 15 ahead, it ends up as a symbol, not a letter, which i don't want
      so by taking 11 away it ends up where it would be if it went up 15 and after z the cycle went through to A/a again.  */
      additionOf15.push(theAscii - 11);
      converted = String.fromCharCode(additionOf15[i]);
      theConversion.push(converted);
    } else if (
      /*    to make sure that the other values are the symbols in the table i included another else/if rather than just an else
      these numbers are the range of ascii numbers assigned to the symbols in the table */
      (theAscii >= "32" && theAscii <= "64") ||
      (theAscii >= "123" && theAscii <= "127")
    ) {
      additionOf15.push(theAscii);
      converted = String.fromCharCode(additionOf15[i]);
      theConversion.push(converted);
    }
  }

  return console.log(theConversion.join(""));
}

cypher(theSentence);
