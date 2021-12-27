//插入评分悬浮窗
function giveMark (projectName) {
  let mark = 
  '<div class="mark">' + 
  '<div class="mark-head mark-content"></div>' + 
  '<div class="mark-body mark-content">☆☆☆☆☆</div>' + 
  '<div class="mark-foot mark-content"></div>' + 
  '</div>'
  $('body').append(mark)
  $('.mark').text(projectName)
}

//生成评论区，需要调用gittalk
function comment () {}
