function getCat() {
  $.ajax({
    type: "GET",
    url: "https://api.thecatapi.com/v1/images/search",
    data: {},
    success: function(response) {
      $('.cat-container').css('background-image',`url(${response[0].url})`)
    }
  })
}

$(document).ready(() => {
  getCat()
})