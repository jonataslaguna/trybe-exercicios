list = [1, 5, 6, 6, 6, 8, 10]


def verify_number_frequency_quadratic(list):
    for number1 in list:
        count = 0
        percentage = len(list) // 4  # 25%
        for number2 in list:
            if number1 == number2:
                count += 1
        if count > percentage:
            return number2
    return -1


def verify_number_frequency_linear(list):
    twenty_five_percent = len(list) // 4
    seventy_five_percent = len(list) - twenty_five_percent

    for index, number in enumerate(list[:seventy_five_percent]):
        if number == list[index + twenty_five_percent]:
            return number
    return -1


print(verify_number_frequency_linear(list))
