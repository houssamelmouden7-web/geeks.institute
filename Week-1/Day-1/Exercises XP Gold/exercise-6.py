import random

win = 0
lose = 0

print("Marhba bik fhad mini Game! Kteb 'baraka' bech tkhroj")

while True:
    user_nm = input("khtar ra9em mn 1 htal 9: ")

    if user_nm == "baraka":
        break

    nm = int(user_nm)
    secret_nm = random.randint(1, 9)

    if nm == secret_nm:
        print("kain 9emar mou7terif tla3 ra9m :", secret_nm)
        win = win + 1
    else:
        print("misslahch lik l 9mer ra9em kan:", secret_nm)
        lose = lose + 1

    print("----------------------------------------")

print("sala terh ha score dyalek:")
print("rbehti", win, "mara")
print("khsserti", lose, "mara")