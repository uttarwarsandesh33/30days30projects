const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const flexDirectionSelect = document.getElementById("flex-direction");
const flexContainer = document.querySelector(".flex-container");
const flexItems = document.querySelectorAll(".flex-item");

justifyContentSelect.addEventListener("change", function() {
  flexContainer.style.justifyContent = this.value;
});

alignItemsSelect.addEventListener("change", function() {
  flexContainer.style.alignItems = this.value;
});

flexDirectionSelect.addEventListener("change", function() {
  flexContainer.style.flexDirection = this.value;
});

flexItems.forEach(function(item) {
  item.addEventListener("transitionend", function() {
    this.style.transition = "all 0.3s easein";
  });
});

flexItems.forEach(function(item) {
    item.addEventListener("click", function() {
      this.style.transition = "all 0.3s ease";
      this.style.transform = "rotate(360deg)";
    });
  });
