def adding(x:int) -> int:
    if (x < 0):
        x = x*(-1)
    sum = 0
    list = []
    for k in range (1,x+1):
        sum += k
        list.append(k)
    print(''.join(str(l) + " + " for l in list)[:-2] + "=")
    return sum
# print(adding(5))
# print(adding(8))

def multiplicationTable(x):
    list = []
    for i in range(1,11):
        l = i*x
        list.append(l)
    print("Tabliczka mnożenia dla " + str(x) + " to")
    return list
# print(multiplicationTable(5))

num = [12, 75, 150, 180, 145, 525, 50]
print(len(num))
# The number must be divisible by five
# If the number is greater than 150, then skip it and move to the next number
# If the number is greater than 500, then stop the loop
def display(numbers:list) -> list:
    list = []
    for  n in numbers:
        if n > 500:
            break
        if n > 150:
            continue
        if n%5 == 0:
            list.append(n)
    return list
#print(display())

def numberdigits(x):
    x = str(x)
    return len(x)
#print(numberdigits(7584982))

def reverseOrder(x:list):
    i = -1
    k = []
    while i > -len(x):
        x = x[i]
        k.append(x)
        i -= 1
    return k
print(reverseOrder(num))       

