//打开项目时的入口函数
function openProject (event) {
  let parentWindow = event.target.parentElement
  window.parent.giveMark(parentWindow.children[0].textContent,parentWindow.id)
}