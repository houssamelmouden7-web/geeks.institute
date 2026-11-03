birthdate = input("Dkhel tarikh l-mzyad dyalek (DD/MM/YYYY): ")

parts = birthdate.split("/")
birth_year = int(parts[2])

current_year = 2026
age = current_year - birth_year

candles_count = age % 10

candles = "i" * candles_count

cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

is_leap_year = (birth_year % 4 == 0 and birth_year % 100 != 0) or (birth_year % 400 == 0)

print(f"\n3endek {age} 3am, ghadi nheto {candles_count} chemat:")

if is_leap_year:
    print("Mabrouk! Tzedti f 3am kabbis (Leap Year), 3endek 2 kikat:")
    print(cake)
    print(cake)
else:
    print(cake)