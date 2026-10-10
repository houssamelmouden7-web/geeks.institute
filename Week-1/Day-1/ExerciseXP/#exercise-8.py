#exercise-8
sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich",
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print("I made your", sandwich)
