from text_analyzer import TextAnalyzer

text = "Python is fun and Python is powerful"
analyzer = TextAnalyzer(text)

print("--- Testing Methods ---")
print(analyzer)  

print("Character count:", len(analyzer))  

print("Word count:", analyzer.word_count())  

print("Count of 'Python':", analyzer.count_word("Python"))  

print("\n--- Testing Exceptions ---")

try:
    empty_analyzer = TextAnalyzer("")
except Exception as e:
    print(f"Caught expected error (empty text): {e}")

try:
    analyzer.count_word("")
except Exception as e:
    print(f"Caught expected error (empty word): {e}")