//generate number between 1 and 10
const rnd = Math.floor((Math.random() * 10) + 1)

function main() {
  // get the value from input user
  let myNumber = document.getElementById("txtMyNumber").value
  // declare statement based on user input
  if (myNumber == rnd) {
    document.getElementById("output").innerHTML = "Congratulation! You picked the correct number!" 
  } else if (myNumber < rnd ) {
    //Build string statement for greater number
    let textGreater = "The number is greater than " + myNumber
    document.getElementById("output").innerHTML = textGreater 
  }
  else if (myNumber > rnd) {
    //Build string statement for less number
    let textLess = "The number is less than " + myNumber
    document.getElementById("output").innerHTML =  textLess
  }

 }

 

