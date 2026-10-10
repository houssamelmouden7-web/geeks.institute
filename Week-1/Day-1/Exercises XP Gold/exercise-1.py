chher = int(input("khter chi chhar mn 1 htal 12 : "))

if chher >=3 and chher <=5:
    print("spring")   
elif chher >=6 and chher <=8:
    print("summer")
elif chher >=9 and chher <=11:
    print("Autumn")
elif chher == 12 or chher == 1 or chher == 2:
    print("Winter")
else :
    print(f"kain chi chhar {chher} kteb chi chhar mn 1 htal 12 bla tmergin")
