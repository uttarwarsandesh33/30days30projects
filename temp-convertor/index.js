function calculate() {
  const temperature = document.getElementById("temperature").value;
  const temp = document.getElementById("temp-diff").value;

  if (temp === "cel") {
    const fahrenheit = Math.floor(temperature * 1.8) + 32;
    document.getElementById(
      "result-contain"
    ).innerHTML = `${fahrenheit} ° Fahrenheit`;
  } else {
    const celsius = Math.floor(((temperature - 32) * 5) / 9);
    document.getElementById(
      "result-contain"
    ).innerHTML = `${celsius} ° Celsius`;
  }
}
