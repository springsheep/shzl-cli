/**
 * @Description: 这个是view模版的生成器
 * @author tao.xie
 * @date 2021/4/19
 */
const {notEmpty} = require('../utils.js')
module.exports = {
    description: 'generate view',
    prompts: [
        {
            root: 'src/views/',
            type: 'file-tree-selection',
            name: 'directory',
            message: '请选择view文件所属目录',
            onlyShowDir: true
        },
        {
            type: 'input',
            name: 'name',
            message: '请输入view文件名称',
            validate: notEmpty('name')
        }

    ],
    actions(data) {
        const {directory, name} = data
        const actions = [{
            type: 'add',
            path: `${directory}/${name}/src/${name}.vue`,
            templateFile: 'plop-templates/view/view.hbs',
            data: {
                name: name
            }
        }, {
            type: 'add',
            path: `${directory}/${name}/index.js`,
            templateFile: 'plop-templates/view/index.hbs',
            data: {
                name: name
            }
        }
        ]

        return actions
    }
}
