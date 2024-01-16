def biggestNumber(num1, num2):
    message = "O maior número é "
    if num1 > num2:
        message += str(num1)
    else:
        message += str(num2)
    return message


print(biggestNumber(5, 10))


