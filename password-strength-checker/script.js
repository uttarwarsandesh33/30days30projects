const passwordInput = document.getElementById("passwordInput");
const strengthResult = document.getElementById("strengthResult");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);

  updateResultUI(strength);
}

function calculatePasswordStrength(password) {
  const length = password.length;
  let strength = 0;

  if (length >= 8 && length <= 10) {
    strength = 1;
  } else if (length >= 11 && length <= 12) {
    strength = 2;
  } else if (length >= 13 && length <= 14) {
    strength = 3;
  } else if (length >= 15) {
    strength = 4;
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    strength += 1;
  }

  if (/\d/.test(password)) {
    strength += 1;
  }

  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    strength += 1;
  }

  return strength;
}

function updateResultUI(strength) {
  let resultText = "";
  let resultClass = "";

  switch (strength) {
    case 1:
    case 0:
      resultText = "Very Weak";
      resultClass = "very-weak";
      break;
    case 2:
      resultText = "Weak";
      resultClass = "weak";
      break;
    case 3:
      resultText = "Medium";
      resultClass = "medium";
      break;
    case 4:
      resultText = "Strong";
      resultClass = "strong";
      break;
    default:
      resultText = "Very Strong";
      resultClass = "very-strong";
      break;
  }

  strengthResult.textContent = resultText;
  strengthResult.className = resultClass;
}
