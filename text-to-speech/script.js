/**
 * Text-to-Speech Converter
 *
 * This code allows users to enter text, select a voice, and convert the text to speech using the Web Speech API.
 * It provides the ability to fetch available speech synthesis voices, speak the entered text using the selected voice,
 * and display a warning message if no text is entered.
 */

// Get the DOM elements
const textInput = document.getElementById("text-input");
const voiceSelect = document.getElementById("voice-select");
const speakButton = document.getElementById("speak-btn");
const warningMessage = document.getElementById("warning");

/**
 * getVoices
 *
 * Fetches available speech synthesis voices and populates the voice select dropdown.
 */
function getVoices() {
  // Fetch available speech synthesis voices
  const voices = speechSynthesis.getVoices();

  // Loop through the voices and create options for the voice select dropdown
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

/**
 * speakText
 *
 * Speaks the entered text using the selected voice.
 */
function speakText() {
  // Get the trimmed text from the input
  const text = textInput.value.trim();

  // Display warning message if no text is entered
  if (text === "") {
    warningMessage.classList.remove("hide");
    return;
  }

  // Hide the warning message if text is entered
  warningMessage.classList.add("hide");

  // Get the selected voice
  const selectedVoice = voiceSelect.value;

  // Create a new SpeechSynthesisUtterance object with the entered text
  const utterance = new SpeechSynthesisUtterance(text);

  // Find the selected voice by name
  const voices = speechSynthesis.getVoices();
  const selectedVoiceObj = voices.find((voice) => voice.name === selectedVoice);

  // Set the selected voice for the utterance and speak the text
  if (selectedVoiceObj) {
    utterance.voice = selectedVoiceObj;
    speechSynthesis.speak(utterance);
  }
}

// Event Listeners

// Listen for click event on the speak button
speakButton.addEventListener("click", speakText);

// Listen for input event on the text input to hide the warning message
textInput.addEventListener("input", () => {
  warningMessage.classList.add("hide");
});

// Initialization

// Trigger the getVoices function when the available voices change
window.speechSynthesis.onvoiceschanged = getVoices;
