## 常用软件
[git-for-windows 阿里镜像源](https://registry.npmmirror.com/binary.html?path=git-for-windows/)

## 文档

## NodeJS 环境
[nvm详细安装步骤以及使用（window10系统）](https://blog.csdn.net/Anony_me/article/details/124153201)
[nvm 切换 node版本报错以及切换无效](https://blog.csdn.net/m0_57068257/article/details/123086064)

### `npm i` 安装失败 ，报错`npm ERR! cb() never called!`
按照网上 [npm ERR cb() never called](https://stackoverflow.com/questions/15393821/npm-err-cb-never-called) 各类方法

清除缓存
```shell
npm cache clean -f
```

不生成 package 安装
```
npm install --no-package-lock
```

查看 npm 日志，发现有些依赖包请求很久。

查看 npm 源是否有问题。
```shell
npm config get registry
```

重启大法也用上了，就是没有任何效果，nrm 也莫名失效了。最后换了 cnpm 竟然解决了，所以还是源的问题吗？

安装 cnpm 版本 7.1.0
```shell
npm install cnpm@7.1.0 -g
cnpm i
```