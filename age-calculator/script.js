/**
 * Age Calculator
 *
 * This code calculates the age difference between a given date of birth (dob) and the current date.
 * It displays the result in years, months, and days.
 */

// Get the calculate button element from the DOM
const calculateBtn = document.getElementById("calculateBtn");

// Add event listener to the calculate button
calculateBtn.addEventListener("click", calculateAge);

/**
 * calculateAge
 *
 * Event handler function for the calculate button click event.
 * Retrieves the date of birth input value, calculates the age difference, and updates the result.
 */
function calculateAge() {
  // Get the date of birth input element from the DOM
  const dobInput = document.getElementById("dob").value;

  // Create Date objects for the date of birth and the current date
  const dob = new Date(dobInput);
  const now = new Date();

  // Calculate the age difference in years, months, and days using the calculateDifference function
  const { years, months, days } = calculateDifference(now, dob);

  // Update the result elements in the DOM with the calculated age difference
  document.getElementById("yearsResult").textContent = years;
  document.getElementById("monthsResult").textContent = months;
  document.getElementById("daysResult").textContent = days;
}

/**
 * calculateDifference
 *
 * Calculates the age difference between two given dates.
 *
 * @param {Date} date1 - The first date
 * @param {Date} date2 - The second date
 * @returns {Object} - The age difference in years, months, and days
 */
function calculateDifference(date1, date2) {
  // Calculate the difference in years
  const yearsDiff = date1.getFullYear() - date2.getFullYear();

  // Calculate the difference in months
  const monthsDiff = yearsDiff * 12 + (date1.getMonth() - date2.getMonth());

  // Calculate the difference in days
  const daysDiff = date1.getDate() - date2.getDate();

  // Return the age difference object
  return {
    years: yearsDiff,
    months: monthsDiff,
    days: daysDiff,
  };
}
