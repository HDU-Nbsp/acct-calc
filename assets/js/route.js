//构造函数
function Router() {
  this.routes = {};
  this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function(){};//给不同的hash设置不同的回调函数
};
Router.prototype.refresh = function() {
  console.log(location.hash.slice(1));//获取到相应的hash值
  this.currentUrl = location.hash.slice(1) || '/';//如果存在hash值则获取到，否则设置hash值为/
  // console.log(this.currentUrl);
  if(this.currentUrl&&this.currentUrl!='/'){
      this.routes[this.currentUrl]();//根据当前的hash值来调用相对应的回调函数
  }

};
Router.prototype.init = function() {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}
//给window对象挂载属性
window.Router = new Router();