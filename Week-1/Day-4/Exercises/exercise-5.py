import random


def guess_number(user_num):
    random_num = random.randint(1, 100)

    if user_num == random_num:
        print(f"Success! Both numbers are {user_num}.")
    else:
        print(
            f"Fail! Your number was {user_num}, but generated number was {random_num}."
        )
nm =int(input("Enter a number between 1 and 100: "))        
guess_number(nm)