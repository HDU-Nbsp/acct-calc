let projectList = ["https://huangda2027.github.io/mortgage.github.io/",
  "https://francochaose.github.io/myfundwebeo.io/",
  "https://magic-tangerine.github.io/calculator.github.io/",
  "https://panda0805.github.io/5i1a.github.io/web/home/home.html",
  "https://luzy12345.github.io/web.github.io",
  "http://beerman123.gitee.io/",
  // "https://lovestories0eng.github.io/techBond/", 潘时煌另一个项目
  "https://lovestories0eng.github.io/wecFinancial/",
  "http://vcafilm.gitee.io/stock-view/stock.html",
  "https://galaxy-7.github.io/vat/",
  "https://770690988.github.io/SharesGame/",
  "https://banssia.github.io/calculator.github.io/"
]

let errData = {
  "ProjectName": "undefined",
  "Introduce": "未上传site.json或上传有误（建议检查一下是不是404）",
  "GitStar": "5",
  "UpdatedTime": "UNKNOWN",
  "Functionary": "Author",
  "GitAdress": "null"
}

function insertProjectDemo (filePath, gitPath) {
  $.getJSON(filePath, function (data) {
    renderJSON(data, gitPath)
  }).catch(err => {
    console.log(filePath)
    renderJSON(errData, gitPath)
  })
}

function renderJSON (data, gitPath) {
  let parent = $('.form')[0]
  let projectNode = document.createElement('div')

  if (!data.UpdatedTime) {
    data.UpdatedTime = '2021-12-7'
  }
  projectNode.className = 'project'
  projectNode.innerHTML =
    '<a class="projectName" href = "' + gitPath + '" onclick="openProject(event)">' + data.projectname + '</a>'
    + '<a class="projectInformation" href = "' + gitPath + '" onclick="openProject(event)">' + data.introduce + '</a>'
    + '<div class="gitStars">' + 5 + '</div>'
    + '<div class="updatedTime">' + data.updatedtime + '</div>'
    + '<div class="functionary">' + data.functionary + '</div>'
  parent.appendChild(projectNode)
}

function main () {
  for(let i = 0; i < projectList.length; i++) {
    let filePath = '../assets/json/site' + i + '.json'
    insertProjectDemo(filePath,projectList[i])
  }
}

main();