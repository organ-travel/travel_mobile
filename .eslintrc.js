module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
    'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
    'eqeqeq': 0, // 必须使用全等
    'no-extend-native': 0, // 禁止扩展原生类型
    'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
    // error
    'indent': [2, 2], // 强制使用一致的缩进
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    'no-eval': 2, // 禁用 eval()
    'no-else-return': 2, // 禁止在 else 前有 return
    'comma-dangle': [2, 'only-multiline'], // 定义数组或对象最后多余的逗号
    'no-nested-ternary': 2, // 禁用嵌套的三元表达式
    'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-loop-func': 2, // 禁止在循环中出现 function 声明和表达式
    'no-new': 2, // 禁止使用 new 以避免产生副作用
    'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
    'no-return-await': 2, // 禁用不必要的 return await
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-concat': 2, // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-return': 2, // 禁止多余的 return 语句
    'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'consistent-this': [2, 'self'], // 要求一致的 This
    'wrap-regex': 2, // 要求正则表达式被包裹起来
    'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'object-shorthand': 2, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    // vue
    'vue/attribute-hyphenation': 2, //组件的prop不能是驼峰式，可以是my-prop
    'vue/name-property-casing': 2, //组件命名格式MyComponent
    'vue/require-prop-types': 2, //prop必须有类型定义
    'vue/mustache-interpolation-spacing': 2, //{{ text }}
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ] //标签属性应按此顺序
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ] //组件属性应按此顺序
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
