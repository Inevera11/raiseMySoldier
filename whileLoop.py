# Exercise 1: Print First 10 natural numbers using while loop
#so I think I need to clone everything...


def nextTenNumbers(n):
    i=1
    while i < 11:
        i += 1
        print(n)
        n += 1
# print(nextTenNumbers(7))

def cutLastLetter(word: str) -> str:
    while word:
        print(word, end=' ')
        word = word[:-1]
    print()
    return word
# cutLastLetter("Alleluja")

