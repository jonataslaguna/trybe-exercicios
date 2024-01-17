""" def printAsterisks(n):
    count = 0
    while count <= n:
        print(count * '*')
        count += 1


print(printAsterisks(5)) """


def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


draw_triangle(5)
