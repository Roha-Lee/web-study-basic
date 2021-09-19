// // form태그에 값 입력하기 
// $('#article-url').val('새 글입니다.')
// // form태그 값 가져오기 
// let url = $('#article-url').val()
// console.log(url)

// posting-box class를 가진 div태그 숨기기
function togglePostingBox() {
  sel = '.posting-box'
  if ($(sel).css('display') === 'none'){
    // input 박스외의 대부분의 태그의 시작태그와 종료태그 사이에 있는 텍스트에 접근 
    // .text()
    // .text('string')
    $(sel).show()
    $('#btn-posting-box').text('포스팅박스 닫기')
  }
  else{
    $(sel).hide()
    $('#btn-posting-box').text('포스팅박스 열기')
  }
}

// 포스팅 카드 추가하기 
function addPostingCard() {
  // html요소를 동적으로 추가하고 싶을 경우 .append()메소드 사용 
  let img_url = 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg';
  let link_url = 'https://google.com/';
  let title = '제목 - 구글';
  let desc = '구글에 대한 설명이 여기에 들어간다.';
  let comment = '여기는 개인적인 코멘트가 들어간다.';
  let temp_html = 
  `<div class="card">
    <img 
      src="${img_url}"
      class="card-img-top" alt="starry night">
    <div class="card-body">
      <a href="${link_url}">
        <p class="card-text">${title}</p>
      </a>
      <p class="card-text content">${desc}</p>
      <p class="card-text comment">${comment}</p>
    </div>
  </div>`
  $('#cards-box').append(temp_html)
}


// 페이지가 로딩되자마자 실행되게 하려면 아래와 같이 사용한다. 
// 아니면 <script> 태그에 defer속성을 줘도 비슷하게 동작한다.
$(document).ready(function(){
  addPostingCard()
  addPostingCard()
  addPostingCard()
})

