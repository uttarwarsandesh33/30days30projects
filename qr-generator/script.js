// script.js
const generateBtn = document.getElementById("generateBtn");
const urlInput = document.getElementById("url");
const qrCodeContainer = document.getElementById("qrcode");

const qrImg = document.querySelector("img");
generateBtn.addEventListener("click", generateQRCode);

function generateQRCode() {
  const url = urlInput.value.trim();

  if (!url) {
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
}

// Default generation
generateQRCode();
