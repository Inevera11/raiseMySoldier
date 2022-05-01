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
print(adding(5))