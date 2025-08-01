const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordOutput = document.getElementById("password");
const copyBtn = document.getElementById("copy");

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  const hasUpper = uppercase.checked;
  const hasLower = lowercase.checked;
  const hasNumber = numbers.checked;
  const hasSymbol = symbols.checked;

  if (!(hasUpper || hasLower || hasNumber || hasSymbol)) {
    passwordOutput.value = "Please select at least one option.";
    return;
  }

  const password = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
  passwordOutput.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordOutput.value) {
    navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 1500);
  }
});

function generatePassword(length, upper, lower, number, symbol) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?~";

  let allChars = "";
  if (upper) allChars += upperChars;
  if (lower) allChars += lowerChars;
  if (number) allChars += numberChars;
  if (symbol) allChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
}
