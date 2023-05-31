const calculateButton = document.getElementById("calculateButton");
const inputNumber = document.getElementById("inputNumber");
const result = document.getElementById("result");

calculateButton.addEventListener("click", calculateFactorial);

function calculateFactorial() {
  const number = parseInt(inputNumber.value);

  if (isNaN(number)) {
    result.textContent = "Invalid input. Please enter a number.";
    return;
  }

  if (number < 0) {
    result.textContent = "Factorial is not defined for negative numbers.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  result.textContent = `Factorial of ${number} is ${factorial}.`;
}
