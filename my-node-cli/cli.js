#! /usr/bin/env node

import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input', //type： input, number, confirm, list, checkbox ... 
      name: 'name', // key 名
      message: 'What\'s your name?', // 提示信息
      default: 'my-node-cli' // 默认值
    }
  ])
  .then((answers) => {
    // 脚手架所在的根目录
    const __dirname = 'D:/XPROJECT/FrontEnd-Replay/FEE/my-node-cli/';
    // 生成模板文件目录
    const destUrl = path.join(__dirname, 'templates'); 

    // process cwd() 方法返回 Node.js 进程当前工作的目录
    const cwdUrl = process.cwd()
    // 从模板目录中读取文件
    fs.readdir(destUrl, (err, files) => {
      if(err) throw err;
      files.forEach((file) => {
        /**
         * 使用 ejs 渲染对应的模板文件
         * renderFile（模板文件地址，传入渲染数据）
         * @param {string}  模板文件地址
         * @returns {Object} 传入渲染数据
         */
        ejs.renderFile(path.join(destUrl, file), answers).then(data => {
          // ejs 数据写入文件并生成在根目录
          fs.writeFileSync(path.join(cwdUrl, file), data)
        })
      })
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });