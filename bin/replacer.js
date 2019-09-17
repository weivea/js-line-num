#!/usr/bin/env node
const fs = require('fs')
const glob = require('glob')

// options is optional
glob(
  '**/*.js',
  { ignore: ['node_modules/**/*', '**/node_modules/**/*'] },
  function(er, files) {
    console.log('---------js-line-num-------------')
    
    handleFiles(files).then(()=>{
      console.info('--------------Done!!!-----------')
    }).catch((e)=>{
      console.error(e)
    })
  }
);

async function handleFiles(files) {
  for(var i=0; i<files.length; i++){
    await handleFile(files[i])
  }
}
function handleFile(file) {
  
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        const str = data.toString()
        const lStrs = str.split('\n')
        const reStr = lStrs.map((lStr, ind)=>{
          const re = lStr.replace(/\.getLineNum\(\)/g, `.getLineNum(${ind+1})`)
          return re
        }).join('\n')
        fs.writeFile(file, reStr, (err) => {
          if (err) {
            reject(err)
          } else {
            console.log(file, 'done!')
            resolve()
          }
        });
      }
    })
  })
}