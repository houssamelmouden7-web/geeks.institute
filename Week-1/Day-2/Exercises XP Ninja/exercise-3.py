text = "Python is very easy to learn. Python is also fun to write. Do you like Python?"

total_chars = len(text)

sentences_count = text.count(".") + text.count("!") + text.count("?")

words = text.split()
total_words = len(words)

clean_words = []
for w in words:
    clean_words.append(w.lower())

unique_words = set(clean_words)
unique_words_count = len(unique_words)

no_spaces = 0
for char in text:
    if char != " ":
        no_spaces = no_spaces + 1

avg_words = total_words / sentences_count

non_unique_count = total_words - unique_words_count

print("--- Nata2ij ---")
print("Total characters:", total_chars)
print("Total sentences:", sentences_count)
print("Total words:", total_words)
print("Unique words:", unique_words_count)

print("\n--- Bonus ---")
print("Characters bla spaces:", no_spaces)
print("Average words per sentence:", avg_words)
print("Klimat li m3awdin:", non_unique_count)