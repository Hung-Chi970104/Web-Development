people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Raveclaw"},
    {"name": "Draco", "house": "Slytherin"},
]

def f(person):
    return person["name"]

people.sort(key=lambda person: person["name"])

print(people)