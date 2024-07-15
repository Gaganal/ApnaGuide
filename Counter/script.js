const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const numCount = document.getElementById('num-count');
const specialCharCount = document.getElementById('special-char-count');

textInput.addEventListener('input', function() {
    const text = textInput.value.trim();

    // Count words
    const words = text.split(/\s+/).filter(word => word !== '');
    wordCount.textContent = words.length;

    // Count characters
    charCount.textContent = text.length;

    // Count numbers
    const numbers = text.replace(/[^0-9]/g, '');
    numCount.textContent = numbers.length;

    // Count special characters
    const specialChars = text.replace(/[^\w\s]/g, '');
    specialCharCount.textContent = specialChars.length;
});
