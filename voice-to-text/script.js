const recordBtn = document.getElementById("record-btn");
const textInput = document.getElementById("text-input");

let recognition;

// Check browser support for speech recognition
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
} else {
  console.error("Speech recognition not supported in this browser.");
}

recordBtn.addEventListener("click", toggleRecording);

let isRecording = false;

function toggleRecording() {
  isRecording = !isRecording;
  if (isRecording) {
    startRecording();
    recordBtn.classList.add("active");
    recordBtn.innerHTML = "🗣";
  } else {
    stopRecording();
    recordBtn.classList.remove("active");
    recordBtn.innerHTML = "🎤";
  }
}

function startRecording() {
  textInput.value = "";
  recognition.start();
}

function stopRecording() {
  recognition.stop();
}

recognition.onresult = function (event) {
  let finalTranscript = "";
  let interimTranscript = "";

  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;

    if (event.results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interimTranscript += transcript;
    }
  }

  textInput.value = finalTranscript;
};

recognition.onerror = function (event) {
  console.error("Speech recognition error occurred: ", event.error);
};

recognition.onend = function () {
  if (isRecording) {
    startRecording();
  }
};
