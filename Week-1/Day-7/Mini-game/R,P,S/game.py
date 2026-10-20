import random


class Game:

    def get_user_item(self):
        valid_items = ["r", "p", "s"]

        while True:
            user_choice = (
                input("Select (r)ock, (p)aper, or (s)cissors: ").strip().lower()
            )
            if user_choice in valid_items:
                return user_choice
            print("Khta2: Khtar gha 'r', 'p', ola 's'. 3awd jereb.")

    def get_computer_item(self):
        return random.choice(["r", "p", "s"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"

        elif (
            (user_item == "r" and computer_item == "s")
            or (user_item == "p" and computer_item == "r")
            or (user_item == "s" and computer_item == "p")
        ):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(
            f"You chose: {user_item}. The computer chose: {computer_item}. Result: {result}"
        )

        return result