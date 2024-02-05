def separate_by_letter(list):
    letters = {}
    for word in list:
        fist_letter = word[0]
        if fist_letter not in letters:
            letters[fist_letter] = [word]
        else:
            letters[fist_letter].append(word)

    return letters
