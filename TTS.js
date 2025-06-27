const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.querySelector('.error-para');

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value.trim();

    if (!speechSynth.speaking && !enteredText.length) {
        error.textContent = `Nothing to Convert! Enter text in the text area.`;
        return;
    }

    if (!speechSynth.speaking && enteredText.length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);

        convertBtn.textContent = "Sound is Playing...";
        newUtter.onend = () => {
            convertBtn.textContent = "Play Converted Sound";
        };

        speechSynth.speak(newUtter);
    }
});
