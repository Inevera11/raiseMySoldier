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

def pattern(x):
    i = 5
    nextX = 0
    while i>0:
        if nextX ==0:
            sum = str(x)
        else:
            sum =  str(nextX) +" "+ str(x)
        print(sum)
        nextX = sum
        x += 1
        i -= 1
pattern(5)
