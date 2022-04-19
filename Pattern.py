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
