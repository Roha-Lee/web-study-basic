# 2. 자료형과 기본 연산 
## 2-1. 숫자형 
a = 4.8
a = 7
b = 2
print(a+b, a-b, a*b, a/b, a//b, a%b, a**b, a+3*b)
a = 5
a = a + 3
print(a)
a += 1
## 2-2. 문자열 
word1 = "ROHA"
word2 = "GRU"
mac = "McDonald's"
sentence = 'He said, "Hello!"'

a = 1
b = 'a'
c = a
print(a, b, c)
# d = x ERROR
d = 'x'

first_name = 'Harry'
last_name = 'Potter'
print(first_name + last_name)
print(first_name + ' ' + last_name)

a = '3'
b = '5'
print(a+b)
# print(a + 5) ERROR
print(a * 5)

# 대문자로 바꾸기 
myname = 'roha'
print(myname.upper(), myname)

# 이메일 주소에서 gmail만 추출하기 
myemail = 'rohagru@gmail.com'
result = myemail.split('@')[1].split('.')[0]
print(result)

# 특정 문자를 다른 문자로 바꾸기 
txt = '서울시-마포구-망원동'
result = txt.replace('-','>')
print(result)

## 2-3. Bool type 
# True, False의 첫글자가 대문자임에 주의하자! (자바스크립트는 소문자였음.)
x = True
y = False
print(4>2, 5<1, 6>=5, 4<=4, 3==5, 4!=7)
a = 4>2
print(not a)
b = 2!=2
print(a and b, a or b)

## 2-4. List & Dictionary 
a_list = []
a_list.append(1)
a_list.append([2,3])
print(a_list, len(a_list), a_list[0], a_list[1], a_list[1][0])

a_dict = {}
a_dict = {'name':'bob','age':21}
a_dict['height'] = 178

people = [{'name':'bob','age':20},{'name':'carry','age':38}]
person = {'name':'john','age':7}
people.append(person)

a = [3, 3, 1]
b = [5, 2]

a + b  # [3, 3, 1, 5, 2]
a * 2  # [3, 3, 1, 3, 3, 1]