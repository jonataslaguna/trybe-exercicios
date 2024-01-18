input_numbers = input('Digite alguns números separando-os por espaços: ')

numbers = input_numbers.split(' ')

sum_numbers = 0

for number in numbers:
    if not number.isdigit():
        print('Digite apenas números')
        break
    else:
        sum_numbers += int(number)

print(f'A soma vale: {sum_numbers}')
