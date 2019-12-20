<h1 align="center">
  nodeopen
</h1>
<br>
<p align="center">
  <a href="https://travis-ci.org/xudeming208/nodeopen"><img src="https://travis-ci.org/xudeming208/nodeopen.svg?branch=master" alt="Travis Status"></a>
</p>

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