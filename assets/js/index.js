let route = document.querySelectorAll('.box')
let starList = ['https://github.com/huangda2027/mortgage.github.io',
'https://github.com/francochaose/myfundwebeo.io',
'https://magic-tangerine.github.io/calculator.github.io/',
'https://github.com/panda0805/5i1a.github.io',
'https://github.com/luzy12345/web.github.io',
'https://gitee.com/beerman123/beerman123',
'https://github.com/lovestories0eng/wecFinancial',
'https://gitee.com/vcafilm/stock-view',
'https://github.com/GALAXY-7/vat',
'https://github.com/770690988/SharesGame',
'https://github.com/banssia/calculator.github.io']
let projectIndex

function toProject () {
  document.querySelector('iframe').src = "./components/ProjectPage.html"
  activeNav(1);
  window.location = "/#/projectlist"
}
function toMainPage () {
  document.querySelector('iframe').src = "./components/mainPage.html"
  activeNav(0);
  window.location = "/#/"
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
function checkLocation (hash) {
  hash = hash.toLowerCase()
  href = hash.split('/')[1]
  projectId = hash.split('/')[2]
  switch(href) {
    case '': {
      toMainPage()
      break
    }
    case 'projectlist': {
      toProject()
      break
    }
    case 'add': {
      toAddPage()
      break
    }
    default: {
      toMainPage()
    }
  }
}
function gitStarBtnClick () {
  $('.confirm').click(() => {
    console.log('评分')
  })
  $('.cancel').click(() => {
    $('.mark').css('visibility','hidden')
  })
}

window.onload = function () {
  let hash = window.location.hash
  document.querySelector('body').style.height = window.innerHeight + 'px'
  checkLocation(hash)
  //GITALK插件生成
  var gitalk = new Gitalk({
    clientID: '1b044e0159fad857c496',
    clientSecret: '6114eac37eb4fc32029091d8dc85183b062c39cf',
    repo: 'acct-calc',
    owner: 'HDU-Nbsp',
    admin: 'HDU-Nbsp',
    id: location.hash,      // 如果要每篇文章都使用独立评论 需要改为id: location.hash
                                // 或者id: md5(location.hash)注意md5包需要单独引入
    distractionFreeMode: false  // 无干扰模式
  })
  
  gitalk.render('gitalk-container')
}
