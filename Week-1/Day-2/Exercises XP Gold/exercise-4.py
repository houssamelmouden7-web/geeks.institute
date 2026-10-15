names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus', 'zakaria']

user_name = input("chno smitek: ")

if user_name in names:
    i = names.index(user_name)
    print("smitek kain f:", i)
else:
    print("smitek makainch hna akhi")