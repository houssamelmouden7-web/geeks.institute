data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine",
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977",
    },
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader",
    },
    {"question": "What species is Chewbacca?", "answer": "Wookiee"},
]

def sou2al():
    sa7i7 = 0
    khata2 = 0
    sou2al_khata2 = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            sa7i7 += 1
        else:
            khata2 += 1
            sou2al_khata2.append(
                {
                    "question": item["question"],
                    "answer": item["answer"],
                    "user_answer": user_answer,
                }
            )

    return sa7i7, khata2, sou2al_khata2

def natija(sa7i7, khata2, sou2al_khata2):
    print("\n--- Quiz Results ---")
    print(f"Correct answers: {sa7i7}")
    print(f"Incorrect answers: {khata2}")

    if khata2 > 0:
        print("\nsou2al jawbti 3lih khata2:")
        for item in sou2al_khata2:
            print(f"- Question: {item['question']}")
            print(f"  Your answer: {item['user_answer']}")
            print(f"  Correct answer: {item['answer']}\n")

def mti7en_9sser():
    while True:
        sa7i7, khata2, sou2al_khata2 = sou2al()
        natija(sa7i7, khata2, sou2al_khata2)

        if khata2 > 3:
            retry = (
                input(
                    "3endek kter mn 3 te3 l khta2, ila bghiti t3awd kteb (ah/la): "
                )
                .strip()
                .lower()
            )
            if retry == "ah":
                print("\nMarhba, zid n3awdo!\n")
            else:
                print("Ok, bslama!")
                break
        else:
            print("Bravo! Nti7an naji7, tbarkellah 3lik.")
            break


mti7en_9sser()