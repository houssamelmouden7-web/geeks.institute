record = 0
record_sentence = ""

print("Kteb atwal jomla bla ma testa3mel l harf 'A' (wla 'a').")
print("Ila bghiti t-hbes, kteb 'stop'.\n")

while True:
    sentence = input("Kteb jomla: ")

    # Ila bgha ihbes
    if sentence == "stop":
        print("\nSalina! Atwal jomla 3ndek fiha", record, "7orouf:")
        print(record_sentence)
        break

    if ("a" in sentence) or ("A" in sentence):
        print("Khasra! Fiha l-harf A. 3awed jarreb.\n")
    else:
        toul = len(sentence)

        if toul > record:
            record = toul
            record_sentence = sentence
            print("Mabrouk! Rbehti record jdid:", record, "7orouf!\n")
        else:
            print("Mziana, walakin machi kber mn l-record dyalek (", record, ").\n")