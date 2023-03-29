## 问题：import 和 require 导入的区别？

## 解答：
这两个都是为了JS模块化编程使用。这里要注意 Vue-cli 框架中require 是基于nodejs 的，采用的是 Commonjs ，而 requireJS 这是 AMD 规范。这两者的是不同的，可以看这篇文章：[nodejs的require语句，区别于requirejs](https://blog.csdn.net/yue7603835/article/details/54233567?locationNum=2&fps=1)。

**遵循规范**
* `require` 是 AMD (Asynchronous_module_definition) 规范引入方式
* `import` 是 ES6 的一个语法标准，如果要兼容浏览器的话必须转化成ES5的语法

**调用时间**
* `require` 是赋值过程并且是运行时才执行，也就是同步加载，可以理解为一个全局方法，因为它是一个方法所以意味着可以在任何地方执行。
* `import` 是解构过程并且是编译时执行，理解为异步加载，会提升到整个模块的头部，具有置顶性，但是建议写在文件的顶部。

**本质**
* `require` 是赋值过程，其实 `require` 的结果就是对象、数字、字符串、函数等，再把 `require` 的结果赋值给某个变量
* `import` 是解构过程，但是目前所有的引擎都还没有实现import，我们在 node 中使用 babel 支持 ES6，也仅仅是将 ES6转码为 ES5 再执行，`import` 语法会被转码为 `require`

**性能**
`require` 的性能相对于 `import` 稍低。

因为 `require` 是在运行时才引入模块并且还赋值给某个变量，而 `import` 只需要依据 `import` 中的接口在编译时引入指定模块所以性能稍高

require / exports ：
遵循 CommonJS/AMD，只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
用法只有以下三种简单的写法：

```javascript
const fs = require('fs')
exports.fs = fs
module.exports = fs
```

1. 通过 require 引入基础数据类型时，属于复制该变量。
2. 通过 require 引入复杂数据类型时，数据浅拷贝该对象。
3. 出现模块之间的循环引用时，会输出已经执行的模块，而未执行的模块不输出（比较复杂）
4. CommonJS模块默认export的是一个对象，即使导出的是基础数据类型

import / export：
遵循 ES6 规范，支持编译时静态分析，便于JS引入宏和类型检验。动态绑定。
写法就比较多种多样：

```javascript
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'
```

## 示例：
* [import导入](./importExample1.html)
* [requireJS基础导入](./requireExample1.html)
* [requireJS导入配置依赖模块](./requireExample1.html)

关于require参考：
* https://requirejs.org/
* https://www.ruanyifeng.com/blog/2012/11/require_js.html
* https://www.runoob.com/w3cnote/requirejs-tutorial-1.html

关于两者区别和import参考：
* https://javascript.info/modules-intro
* https://www.cnblogs.com/hwldyz/p/9145959.html
* https://juejin.cn/post/7014011266796617736