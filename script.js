// script.js
const morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?',
    '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
    '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
    '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@'
};

function decodeMorse() {
    const input = document.getElementById('morseInput').value;
    const words = input.trim().split('   '); // Morse code words are separated by 3 spaces
    let decodedMessage = '';

    words.forEach(word => {
        const characters = word.split(' ');
        characters.forEach(char => {
            if (morseCode[char]) {
                decodedMessage += morseCode[char];
            } else {
                decodedMessage += ' ';
            }
        });
        decodedMessage += ' ';
    });

    document.getElementById('output').innerText = decodedMessage.trim();
}
