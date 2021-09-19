for(let i = 0; i < 100; i++) {
  console.log(i)
}

let people = ['철수','영희','민수','형준','기남','동희']
// i가 1씩 증가하면서, people의 원소를 차례대로 불러올 수 있다.
for (let i = 0 ; i < people.length ; i++) {
	  console.log(people[i])
}

let scores = [
  {'name':'철수', 'score':90},
  {'name':'영희', 'score':85},
  {'name':'민수', 'score':70},
  {'name':'형준', 'score':50},
  {'name':'기남', 'score':68},
  {'name':'동희', 'score':30},
]

// 각 사람의 기록 출력
for (let i = 0 ; i < scores.length ; i++) {
  console.log(scores[i])
}

// 점수가 70 미만인 사람의 이름 출력
for (let i = 0 ; i < scores.length ; i++) {
  let score = scores[i]
  if (score['score'] < 70) {
      console.log(score['name']);
}
}