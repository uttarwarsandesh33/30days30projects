// Function to update the clock display
function updateClock() {
  // Get the current date and time
  const date = new Date();

  // Get the hours, minutes, and seconds from the date object
  // Convert hours to 12-hour format and pad with leading zeros if necessary
  let hours = (date.getHours() % 12 || 12).toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  // Determine whether it is AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Update the display with the new time values
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
}

// Update the clock immediately and then every second
setInterval(updateClock, 1000);
