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
# pattern(8,5)

def pyramid(topNumber,lenght):
    if lenght<0:
        lenght = lenght*(-1)
    if topNumber<0:
        topNumber = topNumber*(-1)
    loop = lenght
    while loop>0:
        if loop == lenght:
            print(loop*" " + str(topNumber))
        else:
            greaterX = topNumber+1*(lenght-loop)
            lesserX = topNumber-1*(lenght-loop)
            if loop ==lenght-1:
                middle = str(topNumber)
            if lesserX<0:
                lesserX = lesserX*(-1)
            string = str(lesserX) + middle + str(greaterX)
            if greaterX>10:
                string = str(lesserX) + middle + str(greaterX)[1:]
            print(loop*" "+ string )
            middle = string
        loop -= 1
# pyramid(10,15)
# pyramid(-1,4)
# pyramid(8,15)
# pyramid(20,-1)


def symetricPyramid(top, lenght):
    if lenght<0:
        print(''' 
        Nie chcesz się bawić to nie.
         ''')
        return 0
    if top<0:
        top = top*(-1)
    loop = lenght
    while loop>0:
        if loop == lenght:
            print(loop*" " + str(top))
        else:
            sideNumber = top - 1
            if sideNumber < 0:
                sideNumber = sideNumber*(-1)
            if loop ==lenght-1:
                middle = str(top)
            string = str(sideNumber) + middle + str(sideNumber)
            print(loop*" "+string)
            middle = string
            top -= 1
        loop -= 1
# symetricPyramid(6,7)
# symetricPyramid(9,11)
# symetricPyramid(5,-13)
