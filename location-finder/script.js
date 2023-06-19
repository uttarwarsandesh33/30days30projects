// script.js
const getLocationBtn = document.getElementById("getLocationBtn");
const locationInfo = document.getElementById("locationInfo");
const cityNameElement = document.getElementById("cityName");
const countryNameElement = document.getElementById("countryName");

getLocationBtn.addEventListener("click", getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      const location = data.display_name;
      cityNameElement.textContent = `Area: ${location}`;
    })
    .catch((error) => {
      console.log("Error:", error);
      cityNameElement.textContent =
        "An error occurred while fetching the location.";
    })
    .finally(() => {
      locationInfo.classList.remove("hide");
    });
}
