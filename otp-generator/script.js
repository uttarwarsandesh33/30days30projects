// Get the generate button, OTP container, and length input elements
const generateBtn = document.getElementById("generateBtn");
const otpContainer = document.getElementById("otpContainer");
const lengthInput = document.getElementById("length");

// Add a click event listener to the generate button
generateBtn.addEventListener("click", generateOTP);

// Function to generate the OTP
function generateOTP() {
  // Clear the OTP container before generating a new OTP
  otpContainer.innerHTML = "";

  // Retrieve the length entered by the user
  const length = lengthInput.value;

  // Validate the length: It should be between 1 and 10 (inclusive)
  if (length < 1 || length > 10) {
    return;
  }

  // Generate OTP digits based on the entered length
  for (let i = 0; i < length; i++) {
    const otpBox = document.createElement("div");
    otpBox.classList.add("otp-box");

    // Set the text content of the OTP box to a random digit
    otpBox.textContent = getRandomDigit();

    // Append the OTP box to the OTP container
    otpContainer.appendChild(otpBox);
  }
}

// Function to generate a random digit between 0 and 9
function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}
