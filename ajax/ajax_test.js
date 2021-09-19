$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response) {
    let {row:rows} = response["RealtimeCityAir"]
    rows.forEach(({IDEX_MVL: level, MSRSTE_NM: location}) => {
      let temp_html = `<li>${location}:${level}</li>`
      $("#mise-result").append(temp_html)
      console.log(location, level)
    })
  }
})