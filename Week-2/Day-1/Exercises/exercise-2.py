class dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def walk(self):
        return f'{self.name} is just barking around'

    def run_speed(self):
        return (self.weight / self.age * 10)

    def fight(self, other_dog):
        dog1 = self.run_speed()*self.weight
        dog2 = other_dog.run_speed()*other_dog.weight
        if dog1 > dog2:
            return f'{self.name} is stronger than {other_dog.name}'
        elif dog1 < dog2:
            return f'{other_dog.name} is stronger than {self.name}'
        else:
            return f'{self.name} and {other_dog.name} are equally strong'

dog1 = dog('Dog1', 5, 20)
dog2 = dog('Dog2', 3, 15)
dog3 = dog('Dog3', 4, 25)

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))