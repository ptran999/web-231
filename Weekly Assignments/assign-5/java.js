// add click event listener to the button
let onclick = document.getElementById("btnDisplaySequence")
onclick.addEventListener('click', main)

function main() {
// get the value from user
  let choice = document.getElementById("sequence").value
// initialize and assign value for variables
  let fibonacciSequenceText = ""
  let num1 = 0
  let num2 = 1
//declare statement when user select fibonacci sequence
  if (choice == 'fibonacci') {
      let next = num1 + num2
//update string to display num1 and num2
      fibonacciSequenceText += num1 + ", " + num2 + ", " + next + ", "
//use do while loop to execute the fibonacci sequence
    do 
      {
        num1 = num2
        num2 = next
        next = num1 + num2
        fibonacciSequenceText +=  next + ", " + " "
      }
    while (num1 < 40) 
//chop a few number at the end of output to match with the answer
      fibonacciSequenceText = fibonacciSequenceText.slice(0,-19)
      document.getElementById("output").innerHTML = fibonacciSequenceText  
// declare statement when user select sequence of odd number      
   } else if (choice == 'even') {
//use while loop to determine the sequence of even number
      while (num1 < 20) {
        if (num1 % 2 == 0) {
          fibonacciSequenceText +=  num1 + ", "
        }
         num1++
      }
          fibonacciSequenceText = fibonacciSequenceText.slice(2,-2)
          document.getElementById("output").innerHTML = fibonacciSequenceText
// declare statement when user select sequence of odd number  
   } else if (choice == 'odd') { 
//use while loop to determine the sequence of odd number
     while (num1 < 20) {
       if (num1 % 2 != 0) {
         fibonacciSequenceText += num1 + ", "
      }
       num1++
   }
      fibonacciSequenceText = fibonacciSequenceText.slice(0,-2)
      document.getElementById("output").innerHTML = fibonacciSequenceText
   } else if (choice == 'sequence'){
    alert ("Invalid selection, please try again!")
  
}

}
    
      
   
    


