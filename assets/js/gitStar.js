//打开项目时的入口函数
function openProject (event) {
  let hash = parent.window.location.hash
  parent.window.location.hash = hash + '?' + "projectName=" + event.target.textContent
  window.parent.giveMark(event.target.parentElement.children[0].textContent)
}