class TextAnalyzer:
    def __init__(self, text: str):
        if not text or not text.strip():
            raise Exception("The text cannot be empty!")
        
        self.text = text

    def word_count(self) -> int:
        words = self.text.split()
        return len(words)

    def __str__(self) -> str:
        return f"TextAnalyzer object with {self.word_count()} words"

    def __len__(self) -> int:
        return len(self.text)

    def count_word(self, word: str) -> int:
        if not word or not word.strip():
            raise Exception("Search word cannot be empty!")
        
        words = self.text.split()
        return words.count(word)