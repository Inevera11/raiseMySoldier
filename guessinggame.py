from random import randint

number = randint(0, 100)
while True:
    guess = int(input("Find my number (0-100)\nNumber: "))
    if guess > number:
        print("LOL too big")
    elif guess < number:
        print("LOL too small")
    else:
        break
print("You have won")
