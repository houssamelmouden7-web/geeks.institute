birthdays = {
    "Ahmed": "1998/05/12",
    "Sara": "2001/11/23",
    "Omar": "1995/03/30",
    "Fatima": "2000/08/15",
    "Youssef": "1999/01/05"
}

print("Merhba bik!")
print("Tqder t-chouf tawarikh l-mzyad dyal had n-nas:")

for name in birthdays:
    print("-", name)

person = input("\nKteb smit chi wahed mn l-lita: ")

if person in birthdays:
    date = birthdays[person]
    print(f"Tarikh l-mzyad dyal {person} houwa: {date}")
else:
    print(f"Smah lina, ma 3ndnach ma3loumat 3la l-mzyad dyal {person}.")