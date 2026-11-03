import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("Da2ira (Circle): Majmou3at noqat li 3ndhom nefs l-masafa mn l-markaz (center).")

c1 = Circle(5)
print("Rayon:", c1.radius)
print("Perimeter:", round(c1.perimeter(), 2))
print("Area:", round(c1.area(), 2))
c1.definition()