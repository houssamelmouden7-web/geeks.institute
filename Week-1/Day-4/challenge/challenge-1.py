kelma = input("dekhel l kelma: ")

result = {}
index = 0

for letter in kelma:
    if letter in result:
        result[letter].append(index)
    else:
        result[letter] = [index]

    index = index + 1

print(result)