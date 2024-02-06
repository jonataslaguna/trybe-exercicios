list_a = [1, 3, 4, 3, 5, 1]
list_b = [2, 9, 4, 5, 9, 2]


def get_repeated(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num in seen_before:
            repeated.add(num)
        else:
            seen_before.add(num)

    return repeated


if __name__ == "__main__":
    nums = [1, 2, 3, 9, 9, 2, 7, 8, 10, 9, 2, -1, 10]

    print(f"Números repetidos: {get_repeated(nums)}")
