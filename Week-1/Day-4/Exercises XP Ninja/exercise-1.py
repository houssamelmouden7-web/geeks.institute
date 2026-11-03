cars_text = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars = cars_text.split(", ")

print("3adad charikat houwa:", len(cars))

cars_sorted_desc = sorted(cars, reverse=True)
print("Tartib Z-A:", cars_sorted_desc)

count_o = 0
count_no_i = 0

for car in cars:
    if "o" in car.lower():
        count_o = count_o + 1
        
    if "i" not in car.lower():
        count_no_i = count_no_i + 1

print("Charikat li fihom l-harf 'o':", count_o)
print("Charikat li ma fihomch l-harf 'i':", count_no_i)

cars_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

unique_cars = list(set(cars_with_duplicates))

print("\nCharikat bla t3wad:", ", ".join(unique_cars))
print("3adad charikat daba:", len(unique_cars))

reversed_names = []
for car in cars:
    reversed_names.append(car[::-1])

reversed_names.sort()
print("Klimat maqloubin w mrttbin A-Z:", reversed_names)