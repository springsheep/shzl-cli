/**
 * @Description: 这是plop配置文件:
 * --注册自定义prompt引导器,用于引导提示获得对应的选项配置结果(可参考view的模版生成引导);
 * --注册generator（对应的generator模版在plop-templates下）
 * @author tao.xie
 * @date 2021/4/19
 */
const storeGenerator = require('./plop-templates/store/prompt.js')
const viewGenerator = require('./plop-templates/view/prompt.js')
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
module.exports = function(plop) {
  plop.setPrompt('file-tree-selection', inquirerFileTreeSelection)
  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('view', viewGenerator)
}
