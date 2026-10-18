#khdemt bchwia te3 ai hitech temrin ra mimkench
class zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []
        self.grouped_animals = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} tzad f zoo.")
        else:
            print(f"{new_animal} deja kain f zoo.")

    def get_animals(self):
        print(f"l hayawanat li kainin f {self.name}")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)
            print(f"{animal} tbi3 f zoo.")
        else:
            print(f"{animal} ma kainch f zoo.")

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}

        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

        return self.grouped_animals
    
    def get_groups(self):
        print(f"\nL-Majmo3at dyal {self.name}:")
        for letter, group in self.grouped_animals.items():
            print(f"Letter '{letter}': {group}")

new_york_zoo = zoo("New York zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Giraffe")

new_york_zoo.sort_animals()

new_york_zoo.get_groups()

