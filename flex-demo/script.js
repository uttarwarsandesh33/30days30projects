var justifyContentSelect = document.getElementById("justify-content");
var alignItemsSelect = document.getElementById("align-items");
var flexDirectionSelect = document.getElementById("flex-direction");
var flexContainer = document.querySelector(".flex-container");
var flexItems = document.querySelectorAll(".flex-item");

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
