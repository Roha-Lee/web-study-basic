function sum(num1, num2) {
  let result = num1 + num2 
  console.log(num1, '+', num2, '=', result)
  return result
}

sum(3, 5)
let a = sum(4, -1)
console.log(a)

// 필요한 변수도 반환값도 없는 함수 
function hey() {
  console.log("Hey :)")
}
hey()   // Hey :) 출력


// 필요한 변수가 없는 함수
function three() {
  return 3
}

let b = three()
console.log(b)    // 3이 a에 저장됨

// 반환값이 없는 함수
function hello(name) {
  console.log("Hi, "+name.toUpperCase()+"!")
}

let c = hello("roha")  // Hi, ROHA!이 출력
console.log(c)           // undefined