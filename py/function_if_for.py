# 함수 
def sum_all(a,b,c):
    return a+b+c

def mul(a,b):
    return a*b

result = sum_all(1,2,3) + mul(10,10)
print(result)

# 조건문 
def oddeven(num):
    return True if num%2==0 else False

result = oddeven(20)
print(result)

def is_adult(age):
    return '성인' if age > 20 else '청소년'
print(is_adult(30))

def is_adult_2(age):
    if age > 20:
        print('성인')
    elif age >= 13:
        print('청소년')
    else:
        print('어린이')
is_adult_2(30)

# 반복문
fruits = ['사과','배','감','귤']
for fruit in fruits:
    print(fruit)
