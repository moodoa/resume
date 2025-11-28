tasks = []
prams = {
    "date": "2025-12-25",
    "target": "children",
}
for toy in ["Godzilla", "drone", "puzzle"]:
    prams["toy"] = toy
    tasks.append(prams)

print(tasks)

# Output:
# [{'date': '2025-12-25', 'target': 'children', 'toy': 'Godzilla'},
#  {'date': '2025-12-25', '                     target': 'children', 'toy': 'drone'},
#  {'date': '2025-12-25', 'target': 'children', 'toy': 'puzzle'}]
# The output shows that all entries in tasks refer to the same prams dictionary,
# which ends up with the last toy value "puzzle" for all entries.
# To fix this, we should create a new dictionary for each iteration:                        
tasks = []
for toy in ["Godzilla", "drone", "puzzle"]:
    prams = {
        "date": "2025-12-25",
        "target": "children",
        "toy": toy,
    }
    tasks.append(prams)         
print(tasks)