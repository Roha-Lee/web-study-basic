let a_list = []
let b_list = [1,2,'hey',3]
console.log(b_list[1], b_list[2])
b_list[2] = 5
console.log(b_list)
// 리스트에 요소 넣기 
b_list.push('헤이')
console.log(b_list, b_list.length)

// 리스트 안에 리스트 넣기 
let list_in_list = [1, 4, 2, [3,1]]
console.log(list_in_list.length, list_in_list[3], list_in_list[3][1])

let c_list = [4, 1, 0]
list_in_list.push(c_list)
console.log(list_in_list)
console.log(list_in_list.length)

// 리스트와 리스트 잇기 
let concat_list = c_list.concat(b_list)
console.log(c_list)
console.log(b_list)
console.log(concat_list)

// 딕셔너리 
let a_dict = {}
let b_dict = {'name':'Bob','age':21}
console.log(b_dict['name'], b_dict['age'])

// 값 수정
b_dict['age'] = 40
// 값 추가
b_dict['height'] = 180
console.log(b_dict)

// 딕셔너리들의 리스트 
names = [{'name':'bob','age':20},{'name':'carry','age':38}]
new_name = {'name':'john','age':7}
names.push(new_name)
console.log(names)
console.log(names[2]['name'])