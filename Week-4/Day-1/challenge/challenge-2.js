const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty!");
    } else {
      resolve(morseJS);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const word = prompt("Enter a word or sentence:");
    if (!word) return reject("Error: Empty input!");

    const chars = word.toLowerCase().replace(/\s+/g, "").split("");
    const result = [];

    for (let char of chars) {
      if (morseJS[char]) {
        result.push(morseJS[char]);
      } else {
        return reject(`Error: Character "${char}" does not exist in Morse!`);
      }
    }
    resolve(result);
  });
}

function joinWords(morseTranslation) {
  const div = document.createElement("div");
  div.innerHTML = morseTranslation.join("<br>");
  document.body.appendChild(div);
}

toJs()
  .then((morseObj) => toMorse(morseObj))
  .then((morseArr) => joinWords(morseArr))
  .catch((err) => console.log(err));