#! /usr/bin/env node

import commander from 'commander'
import ora from 'ora'
// 自定义文本信息
const message = 'Loading unicorns'
// 初始化
const spinner = ora(message);
// 开始加载动画

commander.program
.version('0.1.0')
.command('create <name>')
.description('create a new project')
.action(name => {
  // 打印命令输入的值
  console.log('project name is ' + name)
  spinner.start();
  setTimeout(() => {
    // 修改动画样式

    // Type: string
    // Default: 'cyan'
    // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
    spinner.color = 'red';    
    spinner.text = 'Loading rainbows';

    setTimeout(() => {
        // 加载状态修改
        spinner.stop() // 停止
        spinner.succeed('Loading succeed'); // 成功 ✔
        // spinner.fail(text?);  失败 ✖
        // spinner.warn(text?);  提示 ⚠
        // spinner.info(text?);  信息 ℹ
    }, 2000);
}, 2000);
})

commander.program.parse()