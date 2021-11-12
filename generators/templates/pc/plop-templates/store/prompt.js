/**
 * @Description:  这个是store模版的生成器。
 * @author tao.xie
 * @date 2021/4/19
 */
const {notEmpty} = require('../utils.js')

module.exports = {
    description: '生成store模版',
    prompts: [{
        type: 'input',
        name: 'name',
        message: '请输入store模块名称',
        validate: notEmpty('name')
    },
        {
            type: 'checkbox',
            name: 'blocks',
            message: '选择需要的属性',
            choices: [{
                name: 'state',
                value: 'state',
                checked: true
            },
                {
                    name: 'mutations',
                    value: 'mutations',
                    checked: true
                },
                {
                    name: 'actions',
                    value: 'actions',
                    checked: true
                }
            ],
            validate(value) {
                if (!value.includes('state') || !value.includes('mutations')) {
                    return 'store 必须要包含 state and mutations'
                }
                return true
            }
        }
    ],
    actions(data) {
        const name = '{{name}}'
        const {blocks} = data
        const options = ['state', 'mutations']
        const joinFlag = `,
  `
        if (blocks.length === 3) {
            options.push('actions')
        }

        const actions = [{
            type: 'add',
            path: `src/store/modules/${name}.js`,
            templateFile: 'plop-templates/store/index.hbs',
            data: {
                name: name,
                options: options.join(joinFlag),
                state: blocks.includes('state'),
                mutations: blocks.includes('mutations'),
                actions: blocks.includes('actions')
            }
        }]
        return actions
    }
}
