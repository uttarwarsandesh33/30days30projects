const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const speakButton = document.getElementById('speak-btn');
const warningMessage = document.getElementById('warning');

// Fetch available speech synthesis voices
function getVoices() {
  const voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

// Speak the text using selected voice
function speakText() {
  const text = textInput.value.trim();
  
  if (text === '') {
    warningMessage.classList.remove('hide');
    return;
  }

  warningMessage.classList.add('hide');

  const selectedVoice = voiceSelect.value;
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Find the voice by name
  const voices = speechSynthesis.getVoices();
  const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);
  
  if (selectedVoiceObj) {
    utterance.voice = selectedVoiceObj;
    speechSynthesis.speak(utterance);
  }
}

// Event Listeners
speakButton.addEventListener('click', speakText);
textInput.addEventListener('input', () => {
  warningMessage.classList.add('hide');
});

// Initialization
window.speechSynthesis.onvoiceschanged = getVoices;
