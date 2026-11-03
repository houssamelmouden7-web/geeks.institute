import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_numbers(self):
        return [random.randint(1, 100) for _ in self.letters]

my_letters = MyList(["d", "a", "c", "b"])
print("Original:", my_letters.letters)
print("Reversed:", my_letters.get_reversed())
print("Sorted:", my_letters.get_sorted())
print("Random numbers (nafs t-toul):", my_letters.generate_random_numbers())