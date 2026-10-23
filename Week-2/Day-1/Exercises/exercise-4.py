from exercise3 import Family

class TheIncreaser(Family):
    def __init__(self,last_name, age):
        super().__init__(last_name, age)

    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                if member['name'] == name:
                    print(f"{member['incredible_name']} has used their power!")
                    return
                else:
                    print(f"{name} IS NOT OLD ENOUGH TO USE THEIR POWER!")

    def incredible_presentation(self):
        print("\n*Here is our incredible family presentation!*")
        super().family_presentation()
        print("\n super powers details:")
        for member in self.members:
            incredible_name = member.get('incredible_name', 'Unknown')
            incredible_power = member.get('incredible_power', 'Unknown')
            print(f"- {incredible_name}: {incredible_power}")

instance = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredibles = TheIncreaser("Incredible", instance)

incredibles.incredible_presentation()

incredibles.use_power("Michael")

incredibles.born(name='Emily', age=5, gender='Female', is_child=True, incredible_name='BabyFly', incredible_power='super strength')

incredibles.use_power("Emily")

incredibles.incredible_presentation()