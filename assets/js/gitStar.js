//打开项目时的入口函数
function openProject (event) {
  window.parent.giveMark(event.target.parentElement.children[0].textContent)
}