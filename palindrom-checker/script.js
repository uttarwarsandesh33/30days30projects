const checkButton = document.getElementById("checkButton");
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const text = inputText.value.toLowerCase();
  const reversedText = text.split("").reverse().join("");

  if (text === reversedText) {
    result.textContent = `${text} is a palindrome!`;
  } else {
    result.textContent = `${text} is not a palindrome.`;
  }
}
