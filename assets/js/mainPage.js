let i = 1;

function changeIMG() {
  i++
  document.querySelector('img').src ='../assets/img/' + i + '.png'
  if (i == 3) {
    i = 0
  }
  setTimeout(changeIMG,3000)
}

setTimeout(changeIMG,3000)