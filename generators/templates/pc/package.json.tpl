{
  "name": "<%= name %>",
  "author": "tao.xie",
  "version": "1.0.3",
  "description": "cm-admin-base",
  "scripts": {
    "dev": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build --mode production",
    "build:development": "vue-cli-service build --mode development",
    "lint": "vue-cli-service lint",
    "cz": "git add . && git-cz",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 ",
    "postbuild": "node build/version.js",
    "new": "plop"
  },
  "dependencies": {
    "@cm/cm-lib": "^1.0.1",
    "@cm/cm-ui": "^1.2.4",
    "axios": "^0.19.0",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.6.2",
    "vuex-persist": "^3.1.3"
  },
  "devDependencies": {
    "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
    "@vue/cli-plugin-babel": "^4.5.12",
    "@vue/cli-plugin-eslint": "^4.1.0",
    "@vue/cli-service": "^4.1.0",
    "babel-eslint": "^10.0.3",
    "commitizen": "^4.2.3",
    "compression-webpack-plugin": "^5.0.1",
    "core-js": "^3.10.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^5.16.0",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-vue": "^5.0.0",
    "inquirer-file-tree-selection-prompt": "^1.0.7",
    "less": "^4.1.1",
    "less-loader": "^6.0.0",
    "node-sass": "^4.14.1",
    "plop": "^2.7.4",
    "sass-loader": "^10.0.1",
    "style-loader": "^3.2.1",
    "svg-sprite-loader": "^4.1.6",
    "vue-eslint-parser": "^7.6.0",
    "vue-template-compiler": "^2.6.10"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
}
