import random
from dog import Dog 

class PetDog(Dog): 
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        all_dogs = [self.name]
        for item in args:
            dog_name = item.name if isinstance(item, Dog) else str(item)
            all_dogs.append(dog_name)
        
        print(f"{', '.join(all_dogs)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")


if __name__ == "__main__":
    my_dog = PetDog("Rex", 3, 20)
    other_dog1 = Dog("Max", 2, 15)
    other_dog2 = Dog("Rocky", 4, 25)

    my_dog.do_a_trick()

    my_dog.train()

    my_dog.do_a_trick()

    my_dog.play(other_dog1, other_dog2, "Oscar")