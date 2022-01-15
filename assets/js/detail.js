//插入评分悬浮窗
function giveMark (projectName, index) {
  $('.mark').css('visibility','visible')
  gitStarBtnClick()
  $('.mark-head').text(projectName)
  window.location.hash = '#/projectList/' + index
  // 通过$获取的对象为jq对象，不能直接调用js方法
  // 此处之前写的$().href = ...无法生效正是因此
  $('.mark-content').attr('href', starList[index])
}

function jumpToStar () {
  window.location = $('.mark-content').attr('href')
}


//生成评论区，需要调用gittalk
function comment () {}
