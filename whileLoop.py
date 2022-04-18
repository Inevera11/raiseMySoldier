# Exercise 1: Print First 10 natural numbers using while loop
#so I think I need to clone everything...


# def nextTenNumbers(n):
#     i=1
#     while i < 11:
#         i += 1
#         print(n)
#         n += 1
# print(nextTenNumbers(7))

# x="mielonka"
# while x:
#     print(x, end=' ')
#     x = x[1:]

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
pattern(3,9)
