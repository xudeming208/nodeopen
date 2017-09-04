# nodeopen

## 介绍
nodejs打开浏览器

## 用法
```javascript
const nodeopen = require('nodeopen');
nodeopen('http://www.baidu.com');
nodeopen('http://www.baidu.com',function (){
	console.log('you are opened baidu in browser!');
});
```