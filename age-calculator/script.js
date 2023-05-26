const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const now = new Date();

  const { years, months, days } = calculateDifference(now, dob);

  document.getElementById("yearsResult").textContent = years;
  document.getElementById("monthsResult").textContent = months;
  document.getElementById("daysResult").textContent = days;
}

function calculateDifference(date1, date2) {
  const yearsDiff = date1.getFullYear() - date2.getFullYear();
  const monthsDiff = yearsDiff * 12 + (date1.getMonth() - date2.getMonth());
  const daysDiff = date1.getDate() - date2.getDate();

  return {
    years: yearsDiff,
    months: monthsDiff,
    days: daysDiff,
  };
}
