fruits = ['사과','배','배','감','수박','귤','딸기','사과','배','수박']
def count_fruit(target):
    count = 0
    for fruit in fruits:
        if target == fruit:
            count += 1
    return count

print(count_fruit('배'))
print(count_fruit('귤'))