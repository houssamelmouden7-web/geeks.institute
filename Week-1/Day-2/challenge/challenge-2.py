user_word = input("Enter your word: ")

result = ""
last_letter = "" 

for letter in user_word:
    if letter != last_letter:
        result += letter 
        last_letter = letter 

print(result)