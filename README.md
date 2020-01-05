# @hengye/catalog-tree
快速生成项目目录结构
平时写文档的黑科技

## 使用说明
默认是执行时的父级目录往下遍历（../）,
可自行到index中修改

### 使用方法1： npm包

```shell
npm install @hengye/catalog-tree
```

执行
```shell
node ./node_modules/@hengye/catalog-tree/src/index
```

用完就可以uninstall了
### 使用方法2： 拉到本地
复制一份代码到本地，手动修改要生成的目录地址，执行js文件

要修改的地方: 
```js
// 黑名单，不会生成黑名单下的目录，后期预计加入模糊匹配
const black = [
  "node_modules",
  "dist",
  ".git",
  ".gitignore"
]

// 默认,根据需求手动更改根目录
const _src = '../';
const target = path.join(__dirname, _src);

loadTree(target, 1);
```

执行
```shell
c:/somepath/catalog-tree> node ./src/index
```

## Demo
```shell
 ├─ src
 | └─  index.js
 ├─ test
 | └─  index.spec.js
 ├─  README.md
 ├─  package.json
 ├─  package-lock.json
 └─  LICENSE
```