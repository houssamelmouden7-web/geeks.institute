brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"],
    },
}
brand ["number_stores"] = 2

clients = ", ".join(brand["type_of_clothes"])
print(f"Zara sells clothes for: {clients}.")

brand["country_creation"] = "Spain"

brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("colors in the us: ", brand["major_color"]["US"])

print("chhal mn info kain f brand:", len(brand))

print("keys f brand:", brand.keys())

more_on_zara = {"creation_date": 1975, "number_stores": 10000}

brand.update(more_on_zara)

print("chhal mn store 3endna:", brand["number_stores"])