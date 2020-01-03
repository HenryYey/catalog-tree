/**
 * 简单粗暴的生成项目目录
 * 可手动更改目录地址
 * 可用npm包 或 拉到本地永久使用  
 */
const fs = require('fs');
const path = require('path');

// 黑名单，不会生成黑名单下的目录，后期预计加入模糊匹配
const black = [
  "node_modules",
  "dist",
  ".git",
  ".gitignore"
]

const isWhite = (name) => {
  if (black.indexOf(name) > -1)
    return false;
  return true;
}

// 目标目录
const loadTree = (target, deep) => {
  let prev = new Array(deep).join(' |');
  // 前面| 字符串
  let dirinfo = fs.readdirSync(target);
  let files = [];
  let dirs = [];
  //保存文件或者是文件夹

  //遍历将文件或者文件夹分开存储,黑名单下的文件夹不遍历
  for (let i = 0; i < dirinfo.length; i++) {
    // console.log(path.join(target,dirinfo[i]))
    let state = fs.statSync(path.join(target, dirinfo[i]));
    if (isWhite(dirinfo[i])) {
      if (state.isFile()) {
        files.push(dirinfo[i])
      } else {
        dirs.push(dirinfo[i])
      }
    }
  }

  // 文件夹操作
  for (let i = 0; i < dirs.length; i++) {
    console.log(`${prev} ├─ ${dirs[i]}`)
    // 递归
    const nextPath = path.join(target, dirs[i])
    const nextdeep = deep + 1;
    // 下一级的 文件目录 以及层级
    loadTree(nextPath, nextdeep)
    // 递归调用

  }
  // 文件操作
  for (let i = files.length - 1; i >= 0; i--) {
    if (i === 0) {
      console.log(`${prev} └─  ${files[i]}`)
    } else {
      console.log(`${prev} ├─  ${files[i]}`)
    }
  }
}


// 默认,根据需求手动更改根目录
const _src = '../';
const target = path.join(__dirname, _src);

loadTree(target, 1);
