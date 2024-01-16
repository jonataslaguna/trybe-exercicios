numberList = [5, 10, 54, 97, 18]


def calculateAverage(list):
    lengthList = len(list)
    sum = 0

    for number in list:
        sum += number
    average = sum / lengthList
    return average


print(calculateAverage(numberList))
