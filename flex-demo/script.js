var justifyContentSelect = document.getElementById("justify-content");
var alignItemsSelect = document.getElementById("align-items");
var flexDirectionSelect = document.getElementById("flex-direction");
var flexContainer = document.querySelector(".flex-container");
var flexItems = document.querySelectorAll(".flex-item");

justifyContentSelect.addEventListener("change", function() {
  var value = this.value;
  flexContainer.style.justifyContent = value;
});

alignItemsSelect.addEventListener("change", function() {
  var value = this.value;
  flexContainer.style.alignItems = value;
});

flexDirectionSelect.addEventListener("change", function() {
  var value = this.value;
  flexContainer.style.flexDirection = value;
});

flexItems.forEach(function(item) {
  item.addEventListener("transitionend", function() {
    this.style.transition = "";
  });
});

flexItems.forEach(function(item) {
    item.addEventListener("click", function() {
      this.style.transition = "all 0.3s ease";
      this.style.transform = "rotate(360deg)";
    });
  });
