family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

total_cost = 0

print("--- Ticket Prices ---")
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price
    print(f"{name.title()} ({age} years old) pays: dh{price}")

print(f"\nTotal cost for the family: dh{total_cost}")