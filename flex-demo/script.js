

document.getElementById("justify-content").addEventListener("change", function() {
    const value = this.value;
    document.querySelector(".flex-container").style.justifyContent = value;
  });
  
  document.getElementById("align-items").addEventListener("change", function() {
    const value = this.value;
    document.querySelector(".flex-container").style.alignItems = value;
  });
  
  document.getElementById("flex-direction").addEventListener("change", function() {
    const value = this.value;
    document.querySelector(".flex-container").style.flexDirection = value;
  });
  