const syb = Symbol('keep')
const jsLineNum = {
  __syb: syb,
}
Object.defineProperty(jsLineNum, 'getLineNum', {
  get(){
    return function(lineNum) {
      if(this.__syb !== syb) {
        throw new Error(`"js-line-num" shuld be called like:
const jsLine = require('@weivea/js-line-num')
console.log(jsLine.getLineNum(11))
        `)
      }
      if (lineNum) {
        return lineNum
      }

      var err = new Error()
      var stack = err.stack.split('\n')[2]
      var lineNum = stack.match(/\.js:(\d+):(\d+)/)[1]

      return lineNum
    }
  }
})

module.exports = jsLineNum