# Jadwal l-morse
MORSE_CODE = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '0': '-----', '1': '.----',
    '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.'
}

# 1. Mn Anglais l-Morse
def text_to_morse(text):
    text = text.upper()
    words = text.split(" ")
    morse_words = []
    
    for word in words:
        morse_letters = []
        for letter in word:
            if letter in MORSE_CODE:
                morse_letters.append(MORSE_CODE[letter])
        morse_words.append(" ".join(morse_letters))
    
    return " / ".join(morse_words)


MORSE_TO_TEXT = {}
for letter, code in MORSE_CODE.items():
    MORSE_TO_TEXT[code] = letter

def morse_to_text(morse):
    words = morse.split(" / ")
    decoded_words = []
    
    for word in words:
        letters = word.split(" ")
        word_text = ""
        for code in letters:
            if code in MORSE_TO_TEXT:
                word_text = word_text + MORSE_TO_TEXT[code]
        decoded_words.append(word_text)
        
    return " ".join(decoded_words)


msg = "HELLO WORLD"
encoded = text_to_morse(msg)
print("Morse:", encoded)

decoded = morse_to_text(encoded)
print("Decoded:", decoded)