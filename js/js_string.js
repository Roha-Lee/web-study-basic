// 문자열 
let word1 = "jungle"
let word2 = 'coding'

let mac = "McDonald's"
let sentence = 'He said, "Hello!"' 
let a = 1
let b = "a"
let c = a
console.log(a, b, c) 

// let d = x // 에러, x가 정의되어 있지 않음. 
let d = 'x'
console.log(d)

let firstName = "Harry"
let lastName = "Potter"

console.log(firstName + lastName) // HarryPotter
console.log(firstName + " " + lastName) // Harry Potter

let e = "3" 
let f = "5"
console.log(e + f)

let g = 7
console.log(firstName + g)

// 대문자로 만들기 
let myname = 'roha'
myname = myname.toUpperCase()
console.log(myname)

// 특정 문자를 다른 문자로 바꾸기 
let txt = '서울시-마포구-망원동'
let names = txt.split('-')
let result = names.join('>')
console.log(result)