/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2021-11-12 09:41:06
 * @LastEditors: 张鹏
 * @LastEditTime: 2021-11-12 10:04:07
 */
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Generator4wechat = void 0
const chalk_1 = __importDefault(require('chalk'))
const consola_1 = __importDefault(require('consola'))
const path_1 = require('path')
const constant_1 = require('./constant')
const yeoman_environment_1 = __importDefault(require('yeoman-environment'))
const yeoman_generator_1 = __importDefault(require('yeoman-generator'))
const TEMPLATES = path_1.join(constant_1.GENERATOR_DIR, 'templates', 'wechat')
// const PROMPTS = [
//   {
//     name: 'preprocessor',
//     message: 'Select css preprocessor',
//     type: 'list',
//     choices: ['Less', 'Sass']
//   }
// ];
class Generator4wechat extends yeoman_generator_1.default {
  constructor(name) {
    super([], {
      env: yeoman_environment_1.default.createEnv([], {
        cwd: path_1.join(constant_1.CWD, name),
      }),
      resolved: constant_1.GENERATOR_DIR,
    })
    this.inputs = {
      name: '',
      // cssLang: '',
      // preprocessor: ''
    }
    this.inputs.name = name
  }
  async prompting() {
    // return this.prompt<Record<string, string>>(PROMPTS).then(inputs => {
    //   const preprocessor = inputs.preprocessor.toLowerCase();
    //   const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;
    //
    //   this.inputs.cssLang = cssLang;
    //   this.inputs.preprocessor = preprocessor;
    // });
  }
  writing() {
    consola_1.default.info(`Creating project in ${path_1.join(constant_1.CWD, this.inputs.name)}\n`)
    const copy = (from, to) => {
      this.fs.copy(path_1.join(TEMPLATES, from), this.destinationPath(to || from))
    }
    const copyTpl = (from, to) => {
      this.fs.copyTpl(path_1.join(TEMPLATES, from), this.destinationPath(to || from), this.inputs)
    }
    copyTpl('package.json', 'package.json')
    copy('components/**/*', 'components')
    copy('miniprogram_npm/**/*', 'miniprogram_npm')
    copy('pages/**/*', 'pages')
    copy('static/**/*', 'static')
    copy('utils/**/*', 'utils')
    copy('app.js')
    copy('app.json')
    copy('app.wxss')
    copy('app.js')
    copy('sitemap.json')
    copy('project.config.json')
  }
  install() {
    console.log()
    consola_1.default.info('Install dependencies...\n')
    process.chdir(this.inputs.name)
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true,
    })
  }
  end() {
    const { name } = this.inputs
    console.log(`${name} 小程序初始化成功`)
    consola_1.default.success(`Successfully created ${chalk_1.default.yellow(name)}.`)
    consola_1.default.success(`Run ${chalk_1.default.yellow(`cd ${name} && yarn dev`)} to start development!`)
  }
}
exports.Generator4wechat = Generator4wechat
