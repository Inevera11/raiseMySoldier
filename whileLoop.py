# Exercise 1: Print First 10 natural numbers using while loop
#so I think I need to clone everything...


def nextTenNumbers(n):
    i=1
    while i < 11:
        i += 1
        print(n)
        n += 1
# print(nextTenNumbers(7))

def cutFirstLetter(word: str) -> str:
    while word:
        print(word, end=' ')
        word = word[1: ]
# cutFirstLetter("Kocham")

def is_prime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
def get_primes(max_num):
    output = []
    for i in range(2, max_num+1):
        if is_prime(i):
            output.append(i)
    return output
# print(get_primes(11))


def pattern(startPoint,lenght):
    nextX = 0
    while lenght > 0:
        if nextX == 0:
            sum = str(startPoint)
        else:
            sum =  str(nextX) + " " + str(startPoint)
        print(sum)
        nextX = sum
        startPoint += 1
        lenght -= 1
# pattern(6, 9)
