class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2

        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2

    def area(self):
        return 3.14 * (self.radius ** 2)

    def __str__(self):
        return f"Circle m3a Radius: {self.radius} o Diameter: {self.diameter}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        jdid_radius = self.radius + other.radius
        return Circle(radius=jdid_radius)

    def __gt__(self, other):
        return self.radius > other.radius
    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius