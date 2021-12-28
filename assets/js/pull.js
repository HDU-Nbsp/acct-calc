const axios = require('axios');
const fs = require('fs');

let jsonList = [
  'https://huangda2027.github.io/mortgage.github.io/site.json',
  'https://francochaose.github.io/myfundwebbbbb.io/site.json',
  'https://magic-tangerine.github.io/calculator.github.io/site.json',
  'https://panda0805.github.io/5i1a.github.io/web/home/site.json',
  'https://luzy12345.github.io/web.github.io/site.json',
  'https://beerman123.gitee.io/site.json',
  'https://lovestories0eng.github.io/wecFinancial/site.json',
  'http://vcafilm.gitee.io/web_study/site.json',
  'https://galaxy-7.github.io/vat/site.json',
  'https://770690988.github.io/SharesGame/assets/jason/site.json',
  'https://banssia.github.io/calculator.github.io/site.json'
]


// function pull (JSONurl, index) {
//   axios.get('https://huangda2027.github.io/mortgage.github.io/site.json', res => {
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   });
// }

// // filePath = './json/site' + index + '.json';
// // field = JSON.stringify(res);
// // fs.writeFile(filePath, field, function (err) {
// //   if (err) {
// //     console.log(index + '拉取失败' + err);
// //   } else {
// //     console.log('拉取成功');
// //   }
// // })
// // console.log(res.data);

// /***** 用于测试单个问题site,3 8 1 9 4 *****/
// // function singlePull() {
// //   axios.get(jsonList[8]).then((res) => {
// //     console.log(res.data);
// //   }).catch((err) => {
// //     console.log(err.message);
// //   })
// // }

// function main () {
//   for (let i = 0; i < jsonList.length; i++) {
//     pull(jsonList[i], i);
//   }
//   // singlePull();
// }
// main();



// for(let i = 0; i < jsonList.length; i++) {
//   axios.get(jsonList[i]).then((res) => {
//     console.log(res.data);
//   }).catch((err) => {
//     console.log(err.message + ' ' + i);
//   })
// }


//node无法请求，未知原因
axios.get('https://galaxy-7.github.io/vat/site.json').then((res) => {
  console.log(res.data);
}).catch(err => {
  console.log(err.message)
})