let route = document.querySelectorAll('.box');
function toProject () {
  document.querySelector('iframe').src = "./components/ProjectPage.html"
  activeNav(1);
  window.location = "#/projectlist"
}
function toMainPage () {
  document.querySelector('iframe').src = "./components/mainPage.html"
  activeNav(0);
  window.location = "#/"
}
function toAddPage () {
  document.querySelector('iframe').src = "./components/AddProject.html"
  activeNav(2);
  window.location = "#/add"
}
function activeNav(nav) {
  $('.box').css('background-color', 'rgb(10, 89, 92)')
  $('.box:eq(' + nav + ')').css('background-color', 'rgb(8, 74, 77)')
}
function checkLocation (href) {
  switch(href) {
    case '#/': {
      toMainPage()
      break
    }
    case '#/projectlist': {
      toProject()
      break
    }
    case '#/add': {
      toAddPage()
    }
  }
}

Router.route('/', () => {
  toMainPage();
})
Router.route('/projectlist', () => {
  toProject();
})

window.onload = function () {
  let hash = window.location.hash
  document.querySelector('body').style.height = window.innerHeight + 'px'
  checkLocation(hash)
}
