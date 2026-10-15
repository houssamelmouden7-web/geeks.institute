import random

def get_random_temp(season):
    if season == "winter":
        temp = random.uniform(-10, 16)
    elif season == "spring":
        temp = random.uniform(16, 23)
    elif season == "autumn" or season == "fall":
        temp = random.uniform(10, 24)
    elif season == "summer":
        temp = random.uniform(24, 40)
    else:
        temp = random.uniform(-10, 40)

    return round(temp, 1)

def main():
    month = int(input("Enter the month number (1-12): "))

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"

    temp = get_random_temp(season)

    print(f"\nlharara deba {temp}.")

    if temp < 0:
        print("tara kain l berd lbess chi haja mzyaaana ra kain l berd.")
    elif 0 <= temp <= 16:
        print("berd chwia ghi lbes chwia.")
    elif 16 < temp <= 23:
        print("ljo mzyan l bess ou sf.")
    elif 23 < temp <= 32:
        print("kaina chemch bera ou ljo mzyan safi sir 3ich.")
    else:
        print("tara l mot te3 chemch bera gha blama tkhroj.")

main()