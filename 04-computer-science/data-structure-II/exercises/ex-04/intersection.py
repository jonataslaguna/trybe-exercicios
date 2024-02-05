def intersection(listA, listB):
    result = []

    for element in listB:
        if element in listA:
            result.append(element)

    return result
