let x = 23

if (x >= 20) {
  console.log("성인입니다.")
} else if (x > 13) {
  console.log("청소년입니다.")
} else {
  console.log("어린이입니다.")
}
// 성인입니다. 출력

x = 10

if (x >= 20) {
  console.log("성인입니다.")
} else if (x > 13) {
  console.log("청소년입니다.")
} else {
  console.log("어린이입니다.")
}
// 어린이입니다. 출력

function is_adult(age) {
  if (age >= 20) {
    console.log("성인입니다.")
  } else if (age > 13) {
    console.log("청소년입니다.")
  } else {
    console.log("어린이입니다.")
  }
}

is_adult(23) // 성인입니다. 출력
x = 17
is_adult(x) // 청소년입니다. 출력
let age = 5
is_adult(age) // 어린이입니다. 출력

function I_am_a(age, gender) {
  if (age < 20 && gender == "남") {
    console.log("I am a boy.")
  } else if (gender == "남") {
    console.log("I am a man.")
  } else if (age < 20 && gender == "여") {
    console.log("I am a girl.")
  } else if (gender == "여") {
    console.log("I am a woman.")
  } else {
    console.log("I am who I am")
  }
}

I_am_a(30, "남") // I am a man 출력