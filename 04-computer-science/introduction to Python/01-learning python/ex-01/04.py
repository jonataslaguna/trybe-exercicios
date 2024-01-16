names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggestName(nameList):
    biggestName = nameList[0]
    for name in nameList:
        if len(name) > len(biggestName):
            biggestName = name
    return biggestName


print(biggestName(names))
