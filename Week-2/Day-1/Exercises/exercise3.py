class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self,**kwargs):
        self.members.append(kwargs)
        print(f"{kwargs['name']} has been added to the {self.last_name} family.")
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    return True
                else:
                    return False
        return False
    def family_presentation(self):
        print(f"The {self.last_name} family has {len(self.members)} members:")
        for member in self.members:
            print(f"{member['name']}, age {member['age']}, is a {member['gender']}.")

instance = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

family = Family("Smith", instance)

family.family_presentation()

family.born(name='Emily', age=5, gender='Female', is_child=True)

print("Wach Michael kber mn 18?:", family.is_18("Michael"))
print("Wach Leo kber mn 18?:", family.is_18("Leo"))

family.family_presentation()