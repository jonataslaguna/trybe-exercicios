""" def even_number_counter(n):
    count = 1
    pairs = 0
    while count <= n:
        if count % 2 == 0:
            pairs += 1
        count += 1
    return pairs """


def even_number_counter(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_number_counter(n - 1)
    else:
        return even_number_counter(n - 1)


print(even_number_counter(10))
