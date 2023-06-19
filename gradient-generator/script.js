function generateRandomGradient() {
  const colors = [getRandomColor(), getRandomColor()];

  const direction = getRandomDirection();

  const gradient = `linear-gradient(${direction}, ${colors[0]}, ${colors[1]})`;

  document.body.style.background = gradient;
  document.getElementById("gradientCss").innerHTML = `background: ${gradient};`;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function getRandomDirection() {
  const directions = [
    "to right",
    "to left",
    "to bottom",
    "to top",
    "to bottom right",
    "to bottom left",
    "to top right",
    "to top left",
    "linear-gradient",
  ];

  return directions[Math.floor(Math.random() * directions.length)];
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateRandomGradient);

// Generate initial random gradient
generateRandomGradient();
