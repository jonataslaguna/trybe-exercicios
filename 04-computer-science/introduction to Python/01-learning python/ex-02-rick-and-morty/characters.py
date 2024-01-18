import json

with open("rickandmorty.json") as character_file:
    file_content = json.load(character_file)

for character in file_content:
    print(character['name'])
