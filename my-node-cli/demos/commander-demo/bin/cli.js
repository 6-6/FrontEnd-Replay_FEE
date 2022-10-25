#! /usr/bin/env node

const program = require('commander')

program
.version('0.1.0')
.command('create <name>')
.description('create a new project')
.action(name => {
  // 打印命令输入的值
  console.log('project name is ' + name)
})

program.parse()