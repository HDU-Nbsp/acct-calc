let i = 1;

function changeIMG() {
  $('img').fadeIn(500);
  i++
  document.querySelector('img').src ='../assets/img/' + i + '.png'
  if (i == 3) {
    i = 0
  }
  setTimeout(function() {
    $('img').fadeOut(500);
  },3500)
  setTimeout(changeIMG,4000)
}

setTimeout(function() {
  $('img').fadeOut(500);
},3500)
setTimeout(changeIMG,4000)