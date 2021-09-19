

function updateData(){
  $('#cards-box').empty()
  card_template = 
  `<div class="card !!STATE" id="!!ID">
    <div class="card-body">
      <h5 class="card-title">!!LOCATION</h5>
      <p class="card-text">미세먼지:!!MISE<br>초미세먼지:!!CHOMISE<br>이산화황:!!SO2<br>오존:!!O3<br>이산화질소:!!NO2<br>일산화탄소:!!CO</p>
    </div>
  </div>`;
  $.ajax({
    type: "GET",
    url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
    data: {},
    success: function(response){
      let rows = response.RealtimeCityAir.row
      rows.forEach(({IDEX_MVL:level, 
                    IDEX_NM:level_str, 
                    PM25:chomise, 
                    PM10:mise, 
                    O3, 
                    SO2, 
                    NO2, 
                    CO, 
                    MSRSTE_NM:location,
                    IDEX_NM}) => {
        let card = card_template
          .replace('!!ID', location)
          .replace('!!LOCATION', location)
          .replace('!!MISE', mise)
          .replace('!!CHOMISE', chomise)
          .replace('!!SO2', SO2)
          .replace('!!O3', O3)
          .replace('!!NO2', NO2)
          .replace('!!CO', CO)
          
        
        // if(IDEX_NM === '보통') $(`#${location}`).css('background-color','rgba(255,255,0,.5)')
        // else if(IDEX_NM === '나쁨') $(`#${location}`).css('background-color','rgba(255,0,0,.5)')
        // else if(IDEX_NM === '좋음') $(`#${location}`).css('background-color','rgba(0,255,0,.5)')
        // else $(`#${location}`).css('background-color','rgba(0,0,0,.5)')
        // 스타일을 바꾸는 부분이니까 CSS에서 처리하도록 하고 여기서는 클래스만 바꿔주도록 변경하자. 
        let state = 'normal'
        if(IDEX_NM === '좋음') state = 'good'
        else if(IDEX_NM === '나쁨') state = 'bad'
        else if(IDEX_NM === '매우나쁨') state = 'worst'
        
        card = card.replace('!!STATE', state)
        $('#cards-box').append(card)
      });
    }
  })
}

$(document).ready(function(){
  updateData()
})
