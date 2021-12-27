import requests

jsonList = [
    'https://huangda2027.github.io/mortgage.github.io/site.json',
    'https://francochaose.github.io/myfundwebbbbb.io/site.json',
    'https://magic-tangerine.github.io/calculator.github.io/site.json',
    'https://panda0805.github.io/5i1a.github.io/web/home/site.json',
    'https://luzy12345.github.io/web.github.io/site.json',
    'https://wzzyyy123.github.io/site.json',
    'https://lovestories0eng.github.io/wecFinancial/site.json',
    'http://vcafilm.gitee.io/web_study/site.json',
    'https://galaxy-7.github.io/vat/site.json',
    'https://770690988.github.io/SharesGame/assets/jason/site.json',
    'https://banssia.github.io/calculator.github.io/site.json'
]

for i in range(11):
    res = requests.get(url=jsonList[i])
    with open('../assets/json/site' + str(i) + '.json', 'w', encoding='utf-8') as f:
        f.write(res.text.lower())
