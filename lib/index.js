#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const inquirer_1 = __importDefault(require('inquirer'))
const consola_1 = __importDefault(require('consola'))
const fs_extra_1 = require('fs-extra')
const generator4antvue_1 = require('./generator4antvue')
const generator4pc_1 = require('./generator4pc')
const generator4dd_1 = require('./generator4dd')
const generator4mobile_1 = require('./generator4mobile')
const generator4miniapp_1 = require('./generator4miniapp')
const generator4librollup_1 = require('./generator4librollup')
const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称',
  },
  {
    type: 'list',
    name: 'platform',
    message: '平台类型',
    choices: ['miniapp', 'pc', 'mobile', 'lib-rollup', 'antvue', 'dd'],
  },
]
async function run() {
  const { name, platform } = await inquirer_1.default.prompt(PROMPTS)
  try {
    await fs_extra_1.ensureDir(name)
    let generator = null
    switch (platform) {
      case 'antvue': {
        // pc的ant模版生成
        generator = new generator4antvue_1.Generator4AntVue(name)
        break
      }
      case 'dd': {
        // pc的叮叮模版生成
        generator = new generator4dd_1.Generator4DD(name)
        break
      }
      case 'pc': {
        // pc的模版生成
        generator = new generator4pc_1.Generator4pc(name)
        break
      }
      case 'mobile': {
        // 移动端的模版生成
        generator = new generator4mobile_1.Generator4Mobile(name)
        break
      }
      case 'miniapp': {
        // uni小程序的模版生成
        generator = new generator4miniapp_1.Generator4MiniApp(name)
        break
      }
      case 'lib-rollup': {
        generator = new generator4librollup_1.Generator4LibRollup(name)
      }
    }
    generator && generator.run()
  } catch (e) {
    consola_1.default.error(e)
  }
}
exports.default = run
run()
