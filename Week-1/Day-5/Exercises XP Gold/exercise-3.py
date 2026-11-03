class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
        print(f"-> Zdna '{name}' f l-menu b naja7!")

    def update_item(self, name, price, spice, gluten):
        dish_found = False
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                dish_found = True
                print(f"-> Plat '{name}' tbeddel b naja7!")
                break
        
        if not dish_found:
            print(f"-> Tnbih: Plat '{name}' ma kaynch f l-menu bach nbeddloh.")

    def remove_item(self, name):
        dish_to_remove = None
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish_to_remove = dish
                break

        if dish_to_remove is not None:
            self.menu.remove(dish_to_remove)
            print(f"-> Plat '{name}' t-mse7! L-menu l-m7eyyen:")
            for item in self.menu:
                print(item)
        else:
            print(f"-> Tnbih: Plat '{name}' ma lqinahch f l-menu bach nmsehوه.")

manager = MenuManager()

manager.add_item("Pizza", 20, "B", True)

manager.update_item("Soup", 12, "C", False)

manager.update_item("Tacos", 15, "A", True)

manager.remove_item("French Fries")