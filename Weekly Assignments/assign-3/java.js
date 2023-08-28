// add click event listener to the button
onclick.addEventListener('click', temperatureConverter )

function temperatureConverter() {
// Capture the inputted value from txtFahrenheit, assign it to a variable named fahrenheit
  let fahrenheit = document.getElementById("txtFahrenheit").value
// Convert to Celcius and set the fixed two decimal
  let output = ((parseFloat( fahrenheit) - 32 ) / 1.8).toFixed(2)
// Output the result
  document.getElementById("outputCelcius").innerHTML = output

} ; 
