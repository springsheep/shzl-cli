module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    plugins: [
        'html',
        'vue'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    // check if imports actually resolve
    'settings': {
        //添加共享规则参数,会提供给每一个规则，但是规则使不使用，看规则的设置
        'import/resolver': {
            'webpack': {
                //解析webpack配置项，路径为bulid/webpack.base.conf.js
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue

    // 0 或’off’：  关闭规则。
    // 1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
    // 2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
    rules: {
        'accessor-pairs': 2,//强制 getter 和 setter 在对象中成对出现
        'arrow-spacing': [2, { //强制箭头函数的箭头前后使用一致的空格
            'before': true,
            'after': true
        }],
        'block-spacing': [2, 'always'], //禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': [2, '1tbs', { //强制在代码块中使用一致的大括号风格
            'allowSingleLine': true //允许块的开括号和闭括号在 同一行
        }],
        'camelcase': [0, { //要求使用骆驼拼写法
            'properties': 'always'
        }],
        'comma-dangle': [2, 'never'], //禁止使用拖尾逗号
        'comma-spacing': [2, { //强制在逗号周围使用空格
            'before': false, // 禁止在逗号前使用空格
            'after': true //要求在逗号后使用一个或多个空格
        }],
        'comma-style': [2, 'last'], //强制使用一致的逗号风格，要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        'constructor-super': 2, //要求在构造函数中有 super() 的调用
        'curly': [2, 'multi-line'], //强制所有控制语句使用一致的括号风格，允许在单行中省略大括号，而if、else if、else、for、while 和 do，在其他使用中依然会强制使用大括号
        'dot-location': [2, 'property'],//强制在点号之前或之后换行，要求点操作符和属性放在同一行
        'eol-last': 2, //强制文件末尾保留一行空行 (LF)
        'eqeqeq': [2, "always", {"null": "ignore"}],//要求使用 === 和 !==， 除了与 null 字面量进行比较时，总是强制使用绝对相等
        'generator-star-spacing': [2, { //强制 generator 函数中 * 号周围使用一致的空格
            'before': true,
            'after': true
        }],
        'handle-callback-err': [2, '^(err|error)$'], //要求回调函数中有容错处理，这规则是关于Node.js 或 在浏览器中使用CommonJS 的
        'indent': [2, 2, { //强制使用一致的缩进，缩进为两个空格
            'SwitchCase': 1 //case 子句将相对于 switch 语句缩进 2 个空格
        }],
        'jsx-quotes': [2, 'prefer-single'],//强制在 JSX 属性中一致地使用双引号或单引号，强制所有不包含单引号的 JSX 属性值使用单引号
        'key-spacing': [2, { //强制在对象字面量的键和值之间使用一致的空格
            'beforeColon': false,//禁止在对象字面量的键和冒号之间存在空格
            'afterColon': true //要求在对象字面量的冒号和值之间存在至少有一个空格
        }],
        'keyword-spacing': [2, { //强制在关键字前后使用一致的空格
            'before': true, //要求在关键字之前至少有一个空格
            'after': true //要求在关键字之后至少有一个空格
        }],
        'new-cap': [2, { //要求构造函数首字母大写
            'newIsCap': true, //要求调用 new 操作符时有首字母大小的函数
            'capIsNew': false //允许调用首字母大写的函数时没有 new 操作符
        }],
        'new-parens': 2,//要求调用无参构造函数时带括号
        'no-array-constructor': 2,//禁止使用 Array 构造函数
        'no-caller': 2, //禁用 arguments.caller 或 arguments.callee
        'no-console': 'off', //允许使用console
        'no-class-assign': 2, //禁止修改类声明的变量
        'no-cond-assign': 2,//禁止条件表达式中出现赋值操作符
        'no-const-assign': 2, //禁止修改 const 声明的变量
        'no-control-regex': 2,//禁止在正则表达式中使用控制字符
        'no-delete-var': 2,//禁止删除变量
        'no-dupe-args': 2,//禁止 function 定义中出现重名参数
        'no-dupe-class-members': 2,//禁止类成员中出现重复的名称
        'no-dupe-keys': 2,//禁止在对象字面量中出现重复的键
        'no-duplicate-case': 2,//禁止出现重复的 case 标签
        'no-empty-character-class': 2,//禁止在正则表达式中使用空字符集
        'no-empty-pattern': 2,//禁止使用空解构模式
        'no-eval': 2,//禁用 eval()
        'no-ex-assign': 2,//禁止对 catch 子句的参数重新赋值
        'no-extend-native': 2,//禁止扩展原生类型
        'no-extra-bind': 2,//禁止不必要的 .bind() 调用
        'no-extra-boolean-cast': 2,//禁止不必要的布尔转换
        'no-extra-parens': [2, 'functions'],//禁止冗余的括号,只在 函数表达式周围禁止不必要的圆括号
        'no-fallthrough': 2,//禁止 case 语句落空
        'no-floating-decimal': 2,//禁止数字字面量中使用前导和末尾小数点
        'no-func-assign': 2,//禁止对 function 声明重新赋值
        'no-implied-eval': 2,//禁止使用类似 eval() 的方法
        'no-inner-declarations': [2, 'functions'],//禁止 function 声明出现在嵌套的语句块中
        'no-invalid-regexp': 2,//禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-irregular-whitespace': 2,//禁止不规则的空白
        'no-iterator': 2,//禁用 __iterator__ 属性
        'no-label-var': 2,//不允许标签与变量同名
        'no-labels': [2, { //禁用标签语句
            'allowLoop': false,
            'allowSwitch': false
        }],
        'no-lone-blocks': 2,//禁用不必要的嵌套块
        'no-mixed-spaces-and-tabs': 2,//禁止空格和 tab 的混合缩进
        'no-multi-spaces': 2,//禁止使用多个空格
        'no-multi-str': 2,//禁止使用多行字符
        'no-multiple-empty-lines': [2, {//禁止出现多行空行
            'max': 1// 最多一行
        }],
        'no-native-reassign': 2,//禁止对原生对象或只读的全局对象进行赋值
        'no-negated-in-lhs': 2,//禁止对关系运算符的左操作数使用否定操作符
        'no-new-object': 2,//禁用 Object 的构造函数
        'no-new-require': 2,//禁止调用 require 时使用 new 操作符
        'no-new-symbol': 2,//禁止 Symbolnew 操作符和 new 一起使用
        'no-new-wrappers': 2,//禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-obj-calls': 2,//禁止把全局对象作为函数调用
        'no-octal': 2,//禁用八进制字面量
        'no-octal-escape': 2,//禁止在字符串中使用八进制转义序列
        'no-path-concat': 2,//禁止对 __dirname 和 __filename 进行字符串连接
        'no-proto': 2,//禁用 __proto__ 属性
        'no-redeclare': 2,//禁止多次声明同一变量
        'no-regex-spaces': 2,//禁止正则表达式字面量中出现多个空格
        'no-return-assign': [2, 'except-parens'],//禁止在 return 语句中使用赋值语句,禁止出现赋值语句，除非使用括号把它们括起来
        'no-self-assign': 2,//禁止自我赋值
        'no-self-compare': 2,//禁止自身比较
        'no-sequences': 2,//禁用逗号操作符
        'no-shadow-restricted-names': 2,//禁止将标识符定义为受限的名字
        'no-spaced-func': 2,//禁止在函数标识符和其调用之间有空格
        'no-sparse-arrays': 2,//禁用稀疏数组
        'no-this-before-super': 2,//禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-throw-literal': 2,//禁止抛出异常字面量
        'no-trailing-spaces': 2,//禁用行尾空格
        'no-undef': 2,//禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 2,//禁止将变量初始化为 undefined
        'no-unexpected-multiline': 2,//禁止出现令人困惑的多行表达式
        'no-unmodified-loop-condition': 2,//禁用一成不变的循环条件
        'no-unneeded-ternary': [2, {//禁止可以在有更简单的可替代的表达式时使用三元操作符
            'defaultAssignment': false //禁止条件表达式作为默认的赋值模式
        }],
        'no-unreachable': 2,//禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unsafe-finally': 2,//禁止在 finally 语句块中出现控制流语句
        'no-unused-vars': [2, { //禁止出现未使用过的变量
            'vars': 'all', //检测所有变量，包括全局环境中的变量。这是默认值。
            "args": "after-used", //不检查最后一个使用的参数之前出现的未使用的位置参数，但是检查最后一个使用的参数之后的所有命名参数和所有位置参数。
            "argsIgnorePattern": "^_"//选项指定排除不需要检测：这些参数的名字符合正则匹配。例如，下划线开头的变量。
        }],
        'no-useless-call': 2,//禁止不必要的 .call() 和 .apply()
        'no-useless-computed-key': 2,//禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 2,//禁用不必要的构造函数
        'no-useless-escape': 0,//禁用不必要的转义字符
        'no-whitespace-before-property': 2,//禁止属性前有空白
        'no-with': 2,//禁用 with 语句
        'one-var': [2, { //强制函数中的变量要么一起声明要么分开声明
            'initialized': 'never' //要求每个作用域的初始化的变量有多个变量声明
        }],
        'operator-linebreak': [2, 'after', { //强制操作符使用一致的换行符,要求把换行符放在操作符后面
            'overrides': {
                '?': 'before', // ?前
                ':': 'before' // :前
            }
        }],
        'padded-blocks': [2, 'never'], //禁止块语句和类的开始或末尾有空行
        'quotes': [2, 'single', { //强制使用一致的反勾号、双引号或单引号， 要求尽可能地使用单引号
            'avoidEscape': true, //允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
            'allowTemplateLiterals': true //允许字符串使用反勾号
        }],
        'semi': [2, 'never'],//禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
        'semi-spacing': [2, { //强制分号之前和之后使用一致的空格
            'before': false, //分号之前禁止有空格
            'after': true //分号之后强制有空格
        }],
        'space-before-blocks': [2, 'always'],//强制在块之前使用一致的空格
        'space-before-function-paren': [2, 'never'],//禁止函数圆括号之前有一个空格
        'space-in-parens': [2, 'never'], //强制圆括号内没有空格
        'space-infix-ops': 2,//要求操作符周围有空格
        'space-unary-ops': [2, { //强制在一元操作符前后使用一致的空格
            'words': true, //适用于单词类一元操作符
            'nonwords': false //适用于这些一元操作符
        }],
        'spaced-comment': [2, 'always', { //强制在注释中 // 或 /* 使用一致的空格
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'],//禁止模板字符串中的嵌入表达式周围空格的使用
        'use-isnan': 2,//要求使用 isNaN() 检查 NaN
        'valid-typeof': 2,//强制 typeof 表达式与有效的字符串进行比较
        'wrap-iife': [2, 'any'],//要求 IIFE 使用括号括起来，强制总是包裹，但允许其它风格
        'yield-star-spacing': [2, 'both'], //强制在 yield* 表达式中 * 周围使用空格
        'yoda': [2, 'never'],//要求或禁止 “Yoda” 条件
        'prefer-const': 2,//要求使用 const 声明那些声明后不再被修改的变量
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //禁用 debugger
        'object-curly-spacing': [2, 'always', { //强制在大括号中使用一致的空格
            objectsInObjects: false //禁止以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)
        }],
        'array-bracket-spacing': [2, 'never'], //强制数组方括号中使用一致的空格，禁止在数组括号内出现空格
    }
}
