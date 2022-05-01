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
    # output = []
    # i = 2
    # while i <= max_num:
    #     if is_prime(i):
    #         output.append(i)
    # return output
# print(get_primes(11))

def get_primes_better(max_num):
    primes = []
    for i in range(2, max_num+1):
        is_num_prime = True
        for prime in primes:
            if i % prime == 0:
                is_num_prime = False
                break
        if is_num_prime:
            primes.append(i)
    return primes

print(get_primes_better(28))
