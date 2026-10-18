class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("hemouch", 3) 
cat2 = Cat("oreo", 5)
cat3 = Cat("lkhel", 2)

def find_oldest_cat(cats):
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

all_cats = [cat1, cat2, cat3]
oldest_cat = find_oldest_cat(all_cats)

print(f"The oldest cat is {oldest_cat.name} and is {oldest_cat.age} years old.")