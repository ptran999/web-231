const alphabet = [" A", " B", " C", " D", " E", " F", " G", " H", " I", " J", " K", " L", " M"," N", " O", " P", " Q", " R", " S", " T", " U", " V", " W", " X", " Y", " Z"];
// add click event listener to the button
let onclick = document.getElementById("btnFindLetter")
onclick.addEventListener('click', main)

for (const alpha in alphabet)
  {
    document.getElementById("outputAlphabet").innerHTML = alphabet
  }

function main() {
  let pos = document.getElementById("txtPosition").value
  // create alphabetOutput
  let alphabetOutput = "is at position " + pos + " in the alphabet."
  // create if else statement for specific letter in the alphabets
  if (pos > 26) {
    document.getElementById("result").innerHTML = "There are not " + pos + " letter in the alphabet." 
   } else if (pos == 1) {
    document.getElementById("result").innerHTML = "A " + alphabetOutput
  } else if (pos == 2) {
    document.getElementById("result").innerHTML = "B " + alphabetOutput 
  } else if (pos == 3) {
    document.getElementById("result").innerHTML = "C " + alphabetOutput 
  } else if (pos == 4) {
    document.getElementById("result").innerHTML = "D " + alphabetOutput 
  } else if (pos == 5) {
    document.getElementById("result").innerHTML = "E " + alphabetOutput 
  } else if (pos == 6) {
    document.getElementById("result").innerHTML = "F " + alphabetOutput 
  } else if (pos == 7) {
    document.getElementById("result").innerHTML = "G " + alphabetOutput
  } else if (pos == 8) {
    document.getElementById("result").innerHTML = "H " + alphabetOutput 
  } else if (pos == 9) {
    document.getElementById("result").innerHTML = "I " + alphabetOutput 
  } else if (pos == 10) {
    document.getElementById("result").innerHTML = "J " + alphabetOutput
  } else if (pos == 11) {
    document.getElementById("result").innerHTML = "K " + alphabetOutput
  } else if (pos == 12) {
    document.getElementById("result").innerHTML = "L " + alphabetOutput 
  } else if (pos == 13) {
    document.getElementById("result").innerHTML = "M " + alphabetOutput 
  } else if (pos == 14) {
    document.getElementById("result").innerHTML = "N " + alphabetOutput 
  } else if (pos == 15) {
    document.getElementById("result").innerHTML = "O " + alphabetOutput 
  } else if (pos == 16) {
    document.getElementById("result").innerHTML = "P " + alphabetOutput 
  } else if (pos == 17) {
    document.getElementById("result").innerHTML = "Q " + alphabetOutput
  } else if (pos == 18) {
    document.getElementById("result").innerHTML = "R " + alphabetOutput 
  } else if (pos == 19) {
    document.getElementById("result").innerHTML = "S " + alphabetOutput 
  } else if (pos == 20) {
    document.getElementById("result").innerHTML = "T " + alphabetOutput 
  } else if (pos == 21) {
    document.getElementById("result").innerHTML = "U " + alphabetOutput 
  } else if (pos == 22) {
    document.getElementById("result").innerHTML = "V " + alphabetOutput 
  } else if (pos == 23) {
    document.getElementById("result").innerHTML = "W " + alphabetOutput 
  } else if (pos == 24) {
    document.getElementById("result").innerHTML = "X " + alphabetOutput 
  } else if (pos == 25) {
    document.getElementById("result").innerHTML = "Y " + alphabetOutput 
  } else if (pos == 26) {
    document.getElementById("result").innerHTML = "Z " + alphabetOutput 
  }

}