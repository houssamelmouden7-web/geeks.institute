class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        
        self.call_history.append(call_record)
        
        other_phone.call_history.append(f"Incoming call from {self.phone_number}")

    def show_call_history(self):
        print(f"\n--- Call History dyal {self.phone_number} ---")
        if not self.call_history:
            print("Ma kayn ta chi call f l-historique.")
        else:
            for record in self.call_history:
                print("-", record)

    def send_message(self, other_phone, content):
        msg_data = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        
        self.messages.append(msg_data)
        
        other_phone.messages.append(msg_data)
        print(f"Message t-safet mn {self.phone_number} l {other_phone.phone_number}!")

    def show_outgoing_messages(self):
        print(f"\n--- Outgoing Messages (li siftati) dyal {self.phone_number} ---")
        outgoing = [m for m in self.messages if m["from"] == self.phone_number]
        for m in outgoing:
            print(f"To: {m['to']} | Content: {m['content']}")

    def show_incoming_messages(self):
        print(f"\n--- Incoming Messages (li weslouk) dyal {self.phone_number} ---")
        incoming = [m for m in self.messages if m["to"] == self.phone_number]
        for m in incoming:
            print(f"From: {m['from']} | Content: {m['content']}")

    def show_messages_from(self, sender_number):
        print(f"\n--- Messages li jaw mn {sender_number} l {self.phone_number} ---")
        found = False
        for m in self.messages:
            if m["from"] == sender_number and m["to"] == self.phone_number:
                print(f"Content: {m['content']}")
                found = True
        if not found:
            print(f"Ma kayn ta message mn {sender_number}.")


phone1 = Phone("0611223344")
phone2 = Phone("0699887766")

print(">>> TEST CALLS:")
phone1.call(phone2)
phone2.call(phone1)

phone1.show_call_history()
phone2.show_call_history()

print("\n>>> TEST MESSAGES:")
phone1.send_message(phone2, "Salam! Labas 3lik?")
phone2.send_message(phone1, "Hamdoulillah, kolchi bikhir!")
phone1.send_message(phone2, "Ghadi ntlaqaw lyouma?")

phone1.show_outgoing_messages()
phone2.show_incoming_messages()
phone2.show_messages_from("0611223344")