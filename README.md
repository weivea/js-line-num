# @weivea/js-line-num

js 获取当前代码所在行数！！！！哈哈哈
在node端，有时候我们要打日志，要求把 代码所在行数写到日志里~
javascript 不能直接获取到 代码所在行数，

- 方法一：`new Error()` 从错误栈获取 **但性能低下**
- 方法二：代码运行前预处理
- 方法三：手写啊

本组件实现了方法一二，讲道理，貌似手写还简单点，觉得有道理的帮忙点个★呀（手动哭脸）~

## install
npm install @weivea/js-line-num --save

## usage

```javascript
const jsLine = require('@weivea/js-line-num')

console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
console.log(jsLine.getLineNum())
```

### 预处理

```bash
node_modules/.bin/jsLine
```
或者 配置 `npm run jsLine` 命令

package.json
```json
{
  //...
  scripts: {
    jsLine: jsLine
  }
  //...
}

