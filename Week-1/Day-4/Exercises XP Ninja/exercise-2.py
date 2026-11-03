def get_full_name(first_name, last_name, middle_name=""):
    first = first_name.title()
    last = last_name.title()
    
    if middle_name != "":
        middle = middle_name.title()
        return f"{first} {middle} {last}"
    else:
        return f"{first} {last}"

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))

print(get_full_name(first_name="bruce", last_name="lee"))