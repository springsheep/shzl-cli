{
  "name": "<%= name %>",
  "version": "0.1.2",
  "private": true,
  "scripts": {
    "dev": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build --mode production",
    "build:development": "vue-cli-service build --mode development",
    "lint": "vue-cli-service lint",
    "cz": "git add . && git-cz",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "postbuild": "node build/version.js",
    "new": "plop"
  },
  "dependencies": {
    "@cm/cm-jsbridge": "^1.1.0",
    "@cm/cm-lib": "^1.0.1",
    "@cm/cm-mobile-ui": "^1.0.3",
    "amfe-flexible": "^2.2.1",
    "core-js": "^3.6.5",
    "vant": "^2.12.24",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0",
    "vuex-persist": "^3.1.3"
  },
  "devDependencies": {
    "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "babel-plugin-import": "^1.13.3",
    "commitizen": "^4.2.4",
    "compression-webpack-plugin": "5.0.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^6.7.2",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-vue": "^6.2.2",
    "inquirer-file-tree-selection-prompt": "^1.0.12",
    "node-sass": "^4.12.0",
    "path": "^0.12.7",
    "plop": "^2.7.4",
    "postcss-pxtorem": "^5.1.1",
    "prettier": "^2.2.1",
    "sass-loader": "^8.0.2",
    "svg-sprite-loader": "^6.0.9",
    "vue-eslint-parser": "^7.9.0",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
}
